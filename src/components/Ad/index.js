import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  likeAdStart,
  commentAdStart,
  deleteAdStart,
} from "./../../store/Ad/ad.actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Collapse,
  Typography,
  TextField,
  Box,
  Button,
  Link,
} from "@material-ui/core";
import { Favorite, InsertComment, Delete } from "@material-ui/icons";
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

  actions: {
    position: "relative",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  url: {
    borderRadius: "50%",
    position: "absolute",
    padding: theme.spacing(1),
    right: theme.spacing(2),
    bottom: "50%",
    transform: "translateY(50%)",
    "& a": {
      color: "white",
      fontWeight: "700",
    },
  },
}));

const Ad = ({ ad }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    adTitle,
    adDesc,
    adUrl,
    adLink,
    createdDate,
    like,
    comments,
    documentID,
  } = ad;
  const date = new Date(createdDate.seconds * 1000).toLocaleDateString();

  // Local state
  const [expanded, setExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleMediaClick = (e) => {
    const root = e.target.closest(".MuiCardActionArea-root");
    const elem = root.querySelector(".MuiCardMedia-media");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

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

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteAdStart(documentID));
  };

  const VideoMedia = (
    <CardMedia
      component="video"
      className={classes.media}
      loop
      image={adLink}
      title={adTitle}
      onMouseOver={(e) => e.target.play()}
      onMouseOut={(e) => e.target.pause()}
    />
  );

  const ImgMedia = (
    <CardMedia
      component="img"
      className={classes.media}
      image={ComingSoonImg}
      title={adTitle}
    />
  );

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleMediaClick}>
        {adLink ? VideoMedia : ImgMedia}
        <CardHeader title={adTitle} subheader={date} />
      </CardActionArea>

      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {adDesc}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button startIcon={<Favorite />} onClick={handleLikeClick}>
          <Typography>{like}</Typography>
        </Button>

        <Button startIcon={<InsertComment />} onClick={handleExpandClick}>
          <Typography>{comments.length}</Typography>
        </Button>

        <Button startIcon={<Delete />} onClick={handleDeleteClick}>
          <Typography>Delete</Typography>
        </Button>

        <Button variant="contained" color="primary" className={classes.url}>
          <Typography variant="h5">
            <Link
              href={adUrl}
              target="_blank"
              underline="none"
              rel="noopener noreferrer"
            >
              Go
            </Link>
          </Typography>
        </Button>
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
