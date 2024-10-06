import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import { COMPANY__TITLE } from '../itils/config'
import { cn as bem } from '@bem-react/classname';

const cn=bem('sidebar')

const Sidebar = () => {
  return (
    <aside className={cn()}>
      <div className={cn("logo")}>
        <img src={logo} alt="аватар" className={cn('logo__avatar')}/>
        <h2 className={cn("logo__title")}>{COMPANY__TITLE}</h2>
      </div>
      <div className={cn("menu")}>
        <ul className={cn("items")}>
          <li className={cn("item")}>
            <Link className={cn('link','navigation__link')} to="/clients">
              <h3>Clients</h3>
            </Link>
          </li>
          <li className={cn("item")}>
            <Link className={cn('link','navigation__link')}to="/horses">
              <h3>Horses</h3>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar