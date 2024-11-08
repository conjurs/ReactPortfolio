import React, { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [typing, setTyping] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    const object = {};
    formData.forEach((value, key) => object[key] = value);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f391b1c8-dfc5-4c49-b6ff-8043ae6004be',
          subject: "New Contact Form Submission - Portfolio",
          from_name: "Portfolio Contact Form",
          ...object
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  if (theme === 'professional') {
    return (
      <div id="contact" className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="card backdrop-blur-md">
            <form ref={form} onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="form-group">
                  <label className="block text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 
                                  bg-clip-text text-transparent mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             transition-all duration-200 bg-white/70"
                    onChange={(e) => setTyping(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 
                                  bg-clip-text text-transparent mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             transition-all duration-200 bg-white/70"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="block text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 
                                bg-clip-text text-transparent mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-200 bg-white/70 resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 
                           text-white font-medium px-12 py-4 rounded-lg
                           hover:from-purple-700 hover:to-indigo-700 
                           transform hover:-translate-y-0.5 transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div name='contact' className='w-full min-h-screen bg-retro-black p-8 pt-24 pb-24'>
      <div className='terminal-window max-w-[600px] mx-auto p-6'>
        <div className='terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2'>
          <div className='w-3 h-3 rounded-full bg-retro-green'></div>
          <div className='font-vt323 text-retro-green'>contact.exe</div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className='space-y-4' autoComplete="off">
          <div className='mb-4'>
            <label className='block font-dos text-retro-green mb-2'>
              {'>>'} NAME:
            </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green w-full'
              onChange={(e) => setTyping(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='block font-dos text-retro-green mb-2'>
              {'>>'} EMAIL:
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green w-full'
            />
          </div>

          <div className='mb-4'>
            <label className='block font-dos text-retro-green mb-2'>
              {'>>'} MESSAGE:
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green w-full'
            ></textarea>
          </div>

          <button
            type="submit"
            className='font-dos text-retro-green border border-retro-green/50 px-4 py-2
                     hover:bg-retro-green/10 focus:outline-none focus:border-retro-green'
          >
            {'>>'} SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;