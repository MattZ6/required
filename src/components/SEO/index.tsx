import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useTranslation } from '@hooks/useTranslation';

import { theme, darkTheme } from '@styles/stitches.config';

type Props = {
  title?: string;
  description?: string;
};

export function SEO({ title, description }: Props) {
  const router = useRouter();
  const { theme: currentTheme } = useTheme();
  const t = useTranslation('app');

  const suffix = t('title');

  const pageTitle = title ? `${title} — ${suffix}` : suffix;

  const color =
    currentTheme === 'dark'
      ? darkTheme.colors.appBackground.value
      : theme.colors.appBackground.value;

  const pageLocale = String(router.locale ?? 'pt-BR').replace('-', '_');

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content={color} />
      <meta name="msapplication-TileColor" content={color} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={pageLocale} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      {/* <meta property="og:image" content={pageImage} /> */}
      {/* <meta property="og:image:secure_url" content={pageImage} /> */}
      {/* <meta property="og:image:alt" content="Thumbnail" /> */}
      {/* <meta property="og:image:type" content="image/png" /> */}
      {/* <meta property="og:image:width" content="1200" /> */}
      {/* <meta property="og:image:height" content="630" /> */}

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="" /> */}
      {/* <meta name="twitter:creator" content="" /> */}
      {/* <meta name="twitter:image" content={pageImage} /> */}
      {/* <meta name="twitter:image:src" content={pageImage} /> */}
      {/* <meta name="twitter:image:alt" content="Thumbnail" /> */}
      {/* <meta name="twitter:image:width" content="1200" /> */}
      {/* <meta name="twitter:image:height" content="620" /> */}
    </Head>
  );
}
