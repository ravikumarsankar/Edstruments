import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../animations/animationJson.json'
const AnimationContainer = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={320}
          width={320}
        />
      </div>
    );
};
export default AnimationContainer;