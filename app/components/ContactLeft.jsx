import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTrademarkCircle } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import Image from "next/image"
import { motion } from "framer-motion"
import ContactLottie from "./ContactLottie"

function ContactLeft({ image }) {
  const animationConfig = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { duration: 2, delay: 0.3 }
    }
  }

  return (
    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
      <div className="lg:p-4 h-full ">
        <motion.div {...animationConfig}>
          {/* <Image
            className="rounded-xl hover:scale-105 ease-in duration-300 min-w-[80%] mx-auto"
            src={image}
            alt="contact"
          /> */}
          <ContactLottie />
        </motion.div>
        <motion.div {...animationConfig}>
          <h2 className="py-2">Zeljko Haberstok </h2>
          <p>Front-End Developer</p>
          <p className="py-4">
            I am availeble for freelance or full-time positions. Contact me
            through the form below or email me directly at
            zeljkohaberstok@gmail.com
          </p>
        </motion.div>
        <motion.div {...animationConfig}>
          <p className="uppercase pt-8">Connect With Me</p>
          <div className="flex items-center justify-between py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineTrademarkCircle />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonLinesFill />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactLeft
