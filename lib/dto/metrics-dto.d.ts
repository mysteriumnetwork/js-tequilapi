import { ConnectCountDTO } from './connect-count-dto';
export interface MetricsDTO {
    connectCount?: ConnectCountDTO;
}
export declare function parseMetricsDTO(data: any): MetricsDTO;
