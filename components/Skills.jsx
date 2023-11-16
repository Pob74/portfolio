"use client"

import Image from "next/image"
import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import SkillItem from "./SkillItem"

function Skills() {
  return (
    <div id="skills" className="w-full h-full lg:h-screen p-12 lg:p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, delay: 0.3 }
          }}
          className="py-4"
        >
          What I Can Do{" "}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem image="/assets/html.svg" title="HTML" alt="html" />
          <SkillItem image="/assets/css.svg" title="CSS" alt="css" />
          <SkillItem image="/assets/react.png" title="REACT" alt="react" />
          <SkillItem image="/assets/nextjs.svg" title="NEXTJS" alt="angular" />
          <SkillItem
            image="/assets/firebase.png"
            title="FIREBASE"
            alt="firebase"
          />
          <SkillItem image="/assets/mysql.svg" title="MYSQL" alt="mysql" />
          <SkillItem
            // icon={<AiFillGithub size={64} />}
            image="/assets/github.svg"
            title="GITHUB"
            alt="github"
          />

          <SkillItem image="/assets/redux.png" title="REDUX" alt="redux" />
        </div>
      </div>
    </div>
  )
}

export default Skills
