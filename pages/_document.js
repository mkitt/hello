// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; }
  html {
    font: normal 400 100% / 1.5 -apple-system, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body { position: relative; margin: 0; overflow-x: hidden; background-color: #fff; }
  ::selection { color: #fff; text-shadow: none; background: #000; }
  h1, h2, h3, h4, h5, h6 { margin: 0; line-height: 1.25; }
  a { color: inherit; background-color: transparent; -webkit-text-decoration-skip: objects; }
`.replace(/\n/g, '')

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <title>mkitt | hello</title>
        <Head>
          <style>{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
