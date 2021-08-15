import React from "react"
import { SiGithub } from "react-icons/si"

const Socials = () => {
  const links = { 
      github: "https://github.com/gmanninglive",}
 
  return (
      <ul className="socials-container">
        {/* <SocialLink href={links.linkedin} icon={FaLinkedin} label="Linkedin" />
        <SocialLink href={links.instagram} icon={FaInstagram} label="Instagram"/> */}
        <SocialLink href={links.github} icon={SiGithub} label="Github" />
      </ul>
  )
}

const SocialLink = ({ href, label, icon: Icon , size}) => {
  const iconSize = {size}
  return (
    <li className="social-link">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="screen-reader-only">{label}</span>
        <Icon  />
      </a>
    </li>
  )
}

export default Socials;