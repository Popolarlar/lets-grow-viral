import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu, Email, GitHub, LinkedIn } from "@material-ui/icons";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <a href="/" style={{ flexGrow: 1 }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            GrowViral
          </Typography>
        </a>
        <a href="mailto:ming.jin.yeh@gmail.com">
          <IconButton aria-label="mail">
            <Email />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/ming-jin-yeh/"
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label="linkedIn">
            <LinkedIn />
          </IconButton>
        </a>
        <a href="https://github.com/Popolarlar" target="_blank" rel="noopener">
          <IconButton aria-label="github">
            <GitHub />
          </IconButton>
        </a>
          <Button aria-label="Add">
            Add
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
