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
function validate(typeName, obj, property) {
    const value = obj[property.name];
    if (typeof value === 'undefined') {
        throw new TypeError(`${typeName}: ${property.name} is not provided`);
    }
    if (getTypeString(value) !== property.type) {
        throw new TypeError(`${typeName}: ${property.name} should be "${property.type}"`);
    }
}
exports.validate = validate;
function getTypeString(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    return typeof value;
}
function validateMultiple(typeName, obj, properties) {
    properties.forEach((property) => validate(typeName, obj, property));
}
exports.validateMultiple = validateMultiple;
function validateArray(typeName, arr) {
    if (getTypeString(arr) !== 'array') {
        throw new TypeError(`${typeName}: should be "array"`);
    }
}
exports.validateArray = validateArray;
