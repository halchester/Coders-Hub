import { Button } from "@material-ui/core";
import React from "react";
import data from "../data";
import * as utils from "./stats";

const OverallTags = () => {
  // const tags = data.map((user) => {
  //   return user.tags;
  // });

  const tags = utils
    .tags()
    .map((resultTags) => `${resultTags.name} - ${resultTags.count}`);

  return (
    <div style={{ marginTop: 10, marginBottom: 5 }}>
      {tags.map((tag) => {
        return (
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};;

export default OverallTags;
