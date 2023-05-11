import Link from 'next/link'

import styles from './styles.module.scss'

type Props = {
  title: string
  description: string
  backLinkURL?: string
}

export function PageHeader({ title, description, backLinkURL }: Props) {
  return (
    <div className={styles.container}>
      {backLinkURL && <Link href={backLinkURL}>Back</Link>}

      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
