import React, { FC } from "react";
import { Grid } from "components";

const Header: FC = ({ children }) => {
  return <Grid item>{children}</Grid>;
};

export default Header;
