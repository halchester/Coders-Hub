import { Button } from "@material-ui/core";
import React from "react";
import data from "../data";

function OverallTags() {
  const tags = data.map((user) => {
    return user.tags;
  });

  return (
    <div>
      {/* <>{console.log(tags)}</> */}
      {tags.map((tagg) => {
        return tagg.map((tag) => {
          return (
            <Button
              size="small"
              variant="contained"
              color="primary"
              disableElevation
              style={{ margin: 5 }}
            >
              {tag}
              <b>{tag.count}</b>
            </Button>
          );
        });
      })}
    </div>
  );
}

export default OverallTags;
