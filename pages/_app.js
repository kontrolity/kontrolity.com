import '../src/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kontrolity - Future Ready Autonomous Intelligence</title>
        <meta name="description" content="Kontrolity transforms chaos into control with autonomous AI that observes, understands, and stabilizes your systems in real-time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kontrolity.com/" />
        <meta property="og:title" content="Kontrolity - Future Ready Autonomous Intelligence" />
        <meta property="og:description" content="Kontrolity transforms chaos into control with autonomous AI that observes, understands, and stabilizes your systems in real-time." />
        <meta property="og:image" content="https://kontrolity.com/kontrolitynew.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kontrolity.com/" />
        <meta property="twitter:title" content="Kontrolity - Future Ready Autonomous Intelligence" />
        <meta property="twitter:description" content="Kontrolity transforms chaos into control with autonomous AI that observes, understands, and stabilizes your systems in real-time." />
        <meta property="twitter:image" content="https://kontrolity.com/kontrolitynew.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
