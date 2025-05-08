import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ title, description, technologies, imageUrl, githubUrl, liveUrl }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-800 border-gray-700">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-gray-700 text-emerald-400 border-gray-600">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(githubUrl || liveUrl) && (
        <CardFooter className="px-6 py-4 bg-gray-900 flex justify-end gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
