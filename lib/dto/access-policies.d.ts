interface AccessRule {
    type: string;
    value?: string;
}
export interface AccessPolicyDTO {
    id: string;
    title: string;
    description: string;
    allow: AccessRule[];
}
export declare function parseAccessPolicyDTO(responseData: any): AccessPolicyDTO;
export declare function parseAccessPoliciesDTO(responseData: any): AccessPolicyDTO[];
export {};
