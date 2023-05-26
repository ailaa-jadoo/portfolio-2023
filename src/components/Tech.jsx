import React, { useState, useEffect } from 'react';
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const ServiceCard = ({ icon }) => (
  <Tilt className='xs:w-[150px] w-[100px]'>
    <motion.div
      className='w-full oceanic-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col xs:h-[100px] h-[80px]'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.matchMedia('(max-width: 768px)').matches;
      setIsSmallDevice(isSmall);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallDevice ? (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='flex flex-wrap'>
              <ServiceCard icon={technology.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");




// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// // const Tech = () => {
// //   return (
// //     <div className='flex flex-row flex-wrap justify-center gap-10'>
// //       {technologies.map((technology) => (
// //         <div className='w-28 h-28' key={technology.name}>
// //           <BallCanvas icon={technology.icon} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// const ServiceCard = ({ icon }) => (
//   <Tilt className='xs:w-[150px] w-[100px]'>
//     <motion.div
//       className='w-full oceanic-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] flex justify-evenly items-center flex-col xs:h-[100px] h-[80px]'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='flex flex-wrap'>
//           <ServiceCard icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");