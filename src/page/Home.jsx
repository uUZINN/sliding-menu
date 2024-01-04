import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Burger from '../components/header/Burger'
import Stairs from '../components/header/Stairs';
import Menu from '../components/header/Menu';

const Home = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
        <Burger openMenu={() => {setMenuIsOpen(true)}} />

        <AnimatePresence mode='wait'>
          {
            menuIsOpen && <>
              <Stairs />
              <Menu closeMenu={() => {setMenuIsOpen(false)}} />
            </>
          }
        </AnimatePresence>
    </>
  )
}

export default Home