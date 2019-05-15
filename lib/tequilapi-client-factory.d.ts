import { HttpInterface } from './adapters/interface';
import { TequilapiClient } from './client';
declare const TEQUILAPI_URL: string;
declare class TequilapiClientFactory {
    _baseUrl: string;
    _defaultTimeout: number;
    constructor(baseUrl?: string, defaultTimeout?: number);
    build(adapter: HttpInterface): TequilapiClient;
    buildAdapter(): HttpInterface;
}
export { TEQUILAPI_URL };
export default TequilapiClientFactory;
