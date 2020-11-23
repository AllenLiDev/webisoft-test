import React from 'react';

const Nav = (props) => {
  const links = props.links.map((link, i) =>
    <li key={i} className="nav-item">
      <a className="nav-link text-uppercase" href={link}>{link}</a>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Company</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {links}
        </ul>
      </div>
    </nav>
  )
}

export default Nav;