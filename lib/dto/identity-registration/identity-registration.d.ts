import { PublicKeyDTO } from './public-key';
import { SignatureDTO } from './signature';
export interface IdentityRegistrationDTO {
    registered: boolean;
    publicKey?: PublicKeyDTO;
    signature?: SignatureDTO;
}
export declare function parseIdentityRegistrationDTO(data: any): IdentityRegistrationDTO;
