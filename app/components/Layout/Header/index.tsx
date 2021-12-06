import { useState } from 'react'
import { Logo } from '../..'
import style from './style.module.scss'

export default function Header() {
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
          <li><a href="#">Menu item</a></li>
          <li><a href="#">Menu item</a></li>
          <li><a href="#">Menu item</a></li>
          <li><a href="#">Menu item</a></li>
          <li><a href="#">Menu item</a></li>
        </ul>
      </div>
    </header>
  )
}