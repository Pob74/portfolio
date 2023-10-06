import fs from "fs"
import path from "path"

const projectsDirectory = path.join(process.cwd(), "data", "projects")

const projectDataHandler = (req, res) => {
  const { name } = req.query
  const filePath = path.join(projectsDirectory, `${name}.json`)

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8")
    const projectData = JSON.parse(jsonData)
    res.status(200).json(projectData)
  } catch (error) {
    res.status(404).json({ message: "Project not found" })
  }
}

export default projectDataHandler
