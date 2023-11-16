"use client"
import Image from "next/image"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"
import Link from "next/link"

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 5 } }}
        className="w-full lg:w-[30%] h-[99%] absolute top-0 left-0"
      >
        <Image
          className="object-cover object-center w-full h-full opacity-20 lg:opacity-40"
          src="/zeljko.png"
          alt="zeljko"
          width={1920}
          height={1080}
          priority={false}
        />
      </motion.div>
      <div className="max-w-[1240px] w-full h-[calc(100vh-80px)] m-auto p-12 lg:p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest dark:text-gray-400 mt-16 md:mt-0 ">
            Let&rsquo;s build something together
          </p>
          <h1 className="py-4 dark:text-gray-300">
            Hi, I am <span className="text-[#816797]">Zeljko</span>
          </h1>
          <h2 className="animate-pulse py-4 dark:text-gray-400">
            A Front-End Web Developer
          </h2>
          <p className="py-4 dark:text-gray-300 max-w-[70%] m-auto">
            I am an enthusiastic Front-End Web Developer based in Sweden with a
            genuine passion for captivating web design.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/zeljko-haberstok-4bbb3a212/"
              passHref
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Pob74" passHref target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/pobjednik/"
              passHref
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebookF />
              </div>
            </Link>
            <Link
              href="mailto:zeljkohaberstok@gmail.com?subject=Hello%20Zeljko&body=I%20am%20conntacting%20you%20from%20your%20website."
              passHref
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
