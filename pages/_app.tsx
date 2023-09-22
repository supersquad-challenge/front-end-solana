import type { AppProps } from "next/app";

import Head from "next/head";
import { theme } from "../styles/theme";
import MainHeaderBar from "../src/MainHeaderBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MainHeaderBarPlaceholder } from "../src/PlaceHolder";
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

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const dontShowPageHeaderBarPath = [""];
  const shouldShowNavigationBarPath = ["/myChallenges/ongoing", "/"];
  const shouldShowNavigationBarPathStartsWith = ["/home/", "/myChallenges/"];

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
              <MainHeaderBar />
              <MainHeaderBarPlaceholder />
            </>
          )}

          <Component {...pageProps} />
          {/* <NavigationBar /> */}
          {shouldShowNavigationBarPath.includes(pathname) && <NavigationBar />}
          {shouldShowNavigationBarPathStartsWith.some((path) => {
            return pathname.startsWith(path);
          }) && <NavigationBar />}
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
