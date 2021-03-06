var jsforce = require('jsforce');

/**
 * Convert Date filter props to SalesForce based date fields
 * @param {string} field Date in a string format
 * @param {string} fieldType Original type from salesforce schema
 * @returns object
 */
exports.convertDateToJSFDateTime = function convertDateToJSFDateTime(field, fieldType) {
	return fieldType === 'date' ? jsforce.Date.toDateLiteral(field) : jsforce.Date.toDateTimeLiteral(field);
};
