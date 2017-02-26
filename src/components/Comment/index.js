import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const Comment = ({ comment, username }) => {
  return (
    <div className='commentContainer'>
      <h3>{username}:</h3>
      <h4 className='comment'>{comment}</h4>
    </div>
  )
}

export default Comment