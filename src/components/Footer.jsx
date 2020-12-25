import { Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        margin: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="footer__container1">
        <Typography variant="h4">
          Add yourself on&nbsp;
          <a
            href="https://github.com/halchester/Coders-Hub"
            style={{ textDecoration: "none", color: "cornflowerblue" }}
          >
            Github
          </a>
        </Typography>
      </div>
      <div className="footer__container2">
        <Typography variant="h5" style={{}}>
          Inspired by&nbsp;
          <a
            href="https://uses.tech/"
            style={{ textDecoration: "none", color: "cornflowerblue" }}
          >
            Awesome uses
          </a>
        </Typography>
      </div>
      {/* <Typography
        variant="h4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        Add yourself on
        <a
          href="https://github.com/halchester/Coders-Hub"
          style={{ textDecoration: "none", color: "cornflowerblue" }}
        >
          Github
        </a>
      </Typography>
      <Typography
        variant="h5"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        Inspired by{" "}
        <a
          href="https://uses.tech/"
          style={{ textDecoration: "none", color: "cornflowerblue" }}
          target="_blank"
        >
          Awesome uses
        </a>
      </Typography> */}
    </div>
  );
}

export default Footer;
