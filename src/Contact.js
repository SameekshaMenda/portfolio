import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbllpbvo");

  if (state.succeeded) {
    return <p className="text-green-500 text-lg">Thanks for joining! We will get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto">
      {/* Name Field */}
      <div className="relative mt-8">
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder=" "
          className="w-full py-4 px-6 bg-transparent border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-xl peer"
        />
        <label
          htmlFor="name"
          className="absolute left-6 top-4 text-gray-700 font-semibold text-xl transition-all duration-200 transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-700 peer-focus:-top-6 peer-focus:text-purple-500"
        >
          Your Name
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email Field */}
      <div className="relative mt-8">
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder=" "
          className="w-full py-4 px-6 bg-transparent border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-xl peer"
        />
        <label
          htmlFor="email"
          className="absolute left-6 top-4 text-gray-700 font-semibold text-xl transition-all duration-200 transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-700 peer-focus:-top-6 peer-focus:text-purple-500"
        >
          Email Address
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Field */}
      <div className="relative mt-8">
        <textarea
          id="message"
          name="message"
          required
          placeholder=" "
          className="w-full py-4 px-6 bg-transparent border-2 border-purple-500 rounded-lg focus:outline-none focus:border-purple-700 text-gray-800 placeholder-transparent text-xl peer resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-6 top-4 text-gray-700 font-semibold text-xl transition-all duration-200 transform peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-700 peer-focus:-top-6 peer-focus:text-purple-500"
        >
          Message
        </label>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          disabled={state.submitting}
          className="px-12 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed text-xl"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <div className="py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">Contact Us</h2>
      <ContactForm />
    </div>
  );
}

export default Contact;
