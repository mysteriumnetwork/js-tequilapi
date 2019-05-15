import { ConnectionStatus } from './connection-status';
export interface ConnectionStatusDTO {
    status: ConnectionStatus;
    sessionId?: string;
}
export declare function parseConnectionStatusDTO(data: any): {
    status: any;
    sessionId: any;
};
