/**
 * @file _app Component for Next.js
 * @author Logan Prunty
 * @see {@link App}
 */

// Stylesheets
import "tailwindcss/tailwind.css"
import "../styles/globals.css"

// Types
import type { AppProps } from "next/app"

/**
 * Renders all pages for the Client
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 * @requires next/app.AppProps
 * @param {AppProps} Component JSX Element
 * @param {AppProps} pageProps Component Props
 * @returns {JSX.Element} Next.js Page
 */
const App = ( { Component, pageProps }: AppProps ): JSX.Element =>
  <Component {...pageProps} />

export default App
