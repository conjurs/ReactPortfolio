import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

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
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-primary flex items-center'>
      <div className='max-w-[600px] mx-auto px-8 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-text inline-block border-b-4 border-accent'>
            Let's Connect
          </h2>
          <p className='text-textDark mt-4'>Have a project in mind? Let's make it happen.</p>
        </div>

        <form onSubmit={handleSubmit} 
              className='flex flex-col gap-4 backdrop-blur-sm bg-surface/30 p-8 rounded-2xl 
                         border border-accent/10 hover:border-accent/30 transition-all duration-500 
                         shadow-lg shadow-accent/5'>
          <div className='grid grid-cols-2 gap-4'>
            <input type="text" name="name" required placeholder="Your Name" 
                   className='p-4 bg-surface/50 backdrop-blur-sm rounded-lg border border-accent/10 
                            text-text placeholder-textDark focus:border-accent/50 outline-none 
                            transition-all w-full' />
            <input type="email" name="email" required placeholder="Your Email" 
                   className='p-4 bg-surface/50 backdrop-blur-sm rounded-lg border border-accent/10 
                            text-text placeholder-textDark focus:border-accent/50 outline-none 
                            transition-all w-full' />
          </div>
          <textarea name="message" rows="6" required placeholder="Your Message"
                    className='p-4 bg-surface/50 backdrop-blur-sm rounded-lg border border-accent/10 
                             text-text placeholder-textDark focus:border-accent/50 outline-none 
                             transition-all w-full resize-none' />
          <button type="submit" 
                  className='w-full py-4 bg-accent text-white rounded-lg hover:bg-accent/80 
                            transition-all duration-300 flex items-center justify-center gap-2
                            disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className='text-green-500 text-center'>Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className='text-red-500 text-center'>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;