import Head from 'next/head';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

export default function Home() {
    return (
        <>
            <Head children={undefined}></Head>
            <SignIn />
            <SignUp />
        </>
    );
}
