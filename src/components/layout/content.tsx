import React, { FC } from "react";
import { Grid } from "components";

const Content: FC = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

export default Content;
