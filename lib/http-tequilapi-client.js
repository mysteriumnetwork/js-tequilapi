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
const proposals_query_1 = __importDefault(require("./adapters/proposals-query"));
const access_policies_1 = require("./dto/access-policies");
const connection_ip_1 = require("./dto/connection-ip");
const connection_session_1 = require("./dto/connection-session");
const connection_statistics_1 = require("./dto/connection-statistics");
const connection_status_dto_1 = require("./dto/connection-status-dto");
const consumer_location_1 = require("./dto/consumer-location");
const identities_response_1 = require("./dto/identities-response");
const identity_1 = require("./dto/identity");
const identity_payout_1 = require("./dto/identity-payout");
const identity_registration_1 = require("./dto/identity-registration/identity-registration");
const nat_status_dto_1 = require("./dto/nat-status-dto");
const node_healthcheck_1 = require("./dto/node-healthcheck");
const proposals_response_1 = require("./dto/proposals-response");
const service_info_1 = require("./dto/service-info");
const service_list_1 = require("./dto/service-list");
const service_session_1 = require("./dto/service-session");
const timeouts_1 = require("./timeouts");
class HttpTequilapiClient {
    constructor(http) {
        this.http = http;
    }
    healthCheck(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('healthcheck', undefined, timeout);
            if (!response) {
                throw new Error('Healthcheck response body is missing');
            }
            return node_healthcheck_1.parseHealthcheckResponse(response);
        });
    }
    natStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('nat/status');
            return nat_status_dto_1.parseNatStatusResponse(response);
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post('stop');
        });
    }
    location(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('location', undefined, timeout);
            if (!response) {
                throw new Error('Location response body is missing');
            }
            return consumer_location_1.parseConsumerLocationDTO(response);
        });
    }
    identitiesList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('identities');
            if (!response) {
                throw new Error('Identities response body is missing');
            }
            const responseDto = identities_response_1.parseIdentitiesResponseDTO(response);
            return responseDto.identities;
        });
    }
    identityCreate(passphrase) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('identities', { passphrase });
            if (!response) {
                throw new Error('Identities creation response body is missing');
            }
            return identity_1.parseIdentityDTO(response);
        });
    }
    identityUnlock(id, passphrase, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put('identities/' + id + '/unlock', { passphrase }, timeout);
        });
    }
    identityRegistration(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`identities/${id}/registration`);
            if (!response) {
                throw new Error('Identities registration response body is missing');
            }
            return identity_registration_1.parseIdentityRegistrationDTO(response);
        });
    }
    identityPayout(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`identities/${id}/payout`);
            if (!response) {
                throw new Error('Identity payout response body is missing');
            }
            return identity_payout_1.parseIdentityPayoutDTO(response);
        });
    }
    updateIdentityPayout(id, ethAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.put(`identities/${id}/payout`, { ethAddress });
        });
    }
    findProposals(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = options ? new proposals_query_1.default(options).toQueryParams() : undefined;
            const response = yield this.http.get('proposals', params);
            if (!response) {
                throw new Error('Proposals response body is missing');
            }
            const responseDto = proposals_response_1.parseProposalsResponseDTO(response);
            const proposals = responseDto.proposals;
            return proposals || [];
        });
    }
    connectionCreate(request, timeout = timeouts_1.TIMEOUT_DISABLED) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.put('connection', {
                consumerId: request.consumerId,
                providerId: request.providerId,
                serviceType: request.serviceType
            }, timeout);
            if (!response) {
                throw new Error('Connection creation response body is missing');
            }
            return connection_status_dto_1.parseConnectionStatusDTO(response);
        });
    }
    connectionStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('connection');
            if (!response) {
                throw new Error('Connection status response body is missing');
            }
            return connection_status_dto_1.parseConnectionStatusDTO(response);
        });
    }
    connectionCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.delete('connection');
        });
    }
    connectionIP(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('connection/ip', undefined, timeout);
            if (!response) {
                throw new Error('Connection IP response body is missing');
            }
            return connection_ip_1.parseConnectionIPDTO(response);
        });
    }
    connectionStatistics() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('connection/statistics');
            if (!response) {
                throw new Error('Connection statistics response body is missing');
            }
            return connection_statistics_1.parseConnectionStatisticsDTO(response);
        });
    }
    connectionSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('connection-sessions');
            if (!response) {
                throw new Error('Connection sessions response body is missing');
            }
            return response.sessions.map(connection_session_1.validateSession);
        });
    }
    serviceList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('services');
            if (!response) {
                throw new Error('Service list response body is missing');
            }
            return service_list_1.parseServiceListDTO(response);
        });
    }
    serviceGet(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('services/' + id);
            if (!response) {
                throw new Error('Service response body is missing');
            }
            return service_info_1.parseServiceInfoDTO(response);
        });
    }
    serviceStart(request, timeout = timeouts_1.TIMEOUT_DISABLED) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('services', {
                providerId: request.providerId,
                type: request.type,
                accessPolicies: request.accessPolicies,
                options: request.options
            }, timeout);
            if (!response) {
                throw new Error('Service creation response body is missing');
            }
            return service_info_1.parseServiceInfoDTO(response);
        });
    }
    serviceStop(serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.delete('services/' + serviceId);
        });
    }
    serviceSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('service-sessions');
            if (!response) {
                throw new Error('Service sessions response body is missing');
            }
            return service_session_1.parseServiceSessionListDTO(response);
        });
    }
    accessPolicies() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('access-policies');
            if (!response) {
                throw new Error('Access policies response body is missing');
            }
            return access_policies_1.parseAccessPoliciesDTO(response);
        });
    }
}
exports.HttpTequilapiClient = HttpTequilapiClient;
