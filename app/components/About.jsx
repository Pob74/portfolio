"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

function About() {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen p-12 lg:p2 flex items-center py-16  "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-3">
          {/* <p className="uppercase text-xl tracking-widest text-[#816797] ">
            About
          </p> */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-4 "
          >
            Who am I
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            I am not your typical developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            From an early age, my passion for problem-solving drove me to
            deconstruct and repair broken items. This curiosity propelled me to
            delve into various technologies such as JavaScript, HTML, CSS,
            React, React Native, Typescript, SQL, Web Design, Firebase, Next.js,
            and more. Now, equipped with both education and hands-on experience,
            I am eager to tackle challenges, just as I did as a child. It brings
            me immense joy, and I aspire to contribute to groundbreaking
            projects in the future.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            This problem-solving mindset permeates every aspect of my life,
            driving my personal and professional growth. It has been the
            catalyst behind my success in leading a thriving company and shaping
            my journey to the present.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            My formative years in Croatia were marred by the Balkan war during
            the 90s. Despite the adversity, this experience instilled in me a
            deep desire to help others, which led me to join the UNHCR. Working
            in a high-pressure environment, I swiftly acquired the ability to
            multitask effectively and handle stress, emerging as a stronger
            individual.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            Following the war, I made the life-changing decision to relocate to
            Sweden—a country brimming with opportunities. To establish financial
            stability, I worked various jobs, embracing any employment that came
            my way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            However, my ambition yearned for more substantial endeavors and
            greater responsibilities. Hence, I took the leap and embarked on my
            entrepreneurial journey, successfully managing my own company,
            Pressbyrån, for several years.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-300 "
          >
            During my leisure time, I delved into computer programming, which
            captivated my interest from the outset. It became increasingly
            apparent that this was my true calling, leading me to sell my
            business and enroll in school to specialize in Front-end
            development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 2, delay: 0.3 }
            }}
            className="py-2 text-gray-400 underline cursor-pointer "
          >
            Check out some of my projects
          </motion.p>
        </div>
        {/* <div className="w-full h-[300px] mt-12 md:m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 relative ">
          <Image
            src="/zeljko-picture.jpg"
            alt="zeljko"
            fill={true}
            style={{ objectFit: "cover", borderRadius: "3%" }}
          />
        </div> */}
      </div>
    </div>
  )
}

export default About
