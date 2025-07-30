import React from 'react';

export const Statement = () => {
  return (
    <>
      <style>
        {`
          @keyframes intro-gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div className="flex items-center justify-center font-sans mt-56 mb-36">
        <h1 
          className="
            text-center                  
            font-semibold                
            text-[92px]                  
            leading-[1.05]               
            tracking-[-0.045em]          
            text-transparent             
            bg-clip-text                 
            bg-[200%_200%]               
            bg-[linear-gradient(91.36deg,#eca658,#f391a6_13.02%,#e188c3_25.52%,#a58de3_37.5%,#56abec_49.48%,#737eb7_63.02%,#c8638c_72.92%,#dd5d57_84.38%,#df6c51_97.92%)]
            animate-[intro-gradient_10s_ease_infinite]
          "
        >
          World-class Digital<br />
          stuff that actually<br />
          matters.
        </h1>
      </div>
    </>
  );
};

export default Statement;
