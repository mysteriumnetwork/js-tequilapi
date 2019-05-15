export interface ConnectionStatisticsDTO {
    duration: number;
    bytesReceived: number;
    bytesSent: number;
}
export declare function parseConnectionStatisticsDTO(data: any): ConnectionStatisticsDTO;
