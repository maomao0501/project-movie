import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className="home-title">
        <h1 className="large text-primary">HOME</h1>
        <p className="lead text-light">
          How you feel about movie? {user && user.name}
        </p>
      </div>

      {profile !== null ? (
        <Fragment>
          <p className="">Want to share your thoughts about movie search with others?</p>
          <div className="my-2">
            <Link to="/edit-profile" className="btn btn-dark">
              Edit thoughts
            </Link>
            <button className="btn btn-light" onClick={() => deleteAccount()}>
              Delete Account
            </button>
          </div>
        </Fragment>
      ) : (
          <Fragment>
            <p className="">Want to share your thoughts about movie search with others?</p>
            <div className="my-2">
              <Link to="/create-profile" className="btn btn-primary my-1">
                Create thoughts
          </Link>
              <button className="btn btn-light" onClick={() => deleteAccount()}>
                Delete Account
            </button>
            </div>

          </Fragment>
        )
      }

    </Fragment >

  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
