import React from 'react';

const links = [
  { url: 'https://', label: 'Newsletter' },
  { url: 'https://www.youtube.com/channel/UCZ5GxpolOAPF-PNiNaV8E2A', label: 'Youtube' },
  { url: 'in/liceth-ovalles-44897591', label: 'LinkedIn' },
  { url: 'https://github.com/liceth', label: 'GitHub'},
]

export const Footer = () => {
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
