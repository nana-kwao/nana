import React, { useEffect, useRef, useState } from "react";

const studiesList1 = [
  "Web Application",
  "CSS-Cascading Style Sheet",
  "APIs",
  "Nodejs",
  "Database Management",
  "Software Engineering",
  "OOP- Object Oriented Programming",
  "Agiles Development",
  "Resource Management",
  "Problem Solving",
];
const studiesList2 = [
  "HyperText Markup Language",
  "Javascript",
  "Responsive Design",
  "Express.js",
  "CI/CD",
  "Data Structures and Algorithms",
  "Functional Programming",
  "Waterfall Develoopment",
  "Communication Skills",
  "Excellent Team Player",
];

const Studies = () => {
  const sectionRef = useRef(null);
  const itemRefs1 = useRef([]);
  const itemRefs2 = useRef([]);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const allRefs = [...itemRefs1.current, ...itemRefs2.current];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.key]: true,
            }));
          }
        });
      },
      { threshold: 0.15 }
    );
    allRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="studies" className="studies-area" ref={sectionRef}>
      <h2>My Studies</h2>
      <ul className="studies-list">
        <div>
          {studiesList1.map((item, idx) => (
            <li
              key={item}
              className={`study-item fade-in${
                visibleItems[item] ? " visible" : ""
              }`}
              ref={(el) => (itemRefs1.current[idx] = el)}
              data-key={item}
            >
              {item}
            </li>
          ))}
        </div>
        <div>
          {studiesList2.map((item, idx) => (
            <li
              key={item}
              className={`study-item fade-in${
                visibleItems[item] ? " visible" : ""
              }`}
              ref={(el) => (itemRefs2.current[idx] = el)}
              data-key={item}
            >
              {item}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Studies;
