import Head from 'next/head';
import Home from './home';

export default function Home() {
    return (
        <>
            <Head children={undefined}></Head>
            <Home />
        </>
    );
}
