import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../..'
import style from './style.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

type HeaderProps = {
  menu: {
    ID: number
    url: string
    title: string
    slug: string
  }[]
}

export default function Header({ menu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  return (
    <header className={style.block} >
      <Logo />
      <div className={style.menu}>
        <button type="button" className={style.button} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Ouvrir le menu</span>
        </button>
        <ul className={style.flex}>
          {menu && menu.map((item) => (
            <li key={item.ID}>
              <Link href={item.url}>
                <a 
                  className={
                    clsx((
                      (item.url === `${process.env.BASE_URI}${router.asPath}`) ||
                      (item.url === `${process.env.BASE_URI}${router.asPath}/`)) && 
                      style.isActive
                    )
                }>
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}