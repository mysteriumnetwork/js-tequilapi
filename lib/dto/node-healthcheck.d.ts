import { NodeBuildInfoDTO } from './node-build-info';
export interface NodeHealthcheckDTO {
    uptime: string;
    process: number;
    version: string;
    buildInfo: NodeBuildInfoDTO;
}
/**
 * Validates and converts mixed type into NodeHealthcheckDTO.
 * @param data to be conveted
 * @returns converted type
 */
export declare function parseHealthcheckResponse(data: any): NodeHealthcheckDTO;
