import React from 'react'
import Document, {  Head, Main, NextScript, Html } from 'next/document'

export default class MyDcument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <div>
        <Html>
          <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
         
          </Head>
          <body>
          <Main />
          <NextScript />
          
        </body>
        </Html>
      </div>
    )
  }
}
