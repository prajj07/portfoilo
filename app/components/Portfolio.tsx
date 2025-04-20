import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">
              <span className="text-primary"></span>Portfolio
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hi, I'm <span className="text-primary">Prajwal M</span> 👋
            </h1>
            <h2 className="text-2xl font-semibold">Frontend Developer</h2>
            <p className="text-muted-foreground md:text-xl">
              I build responsive, accessible, and performant web applications with modern technologies. Passionate about
              creating beautiful user experiences and solving complex problems.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/profile.jpg?height=320&width=320"
                alt="Developer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/img/portfolio.png?height=400&width=600"
                alt="Working on code"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate frontend developer with 1+ years of experience building modern web applications. I
                specialize in React, Next.js, and TypeScript, with a strong focus on creating responsive, accessible,
                and performant user interfaces.
              </p>
              <p className="text-lg">
                My journey in web development started when I built my first website in college. Since then, I've worked
                with startups and established companies to deliver high-quality digital experiences that users love.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me travelling, reading tech blogs, or experimenting with new web
                technologies.
              </p>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <Link href="/Resume_prajwal.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world. Here are the main technologies I
              use daily:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "JavaScript", icon: "/img/js.png?height=80&width=80" },
              { name: "TypeScript", icon: "/img/Typescript.svg.png?height=80&width=80" },
              { name: "React", icon: "/img/react-icon_svg_.webp?height=80&width=80" },
              { name: "Next.js", icon: "/img/next.avif?height=80&width=80" },
              { name: "Tailwind CSS", icon: "/img/tailwindcss.webp?height=80&width=80" },
              { name: "Git", icon: "/img/gt.png?height=80&width=80" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border rounded-lg hover:border-primary transition-colors"
              >
                <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={80} height={80} />
                <span className="mt-2 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new
              technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Travel Bookings",
                description:
                  "A travel booking application that allows users to search for flights, hotels, and car rentals.",
                image: "/travel.png?height=300&width=500",
                tech: ["React", "Tailwind CSS", "Git"],
                liveUrl: "https://travel-booking-theta.vercel.app/",
                githubUrl: "https://github.com/prajj07/travel-booking",
              },
              {
                title: " Dynamic Button Workflow",
                description:
                  "A dynamic button workflow application that allows users to create and manage workflows with customizable buttons.",
                image: "/workflow.png?height=300&width=500",
                tech: ["React", "git", "tailwindcss" ,],
                liveUrl: "task-ecru-gamma.vercel.app",
                githubUrl: "https://github.com/prajj07/task",
              },
              
            ].map((project, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-muted text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me using
              the form below or through my social media.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">prajwalvm10@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                <Link href="https://linkedin.com/in/prajwalm07/" target="_blank" rel="noopener noreferrer">
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/prajwalm07</p>
                <span className="sr-only">LinkedIn</span>
              </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                <Link href="https://github.com/prajj07" target="_blank" rel="noopener noreferrer">
                  <h3 className="font-medium">Github</h3>
                  <p className="text-muted-foreground">https://github.com/prajj07</p>
                <span className="sr-only">Github</span>
              </Link>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="name" placeholder="Your name" className="w-full p-2 border rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="Your email" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input id="subject" placeholder="Subject" className="w-full p-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea id="message" placeholder="Your message" rows={5} className="w-full p-2 border rounded-md" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-bold text-xl">
              <span className="text-primary"></span>Portfolio
            </div>
            <p className="text-sm text-muted-foreground mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/prajj07" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/prajwalm07/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:prajwalvm10@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
