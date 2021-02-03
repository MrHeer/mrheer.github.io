import React, { FC } from "react";
import { Avatar as MDAvatar } from "@material-ui/core";
import { Grid } from "components";
import { IAvatarProps } from "./interface";

const Avatar: FC<IAvatarProps> = ({ name, ...restProps }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <MDAvatar {...restProps} />
      </Grid>
      <Grid item>{name}</Grid>
    </Grid>
  );
};

export default Avatar;
