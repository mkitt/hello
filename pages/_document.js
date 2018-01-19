// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <style jsx global>{`
            *, *::before, *::after { box-sizing: border-box; }
            html {
              font: normal 400 100% / 1.5 -apple-system, sans-serif;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            body { position: relative; margin: 0; background-color: #fff; }
            ::selection { color: #fff; text-shadow: none; background: #000; }
            h1, h2, h3, h4, h5, h6 { margin: 0; line-height: 1.25; }
          `}
          </style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
