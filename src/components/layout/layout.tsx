import React, { FC } from "react";
import { Grid } from "components";

const Layout: FC = ({ children }) => {
  return (
    <Grid container direction="column">
      {children}
    </Grid>
  );
};

export default Layout;
