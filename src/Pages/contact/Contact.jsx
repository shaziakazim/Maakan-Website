import React from 'react'
import { FaEnvelope,  FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  const info = [
    {
      icon: <FaLocationDot />,
      title: "123 Street, New York, USA",
    },
    {
      icon: <FaEnvelope />,
      title: "info@example.com",
    },
    {
      icon: <FaPhone />,
      title: "+012 345 6789",
    }
  ];

  return (
    <>
      <div className="w-[95%] mx-auto flex flex-col justify-center items-center mt-10">
        <div className="w-[50%] text-center">
          <h1 className="text-4xl font-bold text-[#0F172A]">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-5 gap-5">
          {info.map((data, index) => (
            <div key={index} className="w-[25%] border-[10px] border-[#14B8A6] border-opacity-20 p-2">
              <div className="flex items-center gap-5 border border-dashed border-[#14B8A6] p-3">
                <div className="w-10 h-10 border border-[#14B8A6] border-dashed rounded-full flex justify-center items-center text-[#14B8A6]">
                  {data.icon}
                </div>
                <div className="text-gray-600">{data.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          <div className="w-full mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208322.2911017638!2d75.39778940935787!3d35.32993251653223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46392bac10283%3A0xc2f7a786f9833d7!2sSkardu!5e0!3m2!1sen!2s!4v1739771022114!5m2!1sen!2s"
              width="100%"
              height="405"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mx-auto mt-10">
            <p>
              The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.
            </p>
            <form action="" className="w-full mt-5 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="px-8 py-2 border rounded w-full" />
                <input type="text" placeholder="Your Email" className="px-8 py-2 border rounded w-full" />
              </div>
              <input type="text" placeholder="Subject" className="px-8 py-2 border mt-2 w-full rounded" />
              <textarea className="w-full border mt-2 rounded p-2" placeholder="Message" rows="6"/>
              <button className="w-full py-2 bg-[#14B8A6] text-white rounded mt-2 hover:bg-[#0f766e] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
