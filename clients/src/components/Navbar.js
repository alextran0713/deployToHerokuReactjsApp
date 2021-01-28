const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0">
    <div className="container">
    <a className="navbar-brand" href="/">
    <img
    src="img/logo.png"
    height="30"
    alt=""
    loading="lazy"
    />
    </a>
    <button
    className="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
    <div className="navbar-nav">
    <a className="nav-link" href="https://store.nergearz.com">BUY</a>
    <a className="nav-link active" href="#startnow">SELL</a>
    </div>
    <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link" aria-current="page" href="#questions">how it works</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#">track offers</a>
    </li>
    </ul>
    <a href="#startnow" className="btn btn-outline-dark" role="button" aria-pressed="true">Sell Now</a>
    </div>
    </div>
    </nav>
    )
}
 export default Navbar;
