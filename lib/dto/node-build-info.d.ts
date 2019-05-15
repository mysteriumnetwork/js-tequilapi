export interface NodeBuildInfoDTO {
    commit: string;
    branch: string;
    buildNumber: string;
}
export declare function parseNodeBuildInfoDTO(data: any): {
    commit: any;
    branch: any;
    buildNumber: any;
};
