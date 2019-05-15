import { PublicKeyDTO } from './public-key';
import { SignatureDTO } from './signature';
export interface IdentityProof {
    publicKey: PublicKeyDTO;
    signature: SignatureDTO;
}
