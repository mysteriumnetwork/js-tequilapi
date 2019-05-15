export interface AxiosError {
    message: string;
    response?: {
        status: number;
    };
    code?: string;
}
export default class TequilapiError extends Error {
    name: string;
    _originalError: AxiosError;
    constructor(originalError: Error, path: string);
    readonly isTequilapiError: boolean;
    readonly code: string | undefined;
    readonly isTimeoutError: boolean;
    readonly isRequestClosedError: boolean;
    readonly isServiceUnavailableError: boolean;
    readonly isNotFoundError: boolean;
    _hasHttpStatus(expectedStatus: number): boolean;
}
