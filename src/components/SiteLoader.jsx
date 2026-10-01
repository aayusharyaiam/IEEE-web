import { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);
    if (document.readyState === 'complete') {
      const timer = window.setTimeout(hide, 350);
      return () => window.clearTimeout(timer);
    }
    window.addEventListener('load', hide, { once: true });
    return () => window.removeEventListener('load', hide);
  }, []);

  if (!visible) return null;
  return (
    <div className="site-loader" role="status" aria-label="Loading IEEE BIT Patna">
      <div className="site-loader__mark">IEEE</div>
      <div className="site-loader__bar"><span /></div>
      <p>Loading innovation</p>
    </div>
  );
}
