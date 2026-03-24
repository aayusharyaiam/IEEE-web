import React, { useRef } from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">Name (First)</label>
          <input 
            type="text" 
            id="firstName" 
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ieee-blue transition-colors"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Name (Last)</label>
          <input 
            type="text" 
            id="lastName" 
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ieee-blue transition-colors"
            placeholder="Last Name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ieee-blue transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ieee-blue transition-colors resize-none"
          placeholder="Your message here..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="w-full bg-ieee-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg tracking-wide uppercase transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
