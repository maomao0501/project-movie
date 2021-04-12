import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HomeScreen = ({ isAuthenticated }) => {
  return (
    <section className='landing'>
      <div className=''>
        <div className='landing-inner'>
          <div className='landing-inner-text'>
            <h1 className='x-large'>MovieDB Search</h1>
            <p className='lead'>
              Welcome.
            <br></br>Millions of movies, TV shows and people to discover. Explore now.
          </p>
          </div>
          <div>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

HomeScreen.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HomeScreen);
