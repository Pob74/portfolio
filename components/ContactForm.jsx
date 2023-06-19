"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { sendContactForm } from "@/lib/api"

const initValues = { name: "", phone: "", email: "", subject: "", message: "" }
const initState = { values: initValues }

function ContactForm() {
  const [state, setState] = useState(initState)

  const { values } = state

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))

  const animationConfig = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { duration: 2, delay: 0.3 }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState((prev) => ({
      ...prev
    }))
    try {
      await sendContactForm(values)

      setState(initState)
      alert("Message sent successfully")
    } catch (error) {
      setState((prev) => ({
        ...prev,

        error: error.message
      }))
    }
  }

  return (
    <form className="text-gray-800">
      <div className="grid md:grid-cols-2 gap-4 w-full  py-2">
        <motion.div {...animationConfig} className="flex flex-col">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            required
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div {...animationConfig} className="flex flex-col">
          <label className="uppercase text-sm py-2">Phone</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            required
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </motion.div>
      </div>
      <motion.div {...animationConfig} className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          required
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </motion.div>
      <motion.div {...animationConfig} className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Subject</label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          required
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
      </motion.div>
      <motion.div {...animationConfig} className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300 "
          rows="3"
          required
          name="message"
          value={values.message}
          onChange={handleChange}
        ></textarea>
      </motion.div>
      <motion.button
        {...animationConfig}
        className="w-full p-4 text-gray-100 mt-4 "
        onClick={handleSubmit}
      >
        Send Message
      </motion.button>
    </form>
  )
}

export default ContactForm
