import "./Certificates.css";
import BorderGlow from "../component/BorderGlow";

const glowProps = {
  edgeSensitivity: 30,
  glowColor: "40 80 80",
  backgroundColor: "#120F17",
  borderRadius: 10,
  glowRadius: 20,
  glowIntensity: 1,
  coneSpread: 25,
  animated: false,
  colors: ["#c084fc", "#f472b6", "#38bdf8"],
};

const certs = [
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM 2026",
    target:
      "https://www.coursera.org/account/accomplishments/verify/70IGESR1UOWV",
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM 2026",
    target:
      "https://www.coursera.org/account/accomplishments/verify/KK0U7A94KMVU",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM 2026",
    target:
      "https://www.coursera.org/account/accomplishments/verify/HMKOCSM4PEIY",
  },
  {
    title: "JavaScript Programming Essentials",
    issuer: "IBM 2026",
    target:
      "https://www.coursera.org/account/accomplishments/verify/NRBZJ0V26IRQ",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM 2026",
    target:
      "https://www.coursera.org/account/accomplishments/verify/JGU6SOBWI9VP",
  },
];

export default function Certificates() {
  return (
    <div className="certs-container">
      <h2 className="cert-header">Certificates</h2>
      <div className="certs">
        {certs.map((cert, i) => (
          <BorderGlow key={i} {...glowProps}>
            <div style={{ padding: "5px 10px" }}>
              <p>{cert.title}</p>
              <p>Issued by {cert.issuer}</p>
              <a
                href={cert.target}
                target="_blank"
                rel="noopener noreferrer"
                className="cred-btn"
              >
                Show Credential
              </a>
            </div>
          </BorderGlow>
        ))}
      </div>
    </div>
  );
}
