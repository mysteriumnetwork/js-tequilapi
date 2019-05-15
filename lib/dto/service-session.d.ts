export interface ServiceSessionDTO {
    id: string;
    consumerId: string;
}
export declare function parseServiceSessionDTO(data: any): ServiceSessionDTO;
export declare function parseServiceSessionListDTO(responseData: any): ServiceSessionDTO[];
