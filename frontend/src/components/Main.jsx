import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Horses from "./Horses"
import Clients from "./Clients"
import Sidebar from "./Sidebar"

const Main = () => {
  const borderStyle = '1px solid #eee';
  return (
    <section className='main'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Main page</h1>
            <iframe
              title="PerevelIframe"
              src="https://calendar.yandex.ru/embed/month?&layer_ids=29225196&tz_id=Europe/Simferopol&layer_names=ЧКК Перевал"
              width="800"
              height="450"
              frameborder="0"
              style={{border: borderStyle}}
            >

              </iframe>
          </>
        } />
        <Route path="/clients" element={
          <>
            <Clients/>
            <Link to={-1}>Back</Link>
          </>
        } />
        <Route path="/horses" element={
          <>
            <Horses />
            <Link to={-1}>Back</Link>
          </>
        } />
      </Routes>
    </section>
  )
}

export default Main