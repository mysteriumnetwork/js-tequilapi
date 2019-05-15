import { AxiosInstance } from 'axios';
import { HttpInterface, HttpQueryParams } from './interface';
export default class AxiosAdapter implements HttpInterface {
    _axios: AxiosInstance;
    _timeout: number;
    constructor(axiosInstance: AxiosInstance, defaultTimeout?: number);
    get(path: string, query?: HttpQueryParams, timeout?: number): Promise<any>;
    post(path: string, data: any, timeout?: number): Promise<any>;
    delete(path: string, timeout?: number): Promise<any>;
    put(path: string, data: any, timeout?: number): Promise<any>;
    _decorateOptions(timeout?: number): any;
}
