export interface SignUpDTO {
    email: string;
    id: string;
    password: string;
}

export interface SignInDTO {
    email: string;
    current_password: string;
}
