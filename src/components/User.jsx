import React from "react";
import "./User.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

function User({ name, website, github, emoji, info, phone, laptop, tags }) {
  const profilePic = `https://unavatar.now.sh/github/${github}`;
  const githubProfile = `https://github.com/${github}`;
  const renderTags = (tags) => {
    let i,
      text = "";
    for (i = 0; i < tags.length; i++) {
      text += `<a class="ui label" style="margin-top: 5px;">${tags[i]}</a>`;
    }
    return text;
  };

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
    <Grid container spacing={2}>
      <Grid item xs={12} spacing={3}>
        <Paper
          style={{
            padding: "0.5rem",
            textAlign: "center",
            marginTop: "0.5rem",
          }}
        >
          <div className="header__container">
            <div className="header__image__container">
              <img src={profilePic} className="header__image" />
            </div>
            <div className="header__name__container">
              <Typography variant="h6">{name}</Typography>
              <a
                href={website}
                style={{ textDecoration: "none", color: "cornflowerblue" }}
              >
                <Typography variant="body1">{website}</Typography>
              </a>
            </div>
          </div>

          <div className="body__container">
            <div className="body__info__container">
              <Typography variant="subtitle1">{info}</Typography>
            </div>
          </div>

          <div className="footer__container"></div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default User;
