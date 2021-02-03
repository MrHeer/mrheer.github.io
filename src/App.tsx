import React from "react";
import { Layout } from "components";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
