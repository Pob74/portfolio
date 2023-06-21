"use client"

import React from "react"
import ContactLeft from "./ContactLeft"
import ContactRight from "./ContactRight"

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto p-12 lg:px-2 py-16 w-full ">
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </div>
  )
}

export default Contact
