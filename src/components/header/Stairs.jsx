import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../assets/scss/stairs.module.scss';
import { background, height, mountAnim } from '../../assets/js/animation';

const Stairs = () => {
  return (
    // 메뉴가 나타날때 계단식으로 보이는 효과 (5개로 칸을 나눠서 계단식으로 나오도록)
    // 이 코드는 Framer Motion을 사용하여 계단 모양의 애니메이션을 만들고 있습니다.
    // 각 계단의 모양과 배경에 애니메이션 효과를 적용하여 화면에 동적인 효과를 줄 것으로 보입니다.
    <motion.div className={styles.stairs}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={height}
            {...mountAnim}
            custom={4 - index} //계단의 위치
            className={styles.stair}
          ></motion.div>
        );
      })}
      <motion.div variants={background} {...mountAnim} className={styles.background}></motion.div>
    </motion.div>
  )
}

export default Stairs