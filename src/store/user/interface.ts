export interface UserInfoProps {
    isLogin: boolean;
    userId: number | null;
    nickname: string;
    email: string;
    company?: string;
    type: string;
    token: string;
}
