import { Code, Database, FileCode, Globe, Layout, Server, Terminal, Workflow } from "lucide-react"

export default function SkillBadge({ name, icon }) {
  // Function to determine background color based on technology type
  const getBgColor = () => {
    switch (icon.toLowerCase()) {
      case "javascript":
        return "bg-yellow-900 border-yellow-700"
      case "python":
        return "bg-blue-900 border-blue-700"
      case "java":
        return "bg-orange-900 border-orange-700"
      case "html":
        return "bg-red-900 border-red-700"
      case "css":
        return "bg-blue-900 border-blue-700"
      case "react":
        return "bg-cyan-900 border-cyan-700"
      case "nextjs":
        return "bg-gray-800 border-gray-700"
      case "tailwind":
        return "bg-cyan-900 border-cyan-700"
      case "nodejs":
        return "bg-green-900 border-green-700"
      case "express":
        return "bg-gray-800 border-gray-700"
      case "vscode":
        return "bg-blue-900 border-blue-700"
      case "pycharm":
        return "bg-green-900 border-green-700"
      case "intellij":
        return "bg-purple-900 border-purple-700"
      case "mysql":
        return "bg-blue-900 border-blue-700"
      case "postgresql":
        return "bg-blue-900 border-blue-700"
      case "mongodb":
        return "bg-green-900 border-green-700"
      case "git":
        return "bg-red-900 border-red-700"
      default:
        return "bg-gray-800 border-gray-700"
    }
  }

  // Function to get appropriate icon based on technology type
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "javascript":
      case "python":
      case "java":
        return <FileCode className="mr-2 h-4 w-4" />
      case "html":
      case "css":
        return <Code className="mr-2 h-4 w-4" />
      case "react":
      case "nextjs":
        return <Layout className="mr-2 h-4 w-4" />
      case "tailwind":
        return <Globe className="mr-2 h-4 w-4" />
      case "nodejs":
      case "express":
        return <Server className="mr-2 h-4 w-4" />
      case "vscode":
      case "pycharm":
      case "intellij":
        return <Terminal className="mr-2 h-4 w-4" />
      case "mysql":
      case "postgresql":
      case "mongodb":
        return <Database className="mr-2 h-4 w-4" />
      case "git":
        return <Workflow className="mr-2 h-4 w-4" />
      default:
        return <Code className="mr-2 h-4 w-4" />
    }
  }

  // Function to get abbreviation for the technology
  const getAbbreviation = () => {
    switch (icon.toLowerCase()) {
      case "javascript":
        return "JS"
      case "python":
        return "PY"
      case "java":
        return "JV"
      case "html":
        return "HTML"
      case "css":
        return "CSS"
      case "react":
        return "React"
      case "nextjs":
        return "Next"
      case "tailwind":
        return "TW"
      case "nodejs":
        return "Node"
      case "express":
        return "Exp"
      case "vscode":
        return "VS"
      case "pycharm":
        return "PC"
      case "intellij":
        return "IJ"
      case "mysql":
        return "SQL"
      case "postgresql":
        return "PG"
      case "mongodb":
        return "MDB"
      case "git":
        return "Git"
      default:
        return name.substring(0, 2).toUpperCase()
    }
  }

  return (
    <div
      className={`px-4 py-2 ${getBgColor()} border rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-white flex items-center`}
    >
      {getIcon()}
      <span className="hidden sm:inline">{name}</span>
      <span className="sm:hidden">{getAbbreviation()}</span>
    </div>
  )
}
