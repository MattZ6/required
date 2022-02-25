import { styled } from "@styles/stitches.config";
import { CenterContent } from "@components/CenterContent";

export namespace MainLayoutStyles {
  export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    minHeight: '100vh',
  });

  export const Content = styled(CenterContent, {
    flex: 1,
    display: 'flex',
  });

  export const Page = styled('section', {
    flex: 1,
  });
}
