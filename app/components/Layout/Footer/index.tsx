import { Logo } from "../.."
import style from './style.module.scss'

type Props = {
  widget: {
    type: string
  },
  copyright: string
}

export default function Footer({ widget, copyright }: Props) {
  return (
    <footer className={style.block}>
      <div className={style.container}>
        <Logo />
        <ul className={style.menu}>
          {/* <li><a href="#">Menu footer item</a></li> */}
        </ul>
        <div className={style.copyright}>
          {copyright}
        </div>
      </div>
    </footer>
  )
}