import { Typography } from "@material-ui/core";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Typography variant="h3" align="center">
        Coders
      </Typography>
      <div className="hub__container">
        <Typography variant="h4" align="center" color="primary">
          Hub
        </Typography>
      </div>
    </div>
  );
}

export default Header;
