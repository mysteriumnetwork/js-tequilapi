export interface ConsumerLocationDTO {
    ip?: string;
    asn: any;
    isp?: string;
    continent?: string;
    country?: string;
    city?: string;
    node_type?: string;
}
export declare function parseConsumerLocationDTO(data: any): ConsumerLocationDTO;
