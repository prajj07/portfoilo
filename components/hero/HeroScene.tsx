"use client";

import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

type NodeDef = {
  id: string;
  label: string;
  detail: string;
  position: [number, number, number];
};

const NODES: NodeDef[] = [
  {
    id: "mobile",
    label: "MOBILE",
    detail: "Flutter · application delivery",
    position: [-1.6, 1.15, 0.2],
  },
  {
    id: "web",
    label: "WEB",
    detail: "React · Next.js interfaces",
    position: [1.55, 1.05, -0.15],
  },
  {
    id: "backend",
    label: "BACKEND",
    detail: "APIs · services · auth",
    position: [0, 0.15, 0.35],
  },
  {
    id: "ai",
    label: "AI",
    detail: "Gemini · LLM product features",
    position: [-1.35, -0.75, 0.1],
  },
  {
    id: "data",
    label: "DATA",
    detail: "PostgreSQL · Redis · queues",
    position: [1.4, -0.7, 0.05],
  },
  {
    id: "cloud",
    label: "CLOUD",
    detail: "AWS · Docker · notifications",
    position: [0.05, -1.45, -0.2],
  },
];

const EDGES: [string, string][] = [
  ["mobile", "backend"],
  ["web", "backend"],
  ["backend", "ai"],
  ["backend", "data"],
  ["backend", "cloud"],
  ["ai", "data"],
  ["data", "cloud"],
];

const MOBILE_NODES = NODES.filter((n) =>
  ["mobile", "backend", "ai", "data", "cloud"].includes(n.id),
);

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return mobile;
}

function SystemGraph({
  reduced,
  compact,
  activeId,
  onActive,
}: {
  reduced: boolean;
  compact: boolean;
  activeId: string | null;
  onActive: (id: string | null) => void;
}) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const nodes = compact ? MOBILE_NODES : NODES;
  const nodeMap = useMemo(
    () => Object.fromEntries(nodes.map((n) => [n.id, n])),
    [nodes],
  );

  const edges = useMemo(
    () =>
      EDGES.filter(([a, b]) => nodeMap[a] && nodeMap[b]).map(([a, b]) => {
        const from = new THREE.Vector3(...nodeMap[a].position);
        const to = new THREE.Vector3(...nodeMap[b].position);
        const mid = from.clone().lerp(to, 0.5);
        const dir = to.clone().sub(from);
        const length = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize(),
        );
        return { a, b, mid, length, quat };
      }),
    [nodeMap],
  );

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    const d = Math.min(delta, 0.05);
    group.current.rotation.y += d * 0.08;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.12,
      0.03,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -pointer.current.x * 0.1,
      0.03,
    );
  });

  return (
    <group ref={group} scale={compact ? 0.92 : 1.05} position={[0.55, 0.05, 0]}>
      <Float
        speed={reduced ? 0 : 0.7}
        rotationIntensity={0}
        floatIntensity={reduced ? 0 : 0.15}
      >
        {edges.map((edge) => {
          const lit =
            activeId !== null &&
            (edge.a === activeId || edge.b === activeId);
          return (
            <mesh
              key={`${edge.a}-${edge.b}`}
              position={edge.mid}
              quaternion={edge.quat}
            >
              <cylinderGeometry args={[lit ? 0.012 : 0.006, lit ? 0.012 : 0.006, edge.length, 6]} />
              <meshStandardMaterial
                color={lit ? "#5ecfc0" : "#3a3834"}
                emissive={lit ? "#1f4540" : "#000000"}
                emissiveIntensity={lit ? 0.55 : 0}
                transparent
                opacity={lit ? 0.95 : 0.45}
              />
            </mesh>
          );
        })}

        {nodes.map((node) => (
          <SystemNode
            key={node.id}
            node={node}
            active={activeId === node.id}
            dimmed={activeId !== null && activeId !== node.id}
            onActive={onActive}
          />
        ))}
      </Float>
    </group>
  );
}

function SystemNode({
  node,
  active,
  dimmed,
  onActive,
}: {
  node: NodeDef;
  active: boolean;
  dimmed: boolean;
  onActive: (id: string | null) => void;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const target = active ? 1.25 : 1;
    const s = mesh.current.scale.x;
    const next = THREE.MathUtils.lerp(s, target, Math.min(1, delta * 8));
    mesh.current.scale.setScalar(next);
  });

  const onOver = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      onActive(node.id);
      document.body.style.cursor = "pointer";
    },
    [node.id, onActive],
  );

  const onOut = useCallback(() => {
    onActive(null);
    document.body.style.cursor = "";
  }, [onActive]);

  return (
    <group position={node.position}>
      <mesh
        ref={mesh}
        onPointerOver={onOver}
        onPointerOut={onOut}
        onClick={(e) => {
          e.stopPropagation();
          onActive(node.id);
        }}
      >
        <icosahedronGeometry args={[0.16, active ? 1 : 0]} />
        <meshStandardMaterial
          color={active ? "#5ecfc0" : "#c9c2b4"}
          metalness={0.55}
          roughness={0.28}
          emissive={active ? "#0d3d38" : "#1a1916"}
          emissiveIntensity={active ? 0.65 : 0.15}
          transparent
          opacity={dimmed ? 0.35 : 1}
        />
      </mesh>
      {active ? (
        <Html distanceFactor={6} position={[0, 0.38, 0]} center>
          <div className="pointer-events-none select-none whitespace-nowrap rounded-none border border-primary/40 bg-background/90 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground shadow-none backdrop-blur-sm">
            <p className="text-primary">{node.label}</p>
            <p className="mt-0.5 max-w-[11rem] text-[9px] normal-case tracking-normal text-muted-foreground">
              {node.detail}
            </p>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

type HeroSceneProps = {
  className?: string;
};

export function HeroScene({ className }: HeroSceneProps) {
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const compact = useIsMobile();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`hero-scene-bleed ${className ?? ""}`} aria-hidden>
      {visible ? (
        <Canvas
          dpr={compact ? [1, 1.25] : [1, 1.5]}
          camera={{ position: [0, 0, 5.4], fov: 40 }}
          gl={{
            antialias: !compact,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
          onPointerMissed={() => setActiveId(null)}
        >
          <ambientLight intensity={0.42} />
          <directionalLight position={[4, 5, 3]} intensity={1} color="#e8e2d4" />
          <directionalLight position={[-4, -2, -3]} intensity={0.45} color="#5ecfc0" />
          <Suspense fallback={null}>
            <SystemGraph
              reduced={reduced}
              compact={compact}
              activeId={activeId}
              onActive={setActiveId}
            />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
