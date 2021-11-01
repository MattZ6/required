import type { NextPage } from 'next'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={commonStyles.pageContainer}>
      <h1>Hello John</h1>

      <div className={styles.infoContainer}>
        <small>Name</small>
        <span>John Doe</span>
      </div>

      <div className={styles.infoContainer}>
        <small>Email</small>
        <span>john.doe@email.com</span>
      </div>
    </div>
  );
}

export default Home;
