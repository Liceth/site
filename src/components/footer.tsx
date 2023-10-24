import React from 'react';
import '../scss/footer.scss';

const links = [
  { url: 'https://www.twitter.com/LiloOvalles', label: 'Twitter' },
  { url: 'https://github.com/liceth', label: 'GitHub'},
  { url: 'https://twitch.tv/licethovalles', label: 'Twitch'},
  { url: 'https://www.youtube.com/channel/UCZ5GxpolOAPF-PNiNaV8E2A', label: 'Youtube' },
  { url: 'https://www.linkedin.com/in/liceth-ovalles-44897591/', label: 'LinkedIn' },
  
]

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made by Liceth Ovalles</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}

export default Footer;