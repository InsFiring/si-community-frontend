import Head from 'next/head';
import Login from './Login/index';

export default function Home() {
    return (
        <>
            <Head children={undefined}></Head>
            <Login />
        </>
    );
}
