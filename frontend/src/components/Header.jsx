import React from 'react'
import adminAvatar from '../images/account_circle_FILL1.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__info">
        <h2 className="header__title">ЧКК Перевал</h2>
        <img src={adminAvatar} alt="аватарка админа" className="header__admin-avatar" />
      </div>
      <div className="header__navigation">
        <ul className="header__items">
          <li className="header__item">Admin
            <ul className="header__list">
              <li className="header__subitem">page</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header