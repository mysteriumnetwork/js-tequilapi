"use strict";
/*
 * Copyright (C) 2017 The "mysteriumnetwork/js-tequilapi" Authors.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tequilapi_error_1 = __importDefault(require("../tequilapi-error"));
const timeouts_1 = require("../timeouts");
class AxiosAdapter {
    constructor(axiosInstance, defaultTimeout = timeouts_1.TIMEOUT_DEFAULT) {
        this._axios = axiosInstance;
        this._timeout = defaultTimeout;
    }
    get(path, query, timeout) {
        const options = this._decorateOptions(timeout);
        options.params = query;
        return decorateResponse(this._axios.get(path, options), path);
    }
    post(path, data, timeout) {
        return decorateResponse(this._axios.post(path, data, this._decorateOptions(timeout)), path);
    }
    delete(path, timeout) {
        return decorateResponse(this._axios.delete(path, this._decorateOptions(timeout)), path);
    }
    put(path, data, timeout) {
        return decorateResponse(this._axios.put(path, data, this._decorateOptions(timeout)), path);
    }
    _decorateOptions(timeout) {
        return {
            timeout: timeout !== undefined ? timeout : this._timeout
        };
    }
}
exports.default = AxiosAdapter;
function decorateResponse(promise, path) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield promise;
        }
        catch (err) {
            throw new tequilapi_error_1.default(err, path);
        }
        return response.data;
    });
}
