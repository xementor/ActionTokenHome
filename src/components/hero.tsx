import React, { useRef, useState } from 'react';

const Hero = () => {
  const videoUrl =
    'https://firebasestorage.googleapis.com/v0/b/action-atp-5.appspot.com/o/ActionverseMap.webm?alt=media&token=89bc66ff-4a4e-4bf0-82ac-3a4128048a00';

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    
    const toggleMuteUnmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        console.log(isMuted);
      }
    };

  return (
    <div>
      <div className="flex justify-center rounded-md border-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          onClick={toggleMuteUnmute}
          className="rounded-xl border-amber-950 backdrop-blur border-8 w-[90%] md:w-[60%] h-auto"
        >{isMuted ? "Unmute" : "Mute"}
          <source src={videoUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='flex justify-center'>
        <div className="w-[80%] hidden flex-row justify-evenly mt-2 md:flex">
          <a
            href="https://collections.action-tokens.com/"
            className="flex bg-lime-600 p-4 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            COLLECTIONS
          </a>
          <a
            href="https://map.action-tokens.com"
            className="flex bg-lime-600 p-4 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            COMMUNITIES
          </a>
          <a
            href="https://gallery.action-tokens.com"
            className="flex bg-lime-600 p-4 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            GALLERY
          </a>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-2 md:hidden items-center">
          <a
            href="https://collections.action-tokens.com/"
            className="w-[60%] flex justify-center bg-lime-600 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            COLLECTIONS
          </a>
          <a
            href="https://map.action-tokens.com"
            className="flex w-[60%] bg-lime-600 justify-center p-4 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            COMMUNITIES
          </a>
          <a
            href="https://gallery.action-tokens.com"
            className="flex w-[60%]  bg-lime-600 justify-center  p-4 m-2 rounded-md shadow-inner hover:scale-105 text-zinc-300 backdrop-blur-xl hover:text-white py-2 font-extrabold"
          >
            GALLERY
          </a>
        </div>
      </div>
      <div className='flex flex-row justify-end gap-x-10 mr-20 text-zinc-200 font-bold'>
      <a href='/terms'>Privacy Policy</a>
      <a href='/terms'>Terms</a>
      <a href='https://t.me/actiontokens'>Support</a>
      </div>
    </div>
  );
};

export default Hero;
