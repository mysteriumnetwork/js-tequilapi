"use strict";
/*
 * Copyright (C) 2019 The "mysteriumnetwork/js-tequilapi" Authors.
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
const validation_1 = require("../validation");
function parseAccessRule(responseData) {
    validation_1.validateMultiple('AccessRule', responseData, [
        { name: 'type', type: 'string' }
    ]);
    if (responseData.value) {
        validation_1.validate('AccessRule.value', responseData, { name: 'value', type: 'string' });
    }
    return {
        type: responseData.type,
        value: responseData.value
    };
}
function parseAccessPolicyDTO(responseData) {
    validation_1.validateMultiple('AccessPolicyDTO', responseData, [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'allow', type: 'array' }
    ]);
    return {
        id: responseData.id,
        title: responseData.title,
        description: responseData.description,
        allow: responseData.allow.map(parseAccessRule)
    };
}
exports.parseAccessPolicyDTO = parseAccessPolicyDTO;
function parseAccessPoliciesDTO(responseData) {
    validation_1.validate('AccessPolicyDTO[]', responseData, { name: 'entries', type: 'array' });
    return responseData.entries.map(parseAccessPolicyDTO);
}
exports.parseAccessPoliciesDTO = parseAccessPoliciesDTO;
