import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, className }) => {
  return (
    <>
      {/* Desktop */}
      <div className=" flex">
        <FloatingDockCommon items={items} className={className} layout="row" />
      </div>
      {/* Mobile */}
      {/* <FloatingDockMobile items={items} className={className} /> */}
    </>
  );
};



const FloatingDockCommon = ({ items, className, layout }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        `mx-auto flex items-end gap-4 rounded-2xl  dark:bg-neutral-900 `,
        layout === "row" ? "flex-row" : "flex-col",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};
function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  // Calculate horizontal distance between mouse and icon center
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Even smaller scale change (40 → 48 → 40 instead of 60)
  let widthTransform = useTransform(distance, [-100, 0, 100], [45, 50, 45]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [45, 50, 45]);

  // Inner icon scaling also reduced (20 → 24 → 20)
  let widthTransformIcon = useTransform(distance, [-100, 0, 100], [23, 27, 23]);
  let heightTransformIcon = useTransform(distance, [-100, 0, 100], [23, 27, 23]);

  // Add spring physics to smooth out the scaling
  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  // Track hover state to show tooltip
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref} // reference to get size & position
        style={{ width, height }} // animated size
        onMouseEnter={() => setHovered(true)} // show tooltip
        onMouseLeave={() => setHovered(false)} // hide tooltip
        className="relative flex aspect-square items-center justify-center rounded-full" // removed background
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-6 left-1/2 w-fit rounded-md border border-gray-300 bg-white px-2 py-0.5 text-xs text-neutral-700 shadow-sm"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon itself */}
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

