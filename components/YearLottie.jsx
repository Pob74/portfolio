"use client"

import React from "react"
import Lottie from "lottie-react"
import animationData from "../public/assets/yearAnimation.json"

function Test() {
  return (
    <div className="w-[50px] h-[30px] lg:w-[80px] lg:h-[40px]  ">
      <Lottie
        animationData={animationData}

        // options={{
        //   loop: true,
        //   autoplay: true,
        //   animationData: animationData,
        //   rendererSettings: {
        //     preserveAspectRatio: "xMidYMid slice"
        //   }
        // }}
      />
    </div>
  )
}

export default Test
