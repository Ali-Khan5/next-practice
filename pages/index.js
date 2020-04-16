import Layout from "../Components/Layout";
import fetch from "isomorphic-unfetch";
import Prices from "../Components/Prices.js";
import Head from "next/head"


const Index = props => (
  <div>
        <Head>
                <title>homepage</title>
        </Head>
    <Layout>
      <h1>weclome to our dummy application</h1>
      <p>check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
       
      <br />
      <br />
    </Layout>
  </div>
);
// calls in  an bitcoin api which provides us bitcoin rate in usd,eur,gbp
Index.getInitialProps = async function() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await response.json();
  return {
    bpi: data.bpi
  };
};


export default Index;
