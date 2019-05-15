interface AllowedRule {
    type: string;
    value: string;
}
export interface AccessListDTO {
    name: string;
    description: string;
    allow: AllowedRule[];
}
export declare function parseAccessListItemDTO(responseData: any): AccessListDTO;
export declare function parseAccessListDTO(responseData: any): AccessListDTO[];
export {};
