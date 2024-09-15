import styles from '../public/styles/resultsSummaryStyles.module.css'
import ScoreComponent from './components/ScoreComponent';
import data from '../data/data'

const generateClasses = (item) => {
  switch(item.category) {
   case "Reaction":
    return 'reactionContainer'
    case "Memory":
    return "memoryContainer"
    case "Verbal":
    return "verbalContainer"
    case "Visual":
    return "visualContainer"
  }
}

const generateFontColor = (item) => {
  switch(item.category) {
   case "Reaction":
    return 'categoryReactionText'
    case "Memory":
    return "categoryMemoryText"
    case "Verbal":
    return "categoryVerbalText"
    case "Visual":
    return "categoryVisualText"
  }
}

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
        <p className={styles.resultsComparisonText}>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.scoreContainer}>
        <p className={styles.summaryHeader}>Summary</p>
          {data.map(item => (
            <ScoreComponent key={item.category} item={item} className={generateClasses(item)} fontColour={generateFontColor(item)} />
          ))}
          </div>
          <button className={styles.continueButton}>Continue</button>
      </div>
      
      </div>
    </div>
  );
}
