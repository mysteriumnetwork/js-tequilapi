export interface NatStatusDTO {
    status: string;
    error?: string;
}
export declare function parseNatStatusResponse(data: any): NatStatusDTO;
