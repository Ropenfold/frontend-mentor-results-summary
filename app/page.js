import styles from '../public/styles/resultsSummaryStyles.module.css'
import ScoreComponent from './components/ScoreComponent';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backgroundContainer}>
      <div className={styles.resultContainer}>
        <p className={styles.resultsHeader}>Your Result</p>
        <div className={styles.circle}>
        <p className={styles.resultsScore}>76</p>
        <p className={styles.resultsTotalScore}>of 100</p>
        </div>
        <p className={styles.resultsRating}>Great</p>
        <p className={styles.resultsComparisonText}>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.scoreContainer}><ScoreComponent /></div>
      </div>
      <button className={styles.continueButton}></button>
      </div>
    </div>
  );
}
