import React from 'react';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    skills
  }
}) => {
  return (
    <div className="col-sm-4">
      <div className='profile'>
        <img src={avatar} alt='' className='profile-img round-img' />
        <div>
          <h2>{name}</h2>
          <p className='my-1'>{location && <span>{location}</span>}</p>
          <ul>
            {skills.slice(0, 4).map((skill, index) => (
              <li key={index} className='text-primary'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
