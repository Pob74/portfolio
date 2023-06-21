"use client"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import YearLottie from "./YearLottie"

function Nav() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleScroll = (e) => {
    e.preventDefault()

    const href = e.currentTarget.getAttribute("href")
    const targetId = href.replace(/.*\#/, "")

    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth"
    })
    history.pushState(null, null, `#${targetId}`)
  }

  useEffect(() => {
    const handlShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handlShadow)
  }, [])

  return (
    <>
      <nav
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] bg-[#1B2430]"
            : "fixed w-full h-20  z-[100] "
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16  ">
          <div className="flex items-center">
            <p className="text-sm md:text-lg lg:text-2xl mr-2">
              Zeljko Haberstok
            </p>
            <YearLottie />
          </div>
          <div>
            <ul className="hidden md:flex">
              <Link
                className="ml-10 text-sm uppercase "
                onClick={handleScroll}
                href="/#home"
              >
                Home
              </Link>
              <Link
                className="ml-10 text-sm uppercase "
                onClick={handleScroll}
                href="/#about"
              >
                About
              </Link>
              <Link
                className="ml-10 text-sm uppercase "
                onClick={handleScroll}
                href="/#skills"
              >
                Skills
              </Link>
              <Link
                className="ml-10 text-sm uppercase "
                onClick={handleScroll}
                href="/#projects"
              >
                Projects
              </Link>
              <Link
                className="ml-10 text-sm uppercase "
                onClick={handleScroll}
                href="/#contact"
              >
                Contact
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#51557E] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10  ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  className="rounded-full  h-16 w-16 object-cover"
                  src="/zeljko-picture.jpg"
                  alt="logo"
                  width="50"
                  height="50"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85% md:w-[90%] py-4">
                  Let us build something together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase ">
                <Link href="/#home">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={handleNav} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40 ">
                <p className="uppercase tracking-widest text-[#D6D5A8]">
                  Let us connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
