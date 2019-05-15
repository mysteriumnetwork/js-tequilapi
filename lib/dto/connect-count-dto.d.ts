export interface ConnectCountDTO {
    success: number;
    fail: number;
    timeout: number;
}
export declare function parseConnectionCountDTO(data: any): ConnectCountDTO;
