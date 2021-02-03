import React, { FC } from "react";
import { Container, Grid } from "components";

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Grid container direction="column">
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
