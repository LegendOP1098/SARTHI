import { useEffect, useRef } from 'react';
import { CountUp, CountUpOptions } from 'countup.js';

// Define prop types
interface NumberCountProps {
  value: number;
  suffix?: string;
}

export default function NumberCount(props: NumberCountProps) {
  // create a ref and declare an instance for each countUp animation
  let countUpAnim: CountUp | undefined;
  const countupRef = useRef<HTMLHeadingElement>(null);

  const options: CountUpOptions = {
    suffix: props.suffix,
  };

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  async function initCountUp() {
    const countUpModule = await import('countup.js');
    countUpAnim = new countUpModule.CountUp(countupRef.current!, props.value, options);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  }, []);

  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <>
      <h1
        ref={countupRef}
        onClick={() => {
          // replay animation on click
          if (countUpAnim) {
            countUpAnim.reset();
            countUpAnim.start();
          }
        }}
      >
        0
      </h1>
    </>
  );
}
