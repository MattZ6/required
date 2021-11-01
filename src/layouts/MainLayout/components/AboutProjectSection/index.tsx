import Image from 'next/image';

import styles from './styles.module.scss';

export function AboutProjectSection() {
  return (
    <section className={styles.container}>
      <p>This project was developed as an exercise app to test ways to authenticate a user and keep them authenticated.</p>

      <div className={styles.authorContainer}>
        <small>Created by</small>

        <div className={styles.author}>
          <Image
            className={styles.authorImage}
            width={56}
            height={56}
            src="https://github.com/mattz6.png"
            alt="Matheus Zanin"
          />

          <div>
            <strong>Matheus Zanin</strong>
            <span>Software developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
