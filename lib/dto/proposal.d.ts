import { MetricsDTO } from './metrics-dto';
import { ServiceDefinitionDTO } from './service-definition';
export interface ProposalDTO {
    id: number;
    providerId: string;
    serviceType: string;
    serviceDefinition: ServiceDefinitionDTO;
    metrics?: MetricsDTO;
}
export declare function parseProposalDTO(data: any): ProposalDTO;
