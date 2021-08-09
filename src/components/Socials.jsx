import React from "react"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Socials = () => {
  const links = { facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",}
 
//   } = useStaticQuery(graphql`
//     query SocialQuery {
//       site {
//         meta: siteMetadata {
//           links {
//             instagram
//             twitter
//             linkedin
//           }
//         }
//       }
//     }
//   `)

  return (
      <ul className="socials-container">
        <SocialLink href={links.linkedin} icon={FaLinkedin} label="Linkedin" />
        <SocialLink href={links.instagram} icon={FaInstagram} label="Instagram"/>
        <SocialLink href={links.twitter} icon={FaTwitter} label="Twitter" />
        
      </ul>
  )
}

const SocialLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="social-link">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="screen-reader-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Socials;