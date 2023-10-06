import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import layout from "../../app/layout"

function ProductInfo() {
  const router = useRouter()
  const { name } = router.query
  const [projectData, setProjectData] = useState(null)
  console.log(name)
  console.log(projectData)

  useEffect(() => {
    const fetchProjectData = async () => {
      if (name) {
        try {
          const response = await fetch(`/api/projectData?name=${name}`)
          const data = await response.json()
          setProjectData(data[name])
        } catch (error) {
          console.error("Error fetching project data:", error)
        }
      }
    }

    fetchProjectData()
  }, [name])

  // const handleButtonClick = () => {
  //   // Navigate to the projects section without scrolling
  //   const projectsSection = document.getElementById("projects")
  //   projectsSection?.scrollIntoView(false)

  //   // Push the URL to include the fragment identifier
  //   router.push("/#projects")
  // }

  const handleButtonClick = () => {
    window.history.back()
  }

  if (name && projectData) {
    return (
      <div className="p-12 min-h-screen flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Project {name} </h2>

        <div className="mb-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2">{projectData.title}</h3>
          <p className="text-gray-300 mb-2">{projectData.description}</p>
          <p className="text-gray-300 mb-2">{projectData.purpose}</p>
          <ol className="list-disc ml-6">
            {projectData.features.map((feature, index) => (
              <li className="mb-1" key={index}>
                {feature}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex justify-center items-end">
          <button className="px-4 py-2 mr-4 bg-blue-500 text-white hover:bg-blue-600">
            See Project
          </button>

          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  // Return null or loading indicator while data is being fetched
  return null
}

export default ProductInfo
