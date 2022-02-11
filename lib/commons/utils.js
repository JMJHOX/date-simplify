"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDateMatch = checkDateMatch;
exports.dateCheck = dateCheck;
exports.dateSplitter = dateSplitter;

var _constants = require("./constants");

var _regex = require("./regex.enum");

function checkDateMatch(documentRequest) {
  if (documentRequest.match(_regex.RegexEnum.FORMAT_DATE)) {
    return 'ddMMyyyy';
  }

  if (documentRequest.match(_regex.RegexEnum.FORMAT_DATE_WITH_VERTICAL_SLASH)) {
    return 'dd-MM-yyyy';
  }

  if (documentRequest.match(_regex.RegexEnum.FORMAT_DATE_WITH_DIAGONAL_SLASH)) {
    return 'dd/MM/yyyy';
  }

  return 'error';
}

function dateCheck(dateNumber, typeDate) {
  let numberParser = dateNumber;

  if (dateNumber < _constants.DateLimit.DATE_LIMIT_MIN) {
    dateNumber = Math.abs(numberParser);
    numberParser = Math.abs(numberParser);
  }

  if (typeDate == 'day' && dateNumber > _constants.DateLimit.DATE_DAY_MAX) {
    for (let i = 0; i < dateNumber - _constants.DateLimit.DATE_DAY_MAX; i++) {
      numberParser--;
    }

    return String(numberParser);
  }

  if (typeDate == 'month' && dateNumber > _constants.DateLimit.DATE_MONTH_MAX) {
    for (let i = 0; i < dateNumber - _constants.DateLimit.DATE_MONTH_MAX; i++) {
      numberParser = numberParser - 1;
    }

    return String(numberParser);
  }

  if (dateNumber == _constants.DateLimit.DATE_LIMIT_MIN) {
    numberParser = numberParser + 1;
    return String(numberParser);
  }

  return String(numberParser);
}

function dateSplitter(dateData) {
  if (dateData.match(_regex.RegexEnum.FORMAT_DATE)) {
    return dateData.split(_regex.RegexSplitter.FORMAT_SPLITTER_DATE);
  }

  if (dateData.match(_regex.RegexEnum.FORMAT_DATE_WITH_VERTICAL_SLASH)) {
    return dateData.split(_regex.RegexSplitter.FORMAT_SPLITTER_VERTICAL_SLASH);
  }

  if (dateData.match(_regex.RegexEnum.FORMAT_DATE_WITH_DIAGONAL_SLASH)) {
    return dateData.split(_regex.RegexSplitter.FORMAT_SPLITTER_DIAGONAL_SLASH);
  }

  return dateData.split(_regex.RegexSplitter.FORMAT_SPLITTER_DATE);
}
//# sourceMappingURL=utils.js.map