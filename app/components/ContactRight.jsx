import React from "react"

import ContactForm from "./ContactForm"

function ContactRight() {
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
      <div className="p-4">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactRight
