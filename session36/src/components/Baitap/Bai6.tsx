import React, { useEffect } from 'react';

const Scroll = () => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    document.title = `Scroll Position: ${scrollPosition}`;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nisi et neque facilisis placerat. 
        Curabitur aliquam lectus eu augue tempor, ut pretium turpis dapibus. Phasellus scelerisque nibh quis urna 
        pellentesque, id commodo felis viverra. Duis at lorem at orci fermentum varius. Donec vehicula fermentum 
        erat, a consectetur justo pharetra non. Cras vel dolor turpis. Ut a nulla non metus sagittis facilisis. 
        Nullam nec ultricies lorem. Ut vehicula metus eget massa hendrerit, sed suscipit nulla pulvinar. Sed nec 
        sapien quis velit ornare vehicula. Integer feugiat augue non felis suscipit, eget malesuada sapien dictum. 
        Sed et dictum nunc, nec malesuada mauris. Morbi a tincidunt felis. Aliquam gravida convallis odio, et 
        egestas lorem pellentesque sit amet. Aenean at libero non nulla gravida tincidunt vel eu mi.
        {}
        {[...Array(50)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum 
            vestibulum. Cras venenatis euismod malesuada. 
          </p>
        ))}
      </p>
    </div>
  );
};

export default Scroll;
