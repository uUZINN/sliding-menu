import React, { useRef } from 'react'
import styles from '../../assets/scss/menu.module.scss';
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../../assets/js/animation.js';
import gsap from 'gsap';

// MenuLink 컴포넌트는 data와 index props를 받아와서 사용합니다. 
// data에는 메뉴 링크에 대한 정보가 들어 있고, index는 메뉴의 인덱스를 가리킵니다.
const MenuLink = ({ data, index }) => {
// Menu 배열에 있는 data
  const { title, description, images } = data;

// GSAP 라이브러리를 사용하여 요소들을 제어할 때 사용
  const outer = useRef(null);
  const inner = useRef(null);

  //마우스 오버, 리브 옆으로 흘러가는 애니메이션 gsap
  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
   //if 마우스가 요소의 상/하 절반을 기준으로 이동하면, 
    if (e.clientY < bounds.top + bounds.height / 2) {
      //각각의 요소를 위/아래로 애니메이션
      gsap.set(outer.current, { top: '-100%' });
      gsap.set(inner.current, { top: '100%' });
    } else {
      gsap.set(outer.current, { top: '100%' });
      gsap.set(inner.current, { top: '-100%' });
    }
    gsap.to(outer.current, { top: '0%', duration: 0.3 });
    gsap.to(inner.current, { top: '0%', duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: '-100%', duration: 0.3 });
      gsap.to(inner.current, { top: '100%', duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: '100%', duration: 0.3 });
      gsap.to(inner.current, { top: '-100%', duration: 0.3 });
    }
  };


  return (
    <motion.div
      onMouseEnter={(e) => manageMouseEnter(e)}
      onMouseLeave={(e) => manageMouseLeave(e)}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <a href="/">{title}</a>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
            {/* [...Array(2)]길이가 2인 배열을 생성합니다. 이 배열은 [undefined, undefined]와 같은 형태 */}
            {/* _는 현재 요소 : 사용하지 않음 */}
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <img src={`${images[0]}`} fill alt="" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <img src={`${images[1]}`} fill alt="" />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default MenuLink