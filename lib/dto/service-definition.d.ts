import { LocationDTO } from './location';
export interface ServiceDefinitionDTO {
    locationOriginate?: LocationDTO;
}
export declare function parseServiceDefinitionDTO(data: any): ServiceDefinitionDTO;
