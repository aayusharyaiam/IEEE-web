import { useState } from 'react';

export default function ImageWithSkeleton({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-container-highest">
      {!loaded && !failed && <div className="skeleton absolute inset-0" aria-hidden="true" />}
      {failed ? (
        <div className="flex h-full min-h-32 items-center justify-center px-4 text-center text-sm text-on-surface-variant/70">Image unavailable</div>
      ) : (
        <img {...props} src={src} alt={alt} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
      )}
    </div>
  );
}
