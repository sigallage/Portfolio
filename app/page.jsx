import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-gray-800">
                  Download CV
                </Button>
              </div>
              <div className="flex mt-8 gap-4">
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
                <Image
                  src="/placeholder.svg?height=256&width=256"
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

      {/* About & Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Background</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with expertise in both frontend and backend technologies. I enjoy
                solving complex problems and creating intuitive, efficient applications.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or expanding my knowledge through continuous learning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white">Informatics Institute of Technology</h4>
                <p className="text-emerald-400 mb-2">Affiliated with University of Westminster</p>
                <p className="text-gray-300 text-sm">BSc (Hons) in Computer Science</p>
                <div className="mt-4 flex items-center">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-1 bg-emerald-500 w-[85%]"></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-300">2024 - Present</span>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white">Musaues College</h4>
                
                <p className="text-gray-300 text-sm">A/L's Physical Science Stream</p>
                <div className="mt-4 flex items-center">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-1 bg-emerald-500 w-[85%]"></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-300">2008 - 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-800">
              <TabsTrigger value="languages" className="data-[state=active]:bg-gray-700">
                Languages
              </TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-gray-700">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-gray-700">
                Backend
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-gray-700">
                Tools & Databases
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="mt-4">
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="JavaScript" icon="javascript" />
                <SkillBadge name="Python" icon="python" />
                <SkillBadge name="Java" icon="java" />
                <SkillBadge name="HTML" icon="html" />
                <SkillBadge name="CSS" icon="css" />
              </div>
            </TabsContent>

            <TabsContent value="frontend" className="mt-4">
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" icon="react" />
                <SkillBadge name="Next.js" icon="nextjs" />
                <SkillBadge name="Tailwind CSS" icon="tailwind" />
                <SkillBadge name="CSS" icon="css" />
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-4">
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" icon="nodejs" />
                <SkillBadge name="Express.js" icon="express" />
                <SkillBadge name="Python" icon="python" />
                <SkillBadge name="Java" icon="java" />
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-4">
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="VS Code" icon="vscode" />
                <SkillBadge name="PyCharm" icon="pycharm" />
                <SkillBadge name="IntelliJ IDEA" icon="intellij" />
                <SkillBadge name="MySQL" icon="mysql" />
                <SkillBadge name="PostgreSQL" icon="postgresql" />
                <SkillBadge name="MongoDB" icon="mongodb" />
                <SkillBadge name="Git" icon="git" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Traffic Data Analysis System"
              description="Developed a program to analyze traffic flow data collected from local road junctions. Allowed users to select and analyze specific CSV datasets basedon date. Summarized traffic flow data for council decision-making. Implemented features to save results as a text file and visualize data using ahistogram."
              technologies={["Python", "Tkinter"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Health & Well-being According to SDGs"
              description="Developing a front-end website focused on health and well-being based on Sustainable Development Goals"
              technologies={["HTML", "CSS", "JavaScript"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="GainsLog(Ongoing Project)"
              description="GainsLog is a full-stack fitness tracking web application that helps users log workouts, track progress, and generate AI-powered workout plans tailoredto their fitness level and experience. The app integrates Google authentication, MongoDB for data storage, and HuggingFace API to generatepersonalized workout plans."
              technologies={["CSS", "React", "NodeJS", "ExpressJS", "MongoDB", "ExpressJS", "Auth0"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="AI-Powered Chatbot"
              description="A conversational AI chatbot that provides customer support and information retrieval capabilities."
              technologies={["Python", "TensorFlow", "React"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Social Media Analytics Tool"
              description="A tool for tracking and analyzing social media engagement metrics across multiple platforms."
              technologies={["Java", "Spring Boot", "MySQL"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />

            <ProjectCard
              title="Personal Finance Tracker"
              description="An application for tracking expenses, creating budgets, and visualizing spending patterns."
              technologies={["React", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-gray-800">
              <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
            </Button>
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
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</div>
        </div>
      </footer>
    </main>
  )
}
