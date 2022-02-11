"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegexSplitter = exports.RegexEnum = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RegexEnum {}

exports.RegexEnum = RegexEnum;

_defineProperty(RegexEnum, "FORMAT_DATE", /(\d{2})(\d{2})(\d{4})/g);

_defineProperty(RegexEnum, "FORMAT_DATE_WITH_VERTICAL_SLASH", /(\d{1,4})-(\d{1,4})-(\d{1,4})/g);

_defineProperty(RegexEnum, "FORMAT_DATE_WITH_DIAGONAL_SLASH", /\d{1,4}-\d{1,4}-\d{1,4}/g);

class RegexSplitter {}

exports.RegexSplitter = RegexSplitter;

_defineProperty(RegexSplitter, "FORMAT_SPLITTER_DATE", /(\d{2})(\d{2})(\d{4})/g);

_defineProperty(RegexSplitter, "FORMAT_SPLITTER_VERTICAL_SLASH", "-");

_defineProperty(RegexSplitter, "FORMAT_SPLITTER_DIAGONAL_SLASH", "/");
//# sourceMappingURL=regex.enum.js.map