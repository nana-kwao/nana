import { AssignmentCard } from "milesuicomponents";

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
  { study: "Agiles Development", color: "lemon" },
  { study: "Resource Management", color: "brown" },
  { study: "Problem Solving", color: "coral" },
];

const red = "red";
const Studies = () => {
  return (
    <>
      <div>
        {studiesList.map((study, idx) => (
          <AssignmentCard key={idx}>{study.study}</AssignmentCard>
        ))}
      </div>
    </>
  );
};

export default Studies;
