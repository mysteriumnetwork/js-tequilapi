"use strict";
/*
 * Copyright (C) 2018 The "mysteriumnetwork/js-tequilapi" Authors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class TequilapiError extends Error {
    constructor(originalError, path) {
        super(`${originalError.message} (path="${path}")`);
        this.name = 'TequilapiError';
        this._originalError = originalError;
    }
    get isTequilapiError() {
        return true;
    }
    get code() {
        return this._originalError.code;
    }
    get isTimeoutError() {
        return this.code === errorCodes.CONNECTION_ABORTED_ERROR_CODE;
    }
    get isRequestClosedError() {
        return this._hasHttpStatus(httpResponseCodes.CLIENT_CLOSED_REQUEST);
    }
    get isServiceUnavailableError() {
        return this._hasHttpStatus(httpResponseCodes.SERVICE_UNAVAILABLE);
    }
    get isNotFoundError() {
        return this._hasHttpStatus(httpResponseCodes.NOT_FOUND);
    }
    _hasHttpStatus(expectedStatus) {
        if (!this._originalError.response) {
            return false;
        }
        return this._originalError.response.status === expectedStatus;
    }
}
exports.default = TequilapiError;
const httpResponseCodes = {
    CLIENT_CLOSED_REQUEST: 499,
    SERVICE_UNAVAILABLE: 503,
    NOT_FOUND: 404
};
const errorCodes = {
    CONNECTION_ABORTED_ERROR_CODE: 'ECONNABORTED'
};
