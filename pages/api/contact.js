import { transporter, mailOptions } from "@/utils/nodemailer"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.subject ||
      !data.message
    ) {
      return res.status(400).json({ message: "Invalid input" })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test string",
        html: `<div>Contact name: ${data.name}</div><br/><div>${data.email}</div><br/><div>${data.phone}</div><br/><div>Subject: ${data.subject}</div><br/><div>Message: ${data.message}</div><br/> `
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: "Bad request" })
}

export default handler
