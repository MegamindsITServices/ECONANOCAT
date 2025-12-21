import Contact from "../models/contact.js";
import nodemailer from "nodemailer";
import { sendEmail } from "../utils/sendMail.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, companyName, phoneNumber, message } = req.body;

    // 1. Validation
    if (!name || !email || !phoneNumber || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    // 2. Save to MongoDB
    const newInquiry = await Contact.create({
      name,
      email,
      companyName,
      phoneNumber,
      message,
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Company:</strong> ${companyName || "Not Provided"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await sendEmail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent to our team.",
      data: newInquiry,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error, please try again later.",
      });
  }
};
