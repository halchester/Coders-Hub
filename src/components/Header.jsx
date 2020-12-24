import { Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div className="header">
      <Typography variant="h3" align="center">
        Coders
      </Typography>
      <div
        className="hub__container"
        style={{
          boder: "1px solid black",
          width: "fit-content",
          padding: 5,
          margin: "0 auto",
          marginTop: 5,
          background: "black",
          borderRadius: "10%",
        }}
      >
        <Typography variant="h4" align="center" color="primary">
          Hub
        </Typography>
      </div>
    </div>
  );
}

export default Header;
