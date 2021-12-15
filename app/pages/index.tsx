import type { ReactElement } from 'react'
import style from '/styles/home.module.scss'
import Layout from './../components/Layout/'

export default function Home({ data }) {
  return (
    <div className={style.block}>
      <div dangerouslySetInnerHTML={{ __html: data.post_content }} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_NEXT}/home`)
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

// Inject Layout
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}