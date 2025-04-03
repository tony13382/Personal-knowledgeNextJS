import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="我的知識推薦獲取來源" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
