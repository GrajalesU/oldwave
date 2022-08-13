import { useEffect, useState } from 'react';

const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState({ xs: false, sm: false, md: false, lg: true, xl: false });
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowSize.width > breakpoints.xs && windowSize.width < breakpoints.xs) {
      setBreakPoint({ xs: true, sm: false, md: false, lg: false, xl: false });
    }
    if (windowSize.width > breakpoints.sm && windowSize.width < breakpoints.sm) {
      setBreakPoint({ xs: false, sm: true, md: false, lg: false, xl: false });
    }
    if (windowSize.width > breakpoints.md && windowSize.width < breakpoints.md) {
      setBreakPoint({ xs: false, sm: false, md: true, lg: false, xl: false });
    }
    if (windowSize.width > breakpoints.lg && windowSize.width < breakpoints.lg) {
      setBreakPoint({ xs: false, sm: false, md: false, lg: true, xl: false });
    }
    if (windowSize.width >= breakpoints.lg) {
      setBreakPoint({ xs: false, sm: false, md: false, lg: false, xl: true });
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
