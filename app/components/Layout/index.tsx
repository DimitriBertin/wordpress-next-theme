import Header from './Header'
import Footer from './Footer'
import { ChildrenProps } from '../../global.types'
import useSWR from 'swr'
import Head from 'next/head'

const fetcher = url => fetch(url).then(r => r.json())

export default function Layout({ children }: ChildrenProps) {
  const { data, error } = useSWR(`${process.env.API_NEXT}/partial`, fetcher)

  return (
    <div className="app">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;800&display=swap" rel="stylesheet" />
      </Head>
      <Header menu={data.menu} />
      <main className="main">
        {children}
      </main>
      <Footer {...data} />
    </div>
  )
}