import React from 'react'
import Avatar from 'material-ui/Avatar';

const UserSection = ({username, datePosted}) => {
  return (
    <section className="userBar">
      <div className="user">
        <Avatar
          src="choel.jpg"
          size={30}
        /><h3 className="username">{username}</h3>
      </div>
      <div>
        <p>Posted: {datePosted}</p>
      </div>
    </section>
  )
}

export default UserSection;