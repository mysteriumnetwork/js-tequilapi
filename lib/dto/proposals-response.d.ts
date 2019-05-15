import { ProposalDTO } from './proposal';
/**
 * Used only as an intermediate result - is not exposed to clients.
 */
interface ProposalsResponseDTO {
    proposals: ProposalDTO[];
}
export declare function parseProposalsResponseDTO(responseData: any): ProposalsResponseDTO;
export {};
