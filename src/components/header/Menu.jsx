import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../assets/scss/menu.module.scss';

import menu_img01 from '../../assets/img/menu_img01.jpg';
import menu_img02 from '../../assets/img/menu_img02.jpg';
import menu_img03 from '../../assets/img/menu_img03.jpg';
import menu_img04 from '../../assets/img/menu_img04.jpg';
import menu_img05 from '../../assets/img/menu_img05.jpg';
import menu_img06 from '../../assets/img/menu_img06.jpg';
import MenuLink from './MenuLink';
import { mountAnim, opacity, slideLeft } from '../../assets/js/animation.js';
import { Link } from 'react-router-dom';

const menu = [
    {
      title: "Projects",
      description: "To See Everything",
      images: [menu_img01, menu_img02]
    },
    {
      title: "Agence",
      description: "To Learn Everything",
      images: [menu_img03, menu_img04]
    },
    {
      title: "Contact",
      description: "To Send a FAX",
      images: [menu_img05, menu_img06]
    }
  ]

const Menu = ({closeMenu}) => {
  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

        <div className={styles.header}>
            <motion.svg
                variants={slideLeft}
                {...mountAnim}
                onClick={() => { closeMenu() }}
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L67 67" stroke="white" />
                <path d="M66.5 1L0.999997 66.5" stroke="white" />
            </motion.svg>
        </div>

        <div className={styles.body}>
            {
                menu.map((el, index) => {
                    return <MenuLink data={el} index={index} key={index} />
                })
            }
        </div>

        <motion.div
            variants={opacity}
            {...mountAnim}
            custom={0.5}
            className={styles.footer}
        >
            <Link to="#">HI</Link>
            <Link to="#">HI</Link>
            <Link to="#">HI</Link>
            <Link to="#">HI</Link>
        </motion.div>

    </motion.div>
  )
}

export default Menu