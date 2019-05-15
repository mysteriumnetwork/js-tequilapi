export interface ServiceRequest {
    providerId: string;
    type: string;
    accessPolicies?: {
        ids: string[];
    };
    options?: {
        [key: string]: any;
    };
}
