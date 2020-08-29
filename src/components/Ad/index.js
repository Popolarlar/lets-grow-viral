import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { likeAdStart, commentAdStart } from "./../../store/Ad/ad.actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import { Favorite, InsertComment } from "@material-ui/icons";
import Comment from "./../Comment";
import ComingSoonImg from "./../../assets/coming-soon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  media: {
    height: 200,
  },
  comments: {
    paddingTop: theme.spacing(2),
  },
}));

const Ad = ({ ad }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    adTitle,
    adDesc,
    adUrl,
    createdDate,
    like,
    comments,
    documentID,
  } = ad;
  const date = new Date(createdDate.seconds * 1000).toLocaleDateString();

  // Local state
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = (e) => {
    e.preventDefault();
    dispatch(likeAdStart(documentID));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(commentAdStart(documentID, commentText));
    setCommentText("");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={adUrl ? adUrl : ComingSoonImg}
          title={adTitle}
        />
        <CardHeader title={adTitle} subheader={date} />
      </CardActionArea>

      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {adDesc}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handleLikeClick}>
          <Favorite />
          <Typography>{like}</Typography>
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <InsertComment />
          <Typography>{comments.length}</Typography>
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleCommentSubmit}>
            <TextField
              label="Comment..."
              fullWidth
              variant="outlined"
              value={commentText}
              onChange={(e) => {
                setCommentText(e.target.value);
              }}
            />
          </form>

          <Box className={classes.comments}>
            {comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Ad;
