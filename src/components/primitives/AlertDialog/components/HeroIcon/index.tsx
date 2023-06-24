import styles from './styles.module.scss'

export type DialogHeroIconOptions =
  | 'ph-wifi-slash'
  | 'ph-warning-circle'
  | 'ph-prohibit'
  | 'ph-clock-countdown'

type Props = {
  icon?: DialogHeroIconOptions
}

export function DialogHeroIcon({ icon = 'ph-warning-circle' }: Props) {
  return (
    <div className={styles.container}>
      <i className={`ph ${icon}`}></i>
    </div>
  )
}
