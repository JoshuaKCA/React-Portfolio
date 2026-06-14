import Profile from "../profile/Profile";
import AboutMe from "../aboutMe/AboutMe";
import TechStack from "../techStack/TechStack";
import Certificates from "../certifications/Certificates";
import Projects from "../FeaturedProjects/Projects";
import Connect from "../connect/connect";
import "./GridLayout.css";

export default function BentoGrid() {
  return (
    <div className="bento-container">
      {/* Spans all 3 columns */}
      <div className="bento-card profile-segment">
        <Profile />
      </div>

      {/* Spans 2 columns (left side) */}
      <div className="bento-card about-segment">
        <AboutMe />
      </div>

      {/* Spans 1 column (right side), tall enough to sit next to About + Tech */}
      <div className="bento-card experience-segment">
        <Certificates />
      </div>

      {/* Spans 2 columns (left side) */}
      <div className="bento-card tech-segment">
        <TechStack />
      </div>

      {/* Spans 2 columns (left side) */}
      <div className="bento-card projects-segment">
        <Projects />
      </div>

      {/* Spans 1 column (right side) */}
      <div className="bento-card connect-segment">
        <Connect />
      </div>
    </div>
  );
}
