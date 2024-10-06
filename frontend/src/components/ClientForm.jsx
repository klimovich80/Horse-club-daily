import React from 'react'

const ClientForm = () => {
  return (
    <form className="client-form">
      <h2 className="client-form__title">Добавить клиента</h2>
      <input className="client-form__input client-form__avatar" type="url" />
      <input className="client-form__input client-form__first-name" type="text" />
      <input className="client-form__input client-form__last-name" type="text" />
      <input className="client-form__input client-form__phone" type="number" />
      <input className="client-form__input client-form__source" type="text" />
      <input className="client-form__input client-form__age" type="number" />
      <input className="client-form__input client-form__child" type="checkbox" />
      <input className="client-form__input client-form__group" type="checkbox" />
      <input className="client-form__input client-form__vk" type="url" />
      <input className="client-form__input client-form__social" type="text" />
      <input className="client-form__input client-form__advanced" type="checkbox" />
      <input className="client-form__input client-form__first-time" type="checkbox" />
      <input className="client-form__input client-form__march" type="checkbox" />
      <input className="client-form__input client-form__trot" type="checkbox" />
      <input className="client-form__input client-form__gallop" type="checkbox" />
      <input className="client-form__input client-form__jump" type="checkbox" />
      <textarea className="client-form__input client-form__about"></textarea>
    </form>
  )
}

export default ClientForm