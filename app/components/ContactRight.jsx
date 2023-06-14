"use client"

import React from "react"
import { motion } from "framer-motion"

function ContactRight() {
  const animationConfig = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { duration: 2, delay: 0.3 }
    }
  }
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
      <div className="p-4">
        <form>
          <div className="grid md:grid-cols-2 gap-4 w-full  py-2">
            <motion.div {...animationConfig} className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
              />
            </motion.div>
            <motion.div {...animationConfig} className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
              />
            </motion.div>
          </div>
          <motion.div {...animationConfig} className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
            />
          </motion.div>
          <motion.div {...animationConfig} className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
            />
          </motion.div>
          <motion.div {...animationConfig} className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 "
              rows="3"
            ></textarea>
          </motion.div>
          <motion.button
            {...animationConfig}
            className="w-full p-4 text-gray-100 mt-4 "
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  )
}

export default ContactRight
