import type { ReactElement } from 'react'
import style from '/styles/page.module.scss'
import Layout from './../components/Layout/'

export default function Page({ data }) {
  return (
    <div className={style.block}>
      <h1>{data.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{__html: data.content.rendered}} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_ROOT}/wp/v2/pages`)
  const data = await res.json()
  let paths = []
  if (data) {
    paths = data.map((page) => {
      return {
        params: {
          slug: page.slug,
        }
      }
    })
  }

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const resPages = await fetch(`${process.env.API_ROOT}/wp/v2/pages`)
  const dataPages = await resPages.json()

  const { id } = dataPages.find((page) => page.slug === params.slug)
  const res = await fetch(`${process.env.API_ROOT}/wp/v2/pages/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}

// Inject Layout
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}