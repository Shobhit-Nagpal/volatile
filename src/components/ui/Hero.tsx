import React from 'react';

export function DotBackgroundDemo() {
  return (
    <div className='h-fit  w-full bg-black   bg-dot-white/[0.2]  relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <p className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-8'>
        <span className='text-sky-400'>Enhance</span> The Way You <br />
        Present Your <span className='text-sky-400'>Business</span>
      </p>
    </div>
  );
}