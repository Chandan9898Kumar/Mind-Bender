import { useState, useEffect } from "react";

const useMediaQuery = (initialQuery) => {
  const [mediaMatch, setMediaMatch] = useState(false);

  const handleMediaChange = (media) => {
    setMediaMatch(media.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(initialQuery);
    setMediaMatch(media.matches);

    media.addEventListener("change", handleMediaChange);

    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, [initialQuery]);

  return [mediaMatch];
};

export default useMediaQuery;
