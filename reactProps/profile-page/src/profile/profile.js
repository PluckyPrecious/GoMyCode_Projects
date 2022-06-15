import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(`props:`, props);
  return (
    <div>
      <h1>{props.fullName}</h1>
      <h3>{props.profession}</h3>
      <div>{props.children}</div>
      <p>
        <b>Bio:</b>
        <br />
        {props.bio}
      </p>
      <button
        onClick={() => props.handleName(`Profile User: ${props.fullName}`)} style={{ border: 'solid 5px #f162ff', borderRadius: '5px', backgroundColor: '#ffd79d', fontSize: '15px'}}
      >
        Click Me
      </button>
    </div>
  );
};

// Set default props
Profile.defaultProps = {
  fullName: "First Name Last Name",
  bio:
    "Project Manager with Finance background & love for anything Tech. Python is my first language, exploring the front & back-end of the web, can't be caught in the middle.😉 Open-source documentation & translation contributor, big team player. Igbo native, cartoon freak, chocolate, good food, and karaoke.",
  profession: "profession",
  children: "profile photo",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.any,
};

export default Profile;