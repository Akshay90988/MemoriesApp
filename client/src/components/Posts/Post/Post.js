import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [likes, setLikes] = useState(post ? post.likes : []);


  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize='small' /> &nbsp;
            {likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} like${likes.length > 1 ? "s" : ""}`}
          </>
        ) : (
          <>
            <ThumbUpAltIcon fontSize='small' /> &nbsp; {likes.length}{" "}
            {likes.length === 1 ? "like" : "likes"}
          </>
        )
    }
  }

  return (
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        <Button size="small" color="primary" disabled={!user} onClick={() => dispatch(likePost(post._id))}><Likes />  </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}
      </CardActions>
    </Card>

  );
};

export default Post;
