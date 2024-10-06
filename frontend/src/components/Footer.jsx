import React from 'react'
import { Link } from 'react-router-dom'
import logoVK from '../images/VK_Logo.svg';
import { COMPANY__SOCIAL_VK } from '../itils/config';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__items">
          <li className="footer__item">
            <Link className="footer__link" to={COMPANY__SOCIAL_VK} target="_blank">
              <img src={logoVK} alt="ВК" className="footer__social-icon" />
            </Link>
          </li>
        </ul>
        <h2 className="footer__title">&copy;Pavel Klimovich 2023</h2>
      </div>

    </div>
  )
}

export default Footer