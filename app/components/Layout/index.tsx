import Header from './Header'
import Footer from './Footer'
import { ChildrenProps } from '../../global.types'

export default function Layoyt({ children }: ChildrenProps) {
  return (
    <div className="app">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}