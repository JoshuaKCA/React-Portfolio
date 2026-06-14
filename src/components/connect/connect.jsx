import "./Connect.css";

const socials = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/joshuakylearcilla/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
  },
  {
    label: "GitHub",
    url: "https://github.com/JoshuaKCA",
    icon: "https://cdn.simpleicons.org/github/c084fc",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/_arcillaamon/",
    icon: "https://cdn.simpleicons.org/instagram/c084fc",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/joshuakyle.arcilla",
    icon: "https://cdn.simpleicons.org/facebook/c084fc",
  },
];

export default function Connect() {
  return (
    <div className="connect-container">
      <h2 className="connect-header">Connect with me!</h2>

      <p className="connect-email">
        <span>✉</span> joshuakylearcilla@gmail.com
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=joshuakylearcilla@gmail.com&su=Portfolio Inquiry - Joshua Kyle Arcilla"
        target="_blank"
        rel="noopener noreferrer"
        className="email-btn"
      >
        ✉ Email Me
      </a>

      <p className="social-label">SOCIAL LINKS</p>

      <div className="social-icons">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title={s.label}
          >
            <img src={s.icon} alt={s.label} width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
