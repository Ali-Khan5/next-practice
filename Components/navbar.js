import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">BitzPrice</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
    <style jsx >{`
    .navbar.bg-light {
        background-color: #41c1fd !important;
    }`}
    </style>
  </nav>
);

export default Navbar;