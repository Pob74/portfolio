"use client"

import React from "react"
// import contactImage from "../../public/assets/contact.avif"
import ContactLeft from "./ContactLeft"
import ContactRight from "./ContactRight"
import ScrollUp from "./ScrollUp"

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto p-12 lg:px-2 py-16 w-full ">
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          <ContactLeft />

          <ContactRight />
        </div>
        <ScrollUp />
      </div>
    </div>
  )
}

export default Contact
