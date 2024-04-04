import nlwUniteLogo from '../assets/nlw-unite-logo.svg'
import { Navlinks } from './nav-links'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteLogo} />

      <nav className='flex items-center gap-5'>
        <Navlinks href="/eventos">Eventos</Navlinks>
        <Navlinks href="/participantes"> Participantes </Navlinks>
      </nav>

    </div>
  )
}