export interface AuthRequestModel {
    email: string;
    password: string;
}

export interface AuthResponseModel {
    token: string;
    user: {
        id: number;
        first_name: string;
        last_name: string;
        role: string;
    };
}
