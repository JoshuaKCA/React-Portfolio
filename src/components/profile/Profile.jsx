import "./Profile.css";

const PROFILE_DATA = {
  name: "Joshua Kyle Arcilla",
  title: "Aspiring Software Engineer",
  location: "Caloocan, Philippines",
  bio: "Highly motivated aspiring Software Engineer with a solid foundation in resolving technical issues, managing data, and building application systems. I gained hands-on experience as an IT Department Intern at APEC Homes, where I focused on fixing hardware and software problems, keeping systems running smoothly, and auditing asset databases. My academic work involves testing software performance, managing databases, and building full-stack web environments.",
  image: "https://i.imgur.com/ppkMqhI.jpeg",
};
const emailAddress = "joshuakylearcilla@gmail.com";
const emailSubject = "Portfolio Inquiry - Joshua Kyle Arcilla";
const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}`;

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left-column">
        <img
          className="profile-avatar"
          src={PROFILE_DATA.image}
          alt={PROFILE_DATA.name}
        />
      </div>

      <div className="profile-right-column">
        <h1 className="profile-name">{PROFILE_DATA.name}</h1>
        <p className="profile-title">{PROFILE_DATA.title}</p>
        <span className="profile-location">📍 {PROFILE_DATA.location}</span>
        <div className="button-container">
          <a
            href="https://github.com/JoshuaKCA"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <img
              src="https://i.imgur.com/dy2uNAS.png"
              className="github-logo"
            ></img>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshuakylearcilla/"
            target="_blank"
            rel="noopener norefferer"
            className="linkedin-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
              className="linkedin-logo"
            ></img>
            LinkedIn
          </a>
          <a
            href={gmailWebComposeUrl}
            target="_blank"
            rel="noopener norefferer"
            className="emailer-btn"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
              className="email-logo"
            ></img>
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
