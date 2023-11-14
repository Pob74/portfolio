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
          <SkillItem
            image="/assets/html.svg"
            width={64}
            height={0}
            title="HTML"
            alt="html"
          />
          <SkillItem
            image="/assets/css.svg"
            width={42}
            height={0}
            title="CSS"
            alt="css"
          />
          <SkillItem
            image="/assets/react.png"
            width={64}
            height={0}
            title="REACT"
            alt="react"
          />
          <SkillItem
            image="/assets/nextjs.svg"
            width={64}
            height={0}
            title="NEXTJS"
            alt="angular"
          />
          <SkillItem
            image="/assets/firebase.png"
            title="FIREBASE"
            alt="firebase"
            fill={true}
            relative={true}
          />
          <SkillItem
            image="/assets/mysql.png"
            width={64}
            height={0}
            title="MYSQL"
            alt="mysql"
          />
          <SkillItem
            icon={<AiFillGithub size={64} />}
            title="GITHUB"
            alt="github"
          />

          <SkillItem
            image="/assets/redux.png"
            width={64}
            height={0}
            title="REDUX"
            alt="redux"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
