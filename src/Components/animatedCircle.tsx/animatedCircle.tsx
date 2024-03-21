import React, { useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";

const services_data = [
  { name: "Industries", icon: "industries" },
  { name: "Validation\n(C&Q and CSV)", icon: "validation" },
  { name: "Engineering", icon: "engineering" },
  { name: "Project\nManagement", icon: "management" },
  { name: "Manufacturing\nIT", icon: "manufacturing" },
  { name: "Technical\nServices", icon: "technical" },
  { name: "Process\nAutomation", icon: "process" }
];

const AnimatedCircle: React.FC = () => {
  useEffect(() => {
    const center = { x: 325, y: 175 };
    const serv_dist = 250;
    const pointer_dist = 172;
    const pointer_time = 2;

    let pivot_path = { x: -serv_dist, y: 0 };

    let twn_pivot_path = TweenMax.to(pivot_path, 12, {
      bezier: {
        values: [
          { x: -serv_dist, y: 0 },
          { x: 0, y: serv_dist },
          { x: serv_dist, y: 0 },
          { x: 0, y: -serv_dist },
          { x: -serv_dist, y: 0 }
        ],
        curviness: 1.5
      },
      ease: "linear"
    });

    let twn_pointer_path = new TimelineMax({ paused: true });

    const addService = (serv: any, index: number) => {
      // Implement adding service logic
    };

    const createPointer = () => {
      // Implement pointer creation logic
    };

    const serviceClick = (ev: any) => {
      // Implement service click logic
    };

    services_data.forEach((serv, index) => addService(serv, index));

    createPointer();

    setTimeout(() => {
      document.querySelector("#service-collection .serv-0")?.classList.add("active");
    }, 200);

    return () => {
      twn_pivot_path.kill();
      twn_pointer_path.kill();
    };
  }, []);

  return (
    <div className="container w-full h-480">
      <svg id="circle-nav-services" className="w-full h-full">
        {/* Insert SVG elements here */}
      </svg>
    </div>
  );
};

export default AnimatedCircle;
