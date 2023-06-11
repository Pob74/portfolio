import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

function SkillItem({ image, width, height, title, alt, fill, relative, icon }) {
  const relativeClass = relative
    ? "m-auto w-[64px] h-[64px] relative"
    : "m-auto w-[64px] h-[64px]"

  const imageComp = icon ? (
    icon
  ) : (
    <Image src={image} width={width} height={height} alt={alt} fill={fill} />
  )

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
        <div className={relativeClass}>{imageComp}</div>
        <div className="flex flex-col items-center justify-center ">
          <h3>{title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillItem
