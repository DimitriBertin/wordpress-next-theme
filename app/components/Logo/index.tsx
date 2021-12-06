import style from './style.module.scss'
import Link from 'next/link'
export default function Logo() {
  return (
    <Link href="/">
      <a className={style.block}>
        <span className={style.big}>Next</span>
        <span className={style.small}>with love</span>
      </a>
    </Link>
  )
}