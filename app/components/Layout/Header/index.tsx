import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '../..'
import style from './style.module.scss'

type HeaderProps = {
  menu: {
    ID: number
    url: string
    title: string
  }[]
}

export default function Header({ menu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}