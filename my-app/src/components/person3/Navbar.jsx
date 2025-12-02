import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/courses">
          Courses
        </Button>
        <Button color="inherit" component={Link} to="/quiz">
          Quiz
        </Button>
        <Button color="inherit" component={Link} to="/assignments">
          Assignments
        </Button>
        <Button color="inherit" component={Link} to="/notes">
          Notes
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
