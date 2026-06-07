import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 overflow-hidden bg-transparent">
      <div className="h-full bg-gradient-to-r from-accent to-accentAlt transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ScrollProgress;
