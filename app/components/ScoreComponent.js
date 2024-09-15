import React from 'react'
import styles from '../components/scoreComponent.module.css'
import Image from 'next/image';


const ScoreComponent = ({item: {category, score, icon}, className, fontColour }) => {
  return (
    <div className={styles[className]}>
      <div className={styles.iconContainer}>
      <Image src={icon} alt={category} width={25} height={25}/>
      </div>
      <div className={styles[fontColour]}>{category}</div>
      <div className={styles.scoreContainer}>
  <b>{score}</b><p className={styles.hundred}>&nbsp;/ 100</p>
</div>
    </div>
  )
}

export default ScoreComponent

