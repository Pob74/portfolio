"use client"

import Link from "next/link"
import React from "react"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

function ScrollUp() {
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
    <div className="flex justify-center w-full   ">
      <Link onClick={handleScroll} href="/#home">
        <div className=" animate-bounce rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-400 p-6 my-8 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#816797]" size={30} />
        </div>
      </Link>
    </div>
  )
}

export default ScrollUp
