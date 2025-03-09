import { AxiosRequestConfig } from "axios";

export interface RetryRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}


export interface AuthResponse {
    access: string
}