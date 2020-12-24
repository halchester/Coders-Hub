import React from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";

function User({ name, website, github, emoji, info, phone, laptop, tags }) {
  const profilePic = `https://unavatar.now.sh/github/${github}`;
  const githubProfile = `https://github.com/${github}`;

  const renderLaptop = (name) => {
    switch (name) {
      case "mac":
        return (
          <img src="https://img.icons8.com/bubbles/50/000000/mac-logo.png" />
        );
      case "linux":
        return <img src="https://img.icons8.com/color/48/000000/linux.png" />;
      case "window":
        return (
          <img src="https://img.icons8.com/doodle/48/000000/windows8.png" />
        );
      default:
        return null;
    }
  };

  const renderPhone = (name) => {
    switch (name) {
      case "iphone":
        return (
          <img src="https://img.icons8.com/officel/48/000000/iphone.png" />
        );
      case "andriod":
        return (
          <img src="https://img.icons8.com/fluent/48/000000/android-os.png" />
        );
      default:
        return null;
    }
  };

  return (
    <Paper 
      style={{
        padding: "0.5rem",
        textAlign: "center",
        marginTop: "0.5rem",
        maxWidth : '100%',
      }}
    >
      <Box
        className="header__container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        <div className="header__image__container" style={{ padding: 10 }}>
          <img
            src={profilePic}
            className="header__image"
            alt=""
            style={{
              width: 60,
              borderRadius: "100%",
              background:
                "linear-gradient(145deg, #070707, #20253f) !important",
              boxShadow:
                "3px 3px 7px #adb1c85b, -5px -5px 10px #8d8f9b36 !important",
              alignItems: "flex-start",
              display: "flex",
            }}
          />
        </div>
        <div
          className="header__name__container"
          style={{ marginTop: 10}}
        >
          <Typography variant="h6">
            {name} {emoji}
          </Typography>
          <a
            href={website}
            style={{ textDecoration: "none", color: "cornflowerblue" }}
          >
            <Typography variant="body1">{website}</Typography>
          </a>
        </div>
      </Box>

      <Box className="body__container">
        <div className="body__info__container">
          <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
            {info}
          </Typography>
          {tags.map((tag) => {
            return (
              <Button
                size="small"
                variant="contained"
                color="primary"
                disableElevation
                style={{ margin: 3 }}
              >
                {tag}
              </Button>
            );
          })}
        </div>
      </Box>

      <Paper style={{ background: "#3d3d3d" }}>
        <Box
          className="footer__container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 5,
            marginTop: 10,
          }}
        >
          <div className="footer__laptop__container">
            {renderLaptop(laptop)}
          </div>
          <div className="footer__phone__container">{renderPhone(phone)}</div>
          <div
            className="footer__github__container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>
              <a
                href={githubProfile}
                style={{ textDecoration: "none", color: "white" }}
              >
                @{github}
              </a>
            </Typography>
          </div>
        </Box>
      </Paper>
    </Paper>
  );
}

export default User;
