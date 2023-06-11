"use client"

import Image from "next/image"
import React from "react"
import contactImage from "../../public/assets/contact.avif"

import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import Link from "next/link"
import ContactLeft from "./ContactLeft"
import ContactRight from "./ContactRight"

function Contact() {
  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto p-12 lg:px-2 py-16 w-full ">
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          {/* left */}
          <ContactLeft image={contactImage} />

          {/* right */}
          <ContactRight />
        </div>
        <div className="flex justify-center py-12 ">
          <Link onClick={handleScroll} href="/#home">
            <div className=" animate-bounce rounded-full shadow-lg shadow-gray-400 p-6 my-8 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#816797]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
