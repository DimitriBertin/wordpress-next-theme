import { BsFacebook, BsTwitter, BsWhatsapp, BsYoutube, BsInstagram } from 'react-icons/bs'
import style from './style.module.scss'

type Props = {
  social: {
    facebook?: string
    twitter?: string
    youtube?: string
    instagram?: string
    whatsapp?: string
  }
}
export default function Social({ social }: Props) {

  return (
    <ul className={style.block}>
      {social?.facebook && <li><a href={social.facebook} rel="noreferrer" target="_blank"><BsFacebook /></a></li>}
      {social?.twitter && <li><a href={social.twitter} rel="noreferrer" target="_blank"><BsTwitter /></a></li>}
      {social?.instagram && <li><a href={social.instagram} rel="noreferrer" target="_blank"><BsInstagram /></a></li>}
      {social?.youtube && <li><a href={social.youtube} rel="noreferrer" target="_blank"><BsYoutube /></a></li>}
      {social?.whatsapp && <li><a href={social.whatsapp} rel="noreferrer" target="_blank"><BsWhatsapp /></a></li>}
    </ul>
  )
}