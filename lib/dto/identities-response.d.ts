import { IdentityDTO } from './identity';
export interface IdentitiesResponseDTO {
    identities: IdentityDTO[];
}
export declare function parseIdentitiesResponseDTO(responseData: any): IdentitiesResponseDTO;
