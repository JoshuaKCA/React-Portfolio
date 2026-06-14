import ScrollVelocity from "../component/ScrollVelocity";
import "./TechStack.css";

export default function TechStack() {
  return (
    <>
      <h2 className="techstack">TechStack</h2>
      <h3 className="language">Languages</h3>
      <ScrollVelocity
        texts={["HTML", "CSS", "JavaScript", "Python", "SQL", "Shell"]}
        velocity={30}
        className="custom-scroll-text"
        numCopies={4}
        damping={100}
        stiffness={800}
      />
      <h3 className="frameworks">Frameworks/Libraries</h3>
      <ScrollVelocity
        texts={[
          "Flask",
          "CustomTkinter",
          "Matplotlib",
          "React.js",
          "Node.js",
          "Redux.js",
        ]}
        velocity={30}
        className="custom-scroll-text"
        numCopies={4}
        damping={100}
        stiffness={800}
      />
      <h3 className="tools">Tools/Technologies</h3>
      <ScrollVelocity
        texts={[
          "Git",
          "GitHub",
          "AI HAT+ NPU",
          "Raspberry Pi",
          "VSCode",
          "Copilot",
          "Figma",
          "Jira",
          "Notion",
        ]}
        velocity={30}
        className="custom-scroll-text"
        numCopies={4}
        damping={100}
        stiffness={800}
      />
    </>
  );
}
