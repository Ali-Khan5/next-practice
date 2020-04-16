import Navbar from "./navbar";
import Head from "next/head";
import Link from "next/link";
const DynamicLinking = props => {
  return (

    <Link href={`/Post?title=${props.title}`}>
      {props.text}
    </Link>

  );
};
const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
    {/* dynamic routing  */}
    <br/>
    <div className="container">
      <h4>check out links below</h4>
      <ul>
        <li className="list-group-item">
          <DynamicLinking title={'woah this is the first title '} text={'hello world'} />
        </li>
        <li className="list-group-item">
          <DynamicLinking title={'Welcome to the second title '} text={'this is a second link'} />
        </li>
      </ul>
    </div>

  </div>
);
export default Layout;
