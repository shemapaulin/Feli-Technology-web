import { useEffect } from "react";

export const ScrollTo: React.FC = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    handleScrollToTop();
  }, []);

  return null;
};
