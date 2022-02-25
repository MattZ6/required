import { styled } from "@styles/stitches.config"

import { Title } from "@components/Title";
import { Text } from "@components/Text";
import { useRouter } from "next/router";
import Link from "next/link";
import { LinkHTMLAttributes } from "react";
import { BackButton } from "./components";

import { HeaderStyles as Styles } from './styles';

type PageHeaderProps = {
  title: string;
  description: string;
  backLinkUrl?: string;
}

export function PageHeader({ title, description, backLinkUrl }: PageHeaderProps) {
  return (
    <Styles.Container>
      <Styles.ButtonContainer>
        { backLinkUrl && <BackButton to={backLinkUrl} /> }
      </Styles.ButtonContainer>

      <Title as="h4">{title}</Title>
      <Text as="p">{description}</Text>
    </Styles.Container>
  );
}
