import { Noto_Sans_KR, Roboto } from 'next/font/google';

const NotoR = Noto_Sans_KR({
    preload: false,
    weight: '400',
    variable: '--Noto-R',
});

const NotoM = Noto_Sans_KR({
    preload: false,
    weight: '500',
    variable: '--Noto-M',
});

const NotoB = Noto_Sans_KR({
    preload: false,
    weight: '700',
    variable: '--Noto-B',
});

const RobotoR = Roboto({
    subsets: ['latin'],
    weight: '100',
    variable: '--Roboto-R',
});

const RobotoM = Roboto({
    subsets: ['latin'],
    weight: '300',
    variable: '--Roboto-M',
});

const RobotoB = Roboto({
    subsets: ['latin'],
    weight: '500',
    variable: '--Roboto-B',
});

export { NotoR, NotoM, NotoB, RobotoR, RobotoM, RobotoB };
