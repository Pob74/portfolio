"use client"
import Image from "next/image"
import React from "react"
import projectImage from "../public/assets/Screenshot.png"
import jurnalImage from "../public/assets/jurnal.png"
import netflixImage from "../public/assets/NetflixPage.png"
import spotifyImage from "../public/assets/SpotifyPage.png"
import amazonImage from "../public/assets/AmazonPage.png"
import Link from "next/link"
import ProjectItem from "./ProjectItem"
import { motion } from "framer-motion"

function Projects() {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto p-12 lg:px-2 py-16">
        {/* <p className="text-xl tracking-widest uppercase text-[#816797]">
          Projects
        </p> */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 5 } }}
          className="py-4"
        >
          What have I built{" "}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            image={jurnalImage}
            title="Your Jurnal"
            framework="React JS"
            projectUrl="/project"
            name="journal"
          />
          <ProjectItem
            image={netflixImage}
            title="Netflix Clone"
            framework="Next JS"
            projectUrl="/project"
            name="netflix"
          />
          <ProjectItem
            image={spotifyImage}
            title="Spotify Clone"
            framework="Next JS"
            projectUrl="/project"
            name="spotify"
          />
          <ProjectItem
            image={amazonImage}
            title="Amazon Clone"
            framework="Next JS"
            projectUrl="/project"
            name="amazon"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
