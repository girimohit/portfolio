import { useEffect } from "react";
import { useSelector } from "react-redux";

const CustomHook = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    // Scroll the active tab into view when it matches the activeTab state
    if (scrollTab?.current?.classList.contains(activeTab)) {
      scrollTab.current.scrollIntoView({ behavior: "smooth" });
    }

    // Use Intersection Observer for animations
    if (divs !== null) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              entry.target.classList.remove("active");
            }
          });
        },
        {
          root: null, // Default to the viewport
          rootMargin: "0px", // Adjust if needed (e.g., "0px 0px -10% 0px" for early triggers)
          threshold: 0.1, // Trigger animation when 10% of the element is visible
        }
      );

      divs.current.forEach((div) => {
        div.classList.add("animation"); // Initial animation class
        observer.observe(div);
      });

      // Cleanup observer when the component unmounts
      return () => observer.disconnect();
    }
  }, [activeTab]);
};

export default CustomHook;










// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// const CustomHook = (refTab = null, refList = null) => {
//   const scrollTab = refTab;
//   const divs = refList;
//   const activeTab = useSelector((state) => state.activeTab);

//   useEffect(() => {
//     if (scrollTab.current.classList.contains(activeTab)) {
//       const componentNode = scrollTab.current;
//       componentNode.scrollIntoView({ behavior: "smooth" });
//     }
//     if (divs !== null) {
//       divs.current.forEach((div) => {
//         div.classList.add("animation");
//       });
//       const handlScroll = () => {
//         const scrollPosition = window.scrollY;
//         divs.current.forEach((div) => {
//           const offsetTop = div.getBoundingClientRect().top + scrollPosition;
//           // if (scrollPosition >= offsetTop - window.innerHeight/1.5) {
//           if (scrollPosition >= offsetTop - window.innerHeight) {
//             div.classList.add("active");
//           } else {
//             div.classList.remove("active");
//           }
//         });
//       };
//       window.addEventListener("scroll", handlScroll);
//     }
//   }, [activeTab]);
// };

// export default CustomHook;
