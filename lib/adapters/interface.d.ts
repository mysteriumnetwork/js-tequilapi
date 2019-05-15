export interface HttpQueryParams {
    [s: string]: any;
}
export interface HttpInterface {
    get(path: string, query?: HttpQueryParams, timeout?: number): Promise<any>;
    post(path: string, data?: any, timeout?: number): Promise<any>;
    delete(path: string, timeout?: number): Promise<any>;
    put(path: string, data: any, timeout?: number): Promise<any>;
}
