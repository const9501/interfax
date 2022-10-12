import Header from "../../simples/header/Header";
import Form from "../form/Form";
import {FC, ReactNode} from "react";

interface ILayoutProps {
  children: ReactNode
}


const Layout: FC<ILayoutProps> = ({children}) => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Form/>
        {children}
      </main>
    </>
  );
};

export default Layout;