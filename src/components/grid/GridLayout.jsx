export default function BentoGrid() {
  return (
    <div className="bento-container">
      {/* 1. Main Header Segment spans top */}
      <div className="bento-card profile-segment">
        <Profile />
      </div>

      {/* 2. The Split Columns */}
      <div className="bento-split">
        {/* Left Column (Wider) */}
        <div className="bento-column left-column">
          <div className="bento-card">
            <AboutMe />
          </div>
          <div className="bento-card">
            <TechStack />
          </div>
          <div className="bento-card">
            <h3>Featured Projects</h3>
          </div>
        </div>

        {/* Right Column (Narrower) */}
        <div className="bento-column right-column">
          <div className="bento-card experience-segment">
            <h3>Certificates</h3>
          </div>
          <div className="bento-card">
            <h3>Connect Matrix</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
