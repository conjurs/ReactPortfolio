import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [typing, setTyping] = useState('');

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
    <div name='contact' className='w-full min-h-screen bg-retro-black p-8 pt-24 pb-24'>
      <div className='terminal-window max-w-[600px] mx-auto p-4'>
        <div className='terminal-header flex items-center gap-2 mb-4 border-b border-retro-green/30 pb-2'>
          <div className='w-3 h-3 rounded-full bg-retro-green'></div>
          <div className='font-vt323 text-retro-green'>contact.exe</div>
        </div>

        <div className='font-dos text-retro-green mb-8'>
          <p className='mb-4'>{`>`} INITIALIZING CONTACT PROTOCOL...</p>
          <p className='mb-4'>{`>`} READY TO RECEIVE MESSAGE...</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4' autoComplete="off">
          <div className='flex flex-col gap-2'>
            <label className='font-vt323 text-retro-green'>NAME:</label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green'
              onChange={(e) => setTyping(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-vt323 text-retro-green'>EMAIL:</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-vt323 text-retro-green'>MESSAGE:</label>
            <textarea
              name="message"
              rows="6"
              required
              autoComplete="off"
              className='bg-retro-black border border-retro-green/50 p-2 font-dos text-retro-green 
                       focus:outline-none focus:border-retro-green resize-none'
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className='w-full border border-retro-green bg-retro-green/10 p-3 font-vt323 
                     text-retro-green hover:bg-retro-green/20 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {status === 'sending' ? '> SENDING...' : '> SEND MESSAGE'}
          </button>

          {status && (
            <div className='font-dos text-retro-green mt-4 animate-fadeIn'>
              {status === 'success' && '> MESSAGE SENT SUCCESSFULLY'}
              {status === 'error' && '> ERROR: TRANSMISSION FAILED. RETRY?'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;