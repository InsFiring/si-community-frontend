import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
// import { Orbitron } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Container from '../layout/Container/index';
import { NotoB, NotoM, NotoR, RobotoB, RobotoM, RobotoR } from '../styles/font';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

export const cls = (...classnames: string[]) => {
    return classnames.join(' ');
};

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 1,
                        retryDelay: 0,
                        staleTime: 60 * 1000,
                    },
                },
            }),
    );

    return (
        <>
            <Head>
                <title>SI Community</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <RecoilRoot>
                        <ThemeProvider theme={theme}>
                            <GlobalStyle />
                            <Container
                                className={cls(
                                    NotoR.className,
                                    NotoM.className,
                                    NotoB.className,
                                    RobotoR.className,
                                    RobotoM.className,
                                    RobotoB.className,
                                )}
                            >
                                <Component {...pageProps} />
                            </Container>
                        </ThemeProvider>
                    </RecoilRoot>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
