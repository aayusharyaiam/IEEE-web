import { useEffect } from 'react';
import { setupSmoothScroll } from './scrollManager';

const SmoothScroll = () => {
  useEffect(() => setupSmoothScroll(), []);

  return null;
};

export default SmoothScroll;
