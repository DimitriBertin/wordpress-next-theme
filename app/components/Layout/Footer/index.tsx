import { Logo } from "../.."
import style from './style.module.scss'

export default function Footer() {
  return (
    <footer className={style.block}>
      <div className={style.container}>
        <Logo />
        <ul className={style.menu}>
          <li><a href="#">Menu footer item</a></li>
          <li><a href="#">Menu footer item</a></li>
          <li><a href="#">Menu footer item</a></li>
          <li><a href="#">Menu footer item</a></li>
        </ul>
        <div className={style.copyright}>
          Next with love - from 2022
        </div>
      </div>
    </footer>
  )
}