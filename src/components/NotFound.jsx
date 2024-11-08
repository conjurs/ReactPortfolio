import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [errors, setErrors] = useState([]);
  const [blueScreen, setBlueScreen] = useState(false);
  const [debugging, setDebugging] = useState(false);
  const [debugProgress, setDebugProgress] = useState(0);
  const [viewportSize, setViewportSize] = useState({
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight
  });

  const errorMessages = [
    "WARNING: Your computer has been infected!",
    "ALERT: Download more RAM now!",
    "VIRUS DETECTED: Click here to clean!",
    "HOT SINGLES IN YOUR AREA",
    "CONGRATULATIONS! You're the 1,000,000th visitor!",
    "WARNING: System32 needs immediate attention!",
    "ALERT: Your Windows license has expired!",
    "UPDATE REQUIRED: Flash Player needed!",
    "CRITICAL: Your system is at risk!",
    "FREE GIFT CARD - CLICK NOW!!!",
    "WARNING: CPU temperature critical!",
    "ALERT: Nigerian prince needs your help!",
    "VIRUS ALERT: Your mouse may be infected",
    "DOWNLOAD NOW: Speed up your PC 500%",
    "WARNING: Your IP is visible to hackers",
    "CONGRATULATIONS: iPhone 15 Pro winner!",
    "ALERT: Your cursor is infected",
    "CRITICAL: RAM needs defragmentation",
    "WARNING: Keyboard drivers corrupted",
    "ALERT: Monitor needs virtual cleaning",
    "VIRUS: USB ports compromised",
    "CRITICAL: Internet pipes clogged",
    "WARNING: Desktop requires dusting",
    "ALERT: Power supply needs recharging"
  ];

  const debugSteps = [
    "Initializing debug mode...",
    "Scanning memory dumps...",
    "Analyzing system threads...",
    "Checking registry integrity...",
    "Repairing system files...",
    "Restoring backup protocols...",
    "Reinitializing system state...",
    "Recovery complete!"
  ];

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.document.documentElement.clientWidth,
        height: window.document.documentElement.clientHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomPosition = () => {
    const errorWidth = 320;
    const errorHeight = 130;
    const safetyMargin = 20;
    
    const maxX = (viewportSize.width * 0.8) - errorWidth;
    const maxY = (viewportSize.height * 0.8) - errorHeight;
    
    return {
      x: Math.max(safetyMargin, Math.min(Math.random() * maxX, maxX)),
      y: Math.max(safetyMargin, Math.min(Math.random() * maxY, maxY))
    };
  };

  useEffect(() => {
    if (viewportSize.width < 1024) return;

    const spawnInterval = setInterval(() => {
      if (errors.length < 10) {
        setErrors(prev => [...prev, {
          id: Date.now(),
          message: errorMessages[Math.floor(Math.random() * errorMessages.length)],
          position: getRandomPosition()
        }]);
      }
    }, 800);

    return () => clearInterval(spawnInterval);
  }, [errors.length, viewportSize.width]);

  const handleErrorClose = (errorId) => {
    setErrors(prev => {
      const newErrors = [];
      for (let i = 0; i < 5 && prev.length + newErrors.length < 10; i++) {
        newErrors.push({
          id: Date.now() + i,
          message: errorMessages[Math.floor(Math.random() * errorMessages.length)],
          position: getRandomPosition()
        });
      }
      return [...prev.filter(e => e.id !== errorId), ...newErrors];
    });
  };

  const handleOkClick = () => {
    setBlueScreen(true);
    setTimeout(() => setDebugging(true), 3000);
  };

  useEffect(() => {
    if (debugging && debugProgress < debugSteps.length) {
      const timer = setTimeout(() => {
        setDebugProgress(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
    if (debugging && debugProgress === debugSteps.length) {
      setTimeout(() => {
        setDebugging(false);
        setBlueScreen(false);
        setDebugProgress(0);
      }, 2000);
    }
  }, [debugging, debugProgress]);

  const popupStyle = {
    backgroundColor: '#ECE9D8',
    border: '2px solid #0054E3',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.3), inset 1px 1px 0px #fff, inset -1px -1px 0px #707070',
    color: '#000000',
    fontFamily: 'Tahoma, sans-serif',
    width: '320px',
    position: 'absolute',
    borderRadius: '8px 8px 0 0',
    cursor: 'default'
  };

  const headerStyle = {
    background: 'linear-gradient(180deg, #0058E6 0%, #3984E8 5%, #0058E6 100%)',
    color: 'white',
    padding: '4px 8px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '6px 6px 0 0'
  };

  if (blueScreen) {
    if (debugging) {
      return (
        <div className="h-screen w-screen bg-[#000] text-white p-8 font-['MS_Sans_Serif'] overflow-hidden">
          <div className="max-w-4xl mx-auto bg-[#0000AA] border-4 border-[#DFDFDF] p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-6 border-b border-white/30 pb-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span className="font-bold">Windows Debug Tool</span>
            </div>
            {debugSteps.slice(0, debugProgress + 1).map((step, index) => (
              <p key={index} className="mb-2 font-['Lucida_Console']">
                {index === debugProgress ? (
                  <span className="animate-pulse">&gt; {step}</span>
                ) : (
                  <span>&gt; {step} [SUCCESS]</span>
                )}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="h-screen w-screen bg-[#0000AA] text-white p-8 font-['MS_Sans_Serif'] overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl mb-8 font-bold">Windows</h1>
          <p className="mb-6">A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
          <p className="mb-6 font-bold">SYSTEM_THREAD_EXCEPTION_NOT_HANDLED</p>
          <p className="mb-6">If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
          <p className="mb-4">Check to make sure any new hardware or software is properly installed.</p>
          <p className="mb-4">If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>
          <p className="mb-8">Technical information:</p>
          <p className="mb-2">*** STOP: 0x0000007E (0xC0000005, 0xF86B5A89, 0xF8A319E8, 0xF8A31684)</p>
          <p className="animate-pulse mb-8">Beginning dump of physical memory...</p>
          <p className="mb-4">Physical memory dump complete.</p>
          <p className="mb-4">Contact your system administrator or technical support group for further assistance.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-[#245EDC] relative overflow-hidden">
      <div className="fixed bottom-8 left-8">
        <button 
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 bg-gradient-to-b from-[#F0F0F0] to-[#E1E1E1] border border-[#919191] 
                     shadow-[inset_1px_1px_0px_#fff,_2px_2px_3px_rgba(0,0,0,0.3)] 
                     hover:from-[#E1E1E1] hover:to-[#D1D1D1] 
                     active:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3)]
                     font-['MS_Sans_Serif'] text-sm text-[#000000]
                     flex items-center gap-2"
        >
          <img src="/windows-xp-start.png" alt="" className="w-4 h-4" />
          Return to Desktop
        </button>
      </div>

      {viewportSize.width >= 1024 && errors.map(error => (
        <div
          key={error.id}
          className="absolute bg-[#ECE9D8] border-2 border-[#0054E3] shadow-lg rounded-sm"
          style={{
            top: `${error.position.y}px`,
            left: `${error.position.x}px`,
            width: '320px',
            fontFamily: 'Tahoma, sans-serif'
          }}
        >
          <div className="bg-gradient-to-r from-[#0054E3] via-[#2989d8] to-[#0054E3] text-white px-2 py-1 flex justify-between items-center">
            <span className="font-bold">System Warning</span>
            <button onClick={() => handleErrorClose(error.id)} className="hover:bg-red-500 px-2">
              X
            </button>
          </div>
          <div className="p-4">
            <p className="mb-4 text-black">{error.message}</p>
            <div className="flex justify-end gap-2">
              <button 
                onClick={handleOkClick}
                className="px-4 py-1 bg-[#E1E1E1] border border-t-white border-l-white border-b-gray-500 border-r-gray-500 active:border-t-gray-500 active:border-l-gray-500 active:border-b-white active:border-r-white"
              >
                OK
              </button>
              <button 
                onClick={() => handleErrorClose(error.id)}
                className="px-4 py-1 bg-[#E1E1E1] border border-t-white border-l-white border-b-gray-500 border-r-gray-500 active:border-t-gray-500 active:border-l-gray-500 active:border-b-white active:border-r-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotFound; 