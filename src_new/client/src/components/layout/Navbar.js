import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {

  const authLinks = (
    <ul>
      <li>
        <Link className="nav-link" to="/dashboard">
          <span className="hide-sm">HOME</span>
        </Link>
      </li>
      <li>
        <a className="nav-link" onClick={logout} href="#!">
          <span className="hide-sm">LOGOUT</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="nav-link" to="/register">REGISTER</Link>
      </li>
      <li>
        <Link className="nav-link" to="/login">LOGIN</Link>
      </li>
    </ul>
  );

  return (
    <nav className="fixed-nav-bar">
      <header>
        <h1>Movie Page Information</h1>

        <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link className="navbar-brand" to="/data"
            ><img style={{ width: "80px", height: "60px" }} src={require('../../asset/tmdb.png')} alt={""} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to="/search/">Search</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profiles">Profile</Link>
                </li>
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              </ul>
            </div>
          </nav>
        </section>
        <div className="alert alert-warning" role="alert">
          <span
            className="closebtn"
            onClick={(e) => { e.target.parentElement.style.display = 'none'; }}
          >&times;</span>

          <p>
            <img style={{ width: "80px", height: "60px" }} src={require('../../asset/background2.png')} alt={""} />
            Welcome to MovieDB website </p>
          More movie information visit <a href="https://www.themoviedb.org/?language=en-US"
            className="alert-link"
          >TMDB</a>
        </div>
      </header>
    </nav >
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
