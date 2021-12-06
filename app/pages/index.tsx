import type { ReactElement } from 'react'
import style from '/styles/home.module.scss'
import Layout from './../components/Layout/'

export default function Home() {
  return (
    <div className={style.block}>Hello</div>
  )
}

// Inject Layout
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}