"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFormat = dateFormat;
exports.dateFormatISO = dateFormatISO;
exports.dateFormatNew = dateFormatNew;
exports.dateIsValid = dateIsValid;
exports.dateIsValidFix = dateIsValidFix;
exports.getDateRangeLimitLocal = getDateRangeLimitLocal;
exports.getDateRangeLimitUTC = getDateRangeLimitUTC;

var _dateFns = require("date-fns");

var _utils = require("../commons/utils");

var _regex = require("../commons/regex.enum");

function getDateRangeLimitUTC(dateRange, ChangeDate) {
  let DiffYear = 0;
  let actualYear = 0;

  if (ChangeDate) {
    actualYear = new Date(ChangeDate).getUTCFullYear();
  }

  if (!ChangeDate) {
    actualYear = new Date().getUTCFullYear();
  }

  if (dateRange) {
    if (dateRange <= 0 || !dateRange) {
      return 'Invalid Age';
    }

    const firstDayOfYear = new Date(actualYear, 0, 1);
    DiffYear = Number(firstDayOfYear.getUTCFullYear() - Number(dateRange));
    return (0, _dateFns.format)(new Date(DiffYear, 0, 1), 'yyyy');
  }

  return "Invalid Range";
}

function getDateRangeLimitLocal(dateRange, ChangeDate) {
  let DiffYear = 0;
  let actualYear = 0;

  if (ChangeDate) {
    actualYear = new Date(ChangeDate).getFullYear();
  }

  if (!ChangeDate) {
    actualYear = new Date().getFullYear();
  }

  if (dateRange) {
    if (dateRange <= 0) {
      return 'Invalid Age';
    }

    const firstDayOfYear = new Date(actualYear, 0, 1);
    DiffYear = Number(firstDayOfYear.getFullYear() - Number(dateRange));
    return (0, _dateFns.format)(new Date(DiffYear, 0, 1), 'yyyy');
  }

  return "Invalid Range";
}

function dateFormat(documentFormat) {
  if (documentFormat) {
    if (documentFormat.match(_regex.RegexEnum.FORMAT_DATE)) {
      documentFormat = documentFormat.replace(_regex.RegexEnum.FORMAT_DATE, "$1/$2/$3");
    }

    if (!(0, _dateFns.isValid)(new Date(documentFormat))) {
      return documentFormat;
    }

    return (0, _dateFns.format)(new Date(documentFormat), 'yyyy/dd/MM');
  }

  return 'Error';
}

function dateFormatNew(dateRequest, formatStyle) {
  let [day, month, year] = (0, _utils.dateSplitter)(dateRequest);
  day = (0, _utils.dateCheck)(Number(day), "day");
  month = (0, _utils.dateCheck)(Number(month), "month");
  year = (0, _utils.dateCheck)(Number(year), "year");

  switch (formatStyle) {
    case 'ddMMyyyy':
      {
        console.log("a");
        return `${day}${month}${year}`;
      }

    case 'dd-MM-yyyy':
      {
        console.log("b");
        return `${day}-${month}-${year}`;
      }

    case 'dd/MM/yyyy':
      {
        console.log("c");
        return `${day}/${month}/${year}`;
      }

    default:
      {
        console.log("d");
        return dateRequest;
      }
  }
}

function dateFormatISO(documentFormat) {
  if (documentFormat) {
    if (documentFormat.match(_regex.RegexEnum.FORMAT_DATE)) {
      documentFormat = documentFormat.replace(_regex.RegexEnum.FORMAT_DATE, "$1/$2/$3");
    }

    if (!(0, _dateFns.isValid)(new Date(documentFormat))) {
      return documentFormat;
    }

    return new Date(documentFormat).toISOString();
  }

  return 'Error';
}

function dateIsValid(day, month, year) {
  return (0, _dateFns.isValid)(new Date(`${day}/${month}/${year}`));
}

function dateIsValidFix(day, month, year) {
  let dayParser = (0, _utils.dateCheck)(Number(day), 'day');
  let monthParser = (0, _utils.dateCheck)(Number(month), 'month');
  let yearParser = Number(year);
  return `${dayParser}/${monthParser}/${yearParser}`;
}
//# sourceMappingURL=DateSimplifyService.js.map