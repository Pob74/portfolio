import React from "react"
import Lottie from "lottie-react"
import animationData from "../public/assets/contact.json"

function ContactLottie() {
  return (
    <div className="rounded-xl hover:scale-105 ease-in duration-300 min-w-[80%] mx-auto">
      <Lottie animationData={animationData} />
    </div>
  )
}

export default ContactLottie
