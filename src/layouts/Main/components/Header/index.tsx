import { ThemeSwitcher } from "@components/ThemeSwitcher";
import { styled } from "@styles/stitches.config";

const StyledHeader = styled('header', {});

export function Header() {
  return (
    <StyledHeader>
      Here goes the header

      <ThemeSwitcher />
    </StyledHeader>
  );
}
