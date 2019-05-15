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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_adapter_1 = __importDefault(require("./adapters/axios-adapter"));
const http_tequilapi_client_1 = require("./http-tequilapi-client");
const timeouts_1 = require("./timeouts");
const TEQUILAPI_URL = 'http://127.0.0.1:4050';
exports.TEQUILAPI_URL = TEQUILAPI_URL;
class TequilapiClientFactory {
    constructor(baseUrl = TEQUILAPI_URL, defaultTimeout = timeouts_1.TIMEOUT_DEFAULT) {
        this._baseUrl = baseUrl;
        this._defaultTimeout = defaultTimeout;
    }
    build(adapter) {
        return new http_tequilapi_client_1.HttpTequilapiClient(adapter);
    }
    buildAdapter() {
        const axiosInstance = axios_1.default.create({
            baseURL: this._baseUrl,
            headers: {
                'Cache-Control': 'no-cache, no-store'
            }
        });
        return new axios_adapter_1.default(axiosInstance, this._defaultTimeout);
    }
}
exports.default = TequilapiClientFactory;
