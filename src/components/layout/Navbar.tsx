import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSelector from './LanguageSelector'
import useLanguage from '../../hooks/useLanguage'

type Props = {
  title?: string
}

const DEFAULT_TITLE: string = 'GPS-Tools'

const Navbar: React.FC<Props> = ({ title = DEFAULT_TITLE }) => {
  const { getMessage } = useLanguage()

  return (
    <nav className="navbar mb-12 shadow-lg base-300 text-base-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGlobe className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              {getMessage('home')}
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              {getMessage('about')}
            </Link>
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar