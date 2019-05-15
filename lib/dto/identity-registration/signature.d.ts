export interface SignatureDTO {
    r: string;
    s: string;
    v: string;
}
export declare function parseSignatureDTO(data: any): SignatureDTO;
