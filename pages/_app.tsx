import type { AppProps } from "next/app";

import Head from "next/head";
import { theme } from "../styles/theme";
import PageHeaderBar from "../src/PageHeaderBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { PageHeaderBarPlaceholder } from "../src/PlaceHolder";
import { RecoilRoot } from "recoil";
import NavigationBar from "../src/NavigationBar";
import { useRouter } from "next/router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const dontShowPageHeaderBarPath = [""];
  const shouldShowNavigationBarPath = ["/myChallenges/ongoing", "/"];

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SuperSquad</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          {!dontShowPageHeaderBarPath.includes(pathname) && (
            <>
              <PageHeaderBar />
              <PageHeaderBarPlaceholder />
            </>
          )}

          <Component {...pageProps} />
          {shouldShowNavigationBarPath.includes(pathname) && <NavigationBar />}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default CreateCosmosApp;
