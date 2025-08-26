import { AssignmentCard, CourseTitle } from "milesuicomponents";

const studiesList = [
  { study: "HyperText Markup Language", color: "blue" },
  { study: "Javascript", color: "green" },
  { study: "Responsive Design", color: "brown" },
  { study: "Express.js", color: "orange" },
  { study: "CI/CD", color: "lightblue" },
  { study: "Data Structures and Algorithms", color: "red" },
  { study: "Functional Programming", color: "aqua" },
  { study: "Waterfall Develoopment", color: "coral" },
  { study: "Communication Skills", color: "darkorange" },
  { study: "Excellent Team Player", color: "darkred" },
  { study: "Web Application", color: "blue" },
  { study: "CSS-Cascading Style Sheet", color: "orange" },
  { study: "APIs", color: "gold" },
  { study: "Nodejs", color: "lightblue" },
  { study: "Database Management", color: "gray" },
  { study: "Software Engineering", color: "purple" },
  { study: "OOP- Object Oriented Programming", color: "red" },
  { study: "Agiles Development", color: "orange" },
  { study: "Resource Management", color: "brown" },
  { study: "Problem Solving", color: "coral" },
];

const Studies = () => {
  return (
    <>
      <CourseTitle style={{ textAlign: "center" }}>Skills</CourseTitle>
      <div
        className="studies-li"
        style={{
          display: "grid",
          justifyItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {studiesList.map((study, idx) => (
          <AssignmentCard
            style={{
              border: "none",
              borderBottom: `0.2em solid ${study.color}`,
              padding: "1em 0.5em",
              margin: "1rem 0",
            }}
            key={idx}
          >
            {study.study}
          </AssignmentCard>
        ))}
      </div>
    </>
  );
};

export default Studies;
