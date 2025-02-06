import React from 'react'
import MenuBanner from '../navPages/Menupage/MenuBanner'
import Email from "../navPages/Homepage/Email"
import List from '../navPages/Menupage/list'
import Lunch from '../navPages/Menupage/Lunch'
import Dinner from '../navPages/Menupage/dinner'

function Menus() {
  return (
    <div>
        <MenuBanner />
        <List />
        <Lunch />
        <Dinner />
        <Email />
    </div>
  )
}

export default Menus