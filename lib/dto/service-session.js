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
function parseServiceSessionDTO(data) {
    validation_1.validateMultiple('ServiceSessionDTO', data, [
        { name: 'id', type: 'string' },
        { name: 'consumerId', type: 'string' }
    ]);
    return {
        id: data.id,
        consumerId: data.consumerId
    };
}
exports.parseServiceSessionDTO = parseServiceSessionDTO;
function parseServiceSessionListDTO(responseData) {
    validation_1.validate('ServiceSessionDTO[]', responseData, { name: 'sessions', type: 'array' });
    return responseData.sessions.map(parseServiceSessionDTO);
}
exports.parseServiceSessionListDTO = parseServiceSessionListDTO;
