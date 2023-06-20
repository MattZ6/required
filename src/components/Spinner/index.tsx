import styles from './styles.module.scss'

export function LoadingSpinner() {
  return (
    <svg className={styles.spinner} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  )
}
