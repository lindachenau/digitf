import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        width: 100%;
        margin: 0 auto;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: start;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 16px;
      }
      a {
        color: #2196f3;
        text-decoration: none;
        font-size: 1.1em;
      }`}
    </style>
  </nav>
)

export default Nav
