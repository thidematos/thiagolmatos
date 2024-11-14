import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
  const className = `text-slate-300 text-3xl drop-shadow`;

  return (
    <div className="flex flex-row items-center justify-start gap-6 py-6">
      <a href="https://www.linkedin.com/in/th-tlj/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={className} />
      </a>
      <a href="https://github.com/thidematos" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={className} />
      </a>
      <a href="https://www.instagram.com/th_tlj/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className={className} />
      </a>
    </div>
  );
}

export default Links;
