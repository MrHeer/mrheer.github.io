import React, { FC } from "react";
import { Grid } from "components";

const Footer: FC = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

export default Footer;
