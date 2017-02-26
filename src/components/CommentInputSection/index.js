import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import './style.css';

const CommentInputSection = ({ toggleLike, commentInputText, handleCommentInputChange, submitComment}) => {
  return (
    <section className="commentBar">
      <Checkbox
        checkedIcon={<ActionFavorite />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={{ 'width': '18px', 'marginLeft': '20px' }}
        onCheck={() => toggleLike()}
      />
      <form onSubmit={ e => submitComment(commentInputText, e)}>
        <input
          type='text'
          value={commentInputText}
          className="commentInput"
          placeholder="Add a comment..."
          onChange={ e => handleCommentInputChange('commentInputText', e)}
        />
      </form>

    </section>
  )
}

export default CommentInputSection;
