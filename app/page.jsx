import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sasanka Inukshi Gallage</h1>
              <h2 className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">Full Stack Developer</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                I build responsive, user-friendly web applications with modern technologies. Passionate about creating
                clean, efficient code and delivering exceptional user experiences.
              </p>
              <div className="flex gap-4">
                <a href="#contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </a>
                <a href="/SIGallage.pdf" download>
                  <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-gray-800">
                    Download CV
                  </Button>
                </a>
              </div>
              <div className="flex mt-8 gap-4">
                <a
                  href="https://github.com/sigallage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sasanka-gallage-9861532bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sgallage0000@gmail.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
                <Image
                  src="/SIGallage.jpg?height=256&width=256"
                  alt="Sasanka Inukshi Gallage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Skills, Projects Sections */}
      {/* ... No changes in About, Skills, or Projects ... */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:sgallage0000@gmail.com">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/sasanka-gallage-9861532bb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-gray-800">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">Sasanka Inukshi Gallage</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/sigallage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sasanka-gallage-9861532bb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sgallage0000@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  )
}
