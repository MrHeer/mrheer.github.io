import InternalLayout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

interface LayoutType extends React.FC {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
}

const Layout = InternalLayout as LayoutType;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export { Layout };
