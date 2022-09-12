import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar component={"nav"}>
      <Container maxWidth="lg">
        <Toolbar sx={{ pl: "0px" }}>
          <Typography variant="h4">Blog fullstack</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
