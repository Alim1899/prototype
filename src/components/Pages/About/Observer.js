import React, { useEffect, useRef } from "react";

const Observer = (props) => {
  const observedElementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (observedElementRef.current) {
      const obsCallback = (entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
        });
      };

      const obsOptions = {
        root: null,
        threshold: [0, 0.5],
      };

      observerRef.current = new IntersectionObserver(obsCallback, obsOptions);
      observerRef.current.observe(observedElementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <div ref={observedElementRef}>{props.children}</div>;
};

export default Observer;

// import React, { useRef, useEffect } from 'react';

// const LazyImage = ({ src, alt }) => {
//   const imageRef = useRef(null);
//   const current = imageRef.current;
//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//         console.log(entries);
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           console.log(entry);
//           imageRef.current.src = src;
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     observer.observe(imageRef.current);

//     return () => {
//       if (current) {
//         observer.unobserve(current);
//       }
//     };
//   }, [current,src]);

//   return <img ref={imageRef} alt={alt} />;
// };

// export default LazyImage;
