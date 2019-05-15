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
const proposal_1 = require("./proposal");
function parseServiceInfoDTO(data) {
    // TODO: validate that status has value from ServiceStatus enum
    validation_1.validateMultiple('ServiceInfoDTO', data, [
        { name: 'id', type: 'string' },
        { name: 'providerId', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'options', type: 'object' },
        { name: 'status', type: 'string' },
        { name: 'proposal', type: 'object' }
    ]);
    return {
        id: data.id,
        providerId: data.providerId,
        type: data.type,
        options: data.options,
        status: data.status,
        proposal: proposal_1.parseProposalDTO(data.proposal)
    };
}
exports.parseServiceInfoDTO = parseServiceInfoDTO;
