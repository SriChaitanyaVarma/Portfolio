import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY;

      const scrollHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const percent =
        (scrollTop / scrollHeight) *
        100;

      setProgress(percent);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
  className="
    relative
    h-full
    bg-gradient-to-r
    from-blue-500
    via-cyan-400
    to-purple-500
    transition-[width]
    duration-150
  "
  style={{
    width: `${progress}%`,
  }}
>
  <div
    className="
      absolute
      inset-0
      blur-md
      bg-gradient-to-r
      from-blue-500
      via-cyan-400
      to-purple-500
    "
  />
</div>
  );
}

export default ScrollProgress;