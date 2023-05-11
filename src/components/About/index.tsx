import styles from './styles.module.scss'

export function About() {
  return (
    <aside className={styles.container}>
      <small>Hey folks</small>
      <h3>Welcome to the project!</h3>

      <p>
        <b>Required</b> is intended to be a simple user authentication
        application, where anyone can register using e-mail and password, and
        later login.
      </p>

      <div>
        <header>
          This project is more technical in nature. My intention when developing
          it was to validate, learn and consolidate some concepts, such as:
        </header>

        <ul>
          <li>
            Use of SOLID principles and Clean Architecture principles to build
            Restful APIs with Node;
          </li>
          <li>
            Consolidate a good standard structure for creating Restful APIs with
            Node;
          </li>
          <li>
            Consolidating my knowledge about unit and integration tests in Node
            Restful APIs;
          </li>
          <li>
            Learn a little more about Docker and Docker Compose, as well as
            their best practices;
          </li>
          <li>
            Consolidate my knowledge of deploying back-end services in Node and
            databases using Railway;
          </li>
          <li>
            To exercise the use of the development model brought by Next in
            version 13 (app folder);
          </li>
          <li>
            Consolidate my knowledge in building localized sites and
            applications for various languages;
          </li>
          <li>
            Consolidate a good way to persist user authentication on the server
            side.
          </li>
        </ul>
      </div>
    </aside>
  )
}
