import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
  return (
    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Welcome to SolaceAI',
    1000,
    'Your Companion in Mental Health',
    2000,
  ]}
  speed={40}
  style={{ fontSize: '38px' , color: '#FC5C9C', display:'inline-block', fontFamily:"Arapey, serif"}}
  repeat={Infinity}
/>
  );
};

export default TypingAnimation;