"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getPaymentLink = exports.SignatureDTO = exports.PublicKeyDTO = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/*
 * Copyright (C) 2017 The "mysteriumnetwork/mysterium-vpn" Authors.
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
var getPaymentLink = function getPaymentLink(paymentBaseUrl, registration) {
  var publicKey = registration.publicKey,
      signature = registration.signature;
  return paymentBaseUrl + "?part1=".concat(publicKey.part1, "&part2=").concat(publicKey.part2) + "&r=".concat(signature.r, "&s=").concat(signature.s, "&v=").concat(signature.v);
};

exports.getPaymentLink = getPaymentLink;

var PublicKeyDTO = function PublicKeyDTO(data) {
  (0, _classCallCheck2.default)(this, PublicKeyDTO);
  this.part1 = data.part1;
  this.part2 = data.part2;
};

exports.PublicKeyDTO = PublicKeyDTO;

var SignatureDTO = function SignatureDTO(data) {
  (0, _classCallCheck2.default)(this, SignatureDTO);
  this.r = data.r;
  this.s = data.s;
  this.v = data.v;
};

exports.SignatureDTO = SignatureDTO;

var IdentityRegistrationDTO = function IdentityRegistrationDTO(data) {
  (0, _classCallCheck2.default)(this, IdentityRegistrationDTO);
  this.registered = data.registered;
  this.publicKey = data.publicKey ? new PublicKeyDTO(data.publicKey) : null;
  this.signature = data.signature ? new SignatureDTO(data.signature) : null;
};

var _default = IdentityRegistrationDTO;
exports.default = _default;