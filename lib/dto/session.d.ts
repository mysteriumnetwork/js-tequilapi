export interface SessionDTO {
    sessionId: string;
    providerId: string;
    providerCountry: string;
    dateStarted: string;
    bytesSent: number;
    bytesReceived: number;
    duration: number;
}
export declare function validateSession(data: any): SessionDTO;
