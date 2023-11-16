import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

function SkillItem({ image, title, alt }) {
  const imageData = <Image src={image} alt={alt} fill sizes="100vw" />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, delay: 0.3 }
      }}
      className="p-6 shadow-xl rounded-xl "
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center ">
        <div className="m-auto w-[64px] h-[64px] relative">{imageData}</div>
        <div className="flex flex-col items-center justify-center ">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillItem
