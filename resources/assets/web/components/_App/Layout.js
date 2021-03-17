import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ"
        />
        <meta
          name="og:title"
          property="og:title"
          content="БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ"
        ></meta>
        <meta
          name="twitter:card"
          content="БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ"
        ></meta>
        <link rel="canonical" href="http://www.edu.mn/"></link>
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </React.Fragment>
  );
};

export default Layout;
