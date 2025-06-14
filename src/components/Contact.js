import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../css/App.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xbllpbvo");

  if (state.succeeded) {
    return (
      <p className="text-purple-700 text-2xl md:text-4xl text-center">
        Thanks for joining! We will get back to you soon.
      </p>
    );
  }

  return (
    <div className="w-full md:w-1/2 px-4 md:px-0">
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 w-full max-w-2xl mx-auto">
        {/* Name Field */}
        <div className="relative mt-6 md:mt-12">
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder=" "
            className="w-full py-4 md:py-6 px-6 md:px-8 bg-transparent border-2 border-purple-700 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-lg md:text-2xl peer"
          />
          <label
            htmlFor="name"
            className="absolute left-6 md:left-8 -top-7 md:-top-8 text-purple-700 font-semibold text-lg md:text-2xl transition-all duration-200 transform peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700 peer-focus:-top-7 md:peer-focus:-top-8 peer-focus:text-purple-500"
          >
            Your Name
          </label>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email Field */}
        <div className="relative mt-6 md:mt-12">
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder=" "
            className="w-full py-4 md:py-6 px-6 md:px-8 bg-transparent border-2 border-purple-700 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-lg md:text-2xl peer"
          />
          <label
            htmlFor="email"
            className="absolute left-6 md:left-8 -top-7 md:-top-8 text-purple-700 font-semibold text-lg md:text-2xl transition-all duration-200 transform peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700 peer-focus:-top-7 md:peer-focus:-top-8 peer-focus:text-purple-500"
          >
            Email Address
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className="relative mt-6 md:mt-12">
          <textarea
            id="message"
            name="message"
            required
            placeholder=" "
            className="w-full py-4 md:py-6 px-6 md:px-8 bg-transparent border-2 border-purple-700 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-lg md:text-2xl peer resize-none"
            rows="4"
          />
          <label
            htmlFor="message"
            className="absolute left-6 md:left-8 -top-7 md:-top-8 text-purple-700 font-semibold text-lg md:text-2xl transition-all duration-200 transform peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-700 peer-focus:-top-7 md:peer-focus:-top-8 peer-focus:text-purple-500"
          >
            Message
          </label>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6 md:mt-12">
          <button
            type="submit"
            disabled={state.submitting}
            className="px-10 md:px-16 py-4 md:py-6 bg-purple-700 text-white rounded-lg hover:bg-hotpink transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed text-lg md:text-2xl w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <section id="contactme" className="bg-purple-100 relative py-10 md:py-20 mb-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-8 md:mb-10">
          <p
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text mb-2 md:mb-4"
            style={{
              backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
              animation: 'glitter 1.5s infinite linear',
              fontFamily: "'Poppins', sans-serif",
            }}
            data-aos="slide-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            Contact
          </p>

          <p
            className="text-base md:text-lg mb-6 md:mb-10"
            style={{
                  fontSize: "1.5rem",
                  color: "#4B0082",
                  
                  fontWeight: "500"
                }}
          >
            Let's chat and make things happen!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-20 px-4 md:px-12 gap-8 md:gap-10">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
            <Player
              autoplay
              loop
              src="https://lottie.host/c4c69771-5edd-415e-9d8f-dbd37a986cf7/idA1WQGOv7.json"
              className="h-[300px] md:h-[500px] w-[350px] md:w-[600px]"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;