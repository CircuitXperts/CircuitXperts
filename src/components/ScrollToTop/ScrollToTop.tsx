import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => {
      setShow(window.pageYOffset > 400);
    };
    window.addEventListener("scroll", toggle);
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    show && (
      <div
        onClick={scrollUp}
        className="fixed md:bottom-20 bottom-16 cursor-pointer right-4 md:right-8 !text-black"
      >
        <ArrowUpCircleIcon height={48} width={48} />
      </div>
    )
  );
};
export default ScrollToTop;
