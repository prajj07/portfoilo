import { ImageResponse } from "next/og";

export const alt = "Prajwal M — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#12110f",
          color: "#ebe6dc",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5ecfc0",
          }}
        >
          <span>Software Engineer</span>
          <span>00 / Index</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.06em",
              lineHeight: 0.9,
            }}
          >
            Prajwal M
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              letterSpacing: "-0.03em",
              color: "#c9c2b4",
            }}
          >
            Products - Systems - Production
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9a9488",
          }}
        >
          <span>Forward Deployed Engineer</span>
          <span>Dataequinox</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
