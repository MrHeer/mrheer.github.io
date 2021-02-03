import React from "react";
import { Container, Grid, Layout } from "components";
import { Card } from "blocks";
import cardData from "cardData";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Container>
          <Grid container justify="center" spacing={2}>
            {cardData.map((data) => (
              <Grid item {...data.gridProps}>
                <Card data={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
