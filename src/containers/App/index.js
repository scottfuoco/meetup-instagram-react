import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';

import CommentInputSection from '../../components/CommentInputSection';
import CommentSection from '../../components/CommentSection';
import UserSection from '../../components/UserSection';
import ImageSection from '../../components/ImageSection';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Choel Master',
      post: {
        comments: [],
        likes: 15,
        liked: false,
        datePosted: 'Feb 25th 2017'
      },
      commentInputText: '',
    }

    this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  handleCommentInputChange(input, e) {
    const updateInputState = e.target.value;
    this.setState({ commentInputText: updateInputState });
  }

  submitComment(comment, e) {
    e.preventDefault();
    const { post } = this.state;

    this.setState({
      post: {...post,  comments: [...post.comments, comment ] },
      commentInputText: '',
    });

  }

  toggleLike() {
    const { post, likes, liked } = this.state;
    const addLikes = post.likes + (!post.liked ? 1 : -1) ;
    this.setState({ post: { ...post, liked: !post.liked, likes: addLikes } });
  }

  render() {
    const { post, commentInputText, username} = this.state;
    return (
      <MuiThemeProvider>
        <div className="container">
          <Card style={{ 'width': '80%' }}>
            <UserSection username={username} datePosted={post.datePosted} />

            <ImageSection />

            <CommentSection post={post} username={username} />

            <Divider style={{ 'marginLeft': '20px', 'marginRight': '20px' }} />

            <CommentInputSection
              toggleLike={this.toggleLike}
              commentInputText={commentInputText}
              handleCommentInputChange={this.handleCommentInputChange}
              submitComment={this.submitComment}
            />
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
