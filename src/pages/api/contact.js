// pages/api/contact.js

import connectDB from "../../server/lib/dbConnect";
import ContactForm from "../../server/models/contactForm";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();

    const { firstName, lastName, email, subject, message } = req.body;

    const newContact = new ContactForm({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({ error: "Server Error" });
  }
}
