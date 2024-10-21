//axios 관련 util
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * R: Response
 * B: body
 */
export const makeGet =
    (client: AxiosInstance) =>
    <R>(uri: string, config?: AxiosRequestConfig) =>
    () =>
        client.get<R>(uri, config).then((r) => r.data);
export const makeDelete =
    (client: AxiosInstance) =>
    <R>(uri: string, config?: AxiosRequestConfig) =>
        client.delete<R>(uri, config).then((r) => r.data);
export const makePost =
    (client: AxiosInstance) =>
    <R>(uri: string, body?: unknown, config?: AxiosRequestConfig) =>
        client.post<R>(uri, body, config).then((r) => r.data);

export const makePut =
    (client: AxiosInstance) =>
    <B, R>(uri: string, body?: B, config?: AxiosRequestConfig): (() => Promise<R>) =>
    () =>
        client.put(uri, body, config).then((r) => r.data);

export const makePatch =
    (client: AxiosInstance) =>
    <B, R>(uri: string, body?: B, config?: AxiosRequestConfig): (() => Promise<R>) =>
    () =>
        client.patch(uri, body, config).then((r) => r.data);

export const makeTokenHeaderController = (client: AxiosInstance, initialToken?: string | null) => {
    const controller = {
        set(token: string) {
            client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        remove() {
            delete client.defaults.headers.common['Authorization'];
        },
    };
    if (initialToken) {
        controller.set(initialToken);
    }
    return controller;
};
