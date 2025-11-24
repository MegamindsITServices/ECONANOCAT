import React, { useEffect,useState} from 'react'

const ContactUs = () => {

  return (
    <div className="flex flex-col bg-white">
      <section className="max-w-8xl bg-[#F6F6F6] py-16 md:py-20">
        <div className="px-2 md:px-10 space-y-12 ">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Contact Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-[0.6fr_1.1fr] gap-8">
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-col gap-6 rounded-3xl bg-[#D3EDE8] p-8 shadow-sm max-w-[480px] w-full"
            >
              <div className="flex flex-col gap-6">
                {[
                  { label: "Name", type: "text", placeholder: "Enter your name" },
                  { label: "Email", type: "email", placeholder: "Enter your work email" },
                  { label: "Company Name", type: "text", placeholder: "Enter your company name" },
                  { label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
                ].map(({ label, type, placeholder }) => (
                  <label key={label} className="flex flex-col gap-2 text-lg text-black">
                    <span className="font-medium">{label}</span>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="h-14 w-px-12  rounded-xl border border-[#D5D5D5] bg-[#F3F4F8] px-4 text-base text-gray-800 placeholder:text-gray-400 focus:border-[#14C77C] focus:outline-none focus:ring-2 focus:ring-[#A3EFD0]"
                    />
                  </label>
                ))}

                <label className="flex flex-col gap-2 text-lg text-black">
                  <span className="font-medium">Message / Info / Request</span>
                  <textarea
                    placeholder="Enter your message, information, or request here"
                    rows={4}
                    className="w-full rounded-xl border border-[#D5D5D5] bg-[#F3F4F8] px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 focus:border-[#14C77C] focus:outline-none focus:ring-2 focus:ring-[#A3EFD0]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="h-[60px] w-full rounded-xl bg-gradient-to-r from-[#14C77C] to-[#A3EFD0] text-lg font-semibold text-white transition-transform hover:scale-[1.01]"
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="rounded-[24px] border border-black/10 bg-[#F3F4F8] p-6 shadow-sm md:p-8">
                <p className="text-lg leading-7 text-[#173126]">
                  We’d love to hear from you! Whether you have questions,
                  feedback, or business inquiries, our team is here to help.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Get in touch</h3>
                    <div className="space-y-1 text-lg text-[#737373]">
                      <p>📞 +91-8124022179</p>
                      <p className="underline">
                        📧 ecocatnano@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Business Hours</h3>
                    <p className="text-lg leading-7 text-[#737373]">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday: 10:00 AM – 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#173126]">Office Address</h3>
                    <p className="text-lg leading-7 text-[#737373]">
                      ECONANOCAT Pvt. Ltd.
                      <br />
                      No. 4/9 kothandam street, sekar nagar
                      <br />
                      West saidapet chennai 600083,
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  title="ECNANOCAT office map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15548.66654090144!2d80.21524823370608!3d13.02505834662011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%204%2F9%20kothandam%20street%2C%20sekar%20nagar%20%20West%20saidapet%20chennai%20600083!5e0!3m2!1sen!2sin!4v1763471343549!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[234px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;