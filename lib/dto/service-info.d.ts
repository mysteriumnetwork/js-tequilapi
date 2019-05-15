import { ProposalDTO } from './proposal';
import { ServiceStatus } from './service-status';
export interface ServiceInfoDTO {
    id: string;
    providerId: string;
    type: string;
    options?: {
        [key: string]: any;
    };
    status: ServiceStatus;
    proposal: ProposalDTO;
}
export declare function parseServiceInfoDTO(data: any): ServiceInfoDTO;
