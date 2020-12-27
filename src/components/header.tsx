import React from 'react';
import Link from 'next/link';

function Jumbotron({ title }: { title: string }) {
  return (
    <div className="jumbotron big-banner bg-primary text-center text-white">
      <h1> {title} </h1>
    </div>
  );
}

function Navbar({ pages }: { pages: [string, string][] }) {
  return (
    <div className=" navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        <Link href="/">
          <a> Santa&apos;s Warehouse </a>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {pages.map((page) => (
            <li key={page[1]} className="nav-item active">
              <Link href={page[1]}>
                <a className="nav-link"> {page[0]} </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header({ title }: { title?: string }) {
  return (
    <div>
      <Navbar
        pages={[
          [`About`, `/about`],
          [`Donate`, `/donate`],
          [`Contact Us`, `/contact`],
        ]}
      />
      {title && title !== `home` && <Jumbotron title={title} />}
    </div>
  );
}
