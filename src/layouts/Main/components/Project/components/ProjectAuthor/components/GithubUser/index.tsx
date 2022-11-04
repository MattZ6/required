import Link from 'next/link'

import { ProjectAuthorGithubUserStyles as Styles } from './styles'

const IMAGE_SIZE = 28

export function ProjectAuthorGithubUser() {
  return (
    <Link href="https://github.com/mattz6" passHref>
      <Styles.Container>
        <Styles.Avatar>
          <Styles.AvatarImage
            src={`https://avatars.githubusercontent.com/u/30813457?v=4&size=${IMAGE_SIZE}`}
            alt="Matt's profile picture"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </Styles.Avatar>

        <Styles.Name>Matheus Felipe Zanin</Styles.Name>
      </Styles.Container>
    </Link>
  )
}
