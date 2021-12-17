import Link from "next/link"
import { Logo, Social } from "../.."
import style from './style.module.scss'

type Props = {
  options: {
    copyright: string
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
    whatsapp?: string
  },
  footerMenu: {
    ID: number
    url: string
    title: string
  }[]
}

export default function Footer({ footerMenu, options }: Props) {
  return (
    <footer className={style.block}>
      <div className={style.container}>
        <div className={style.left}>
          <Logo />
          <Social social={options} />
        </div>
        <ul className={style.menu}>
          {footerMenu && footerMenu.map((item) => (
            <li key={item.ID}>
              <Link href={item.url}>
                  {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.copyright}>
          {options?.copyright}
        </div>
      </div>
    </footer>
  )
}