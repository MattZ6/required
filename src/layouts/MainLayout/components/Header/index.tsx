import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <h2>Authentication App</h2>
      </nav>
    </header>
  );
}
