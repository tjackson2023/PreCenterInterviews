/**
 * 
 * @param {Object} obj Object containing the fields and values that will be standardized
 * @param {Object} fields For each key-value pair, if a key in obj matches a key in fields,
 * then the value in obj will be returned in a new object with the key being the value
 * in the fields object
 * @returns {Object} New object with keys from the values in fields and values from the values in objects
 */
const standardizeObjectFields = (obj, fields) => {
    const result = {};
    Object.entries(obj).forEach(([key,value]) => {
        const formattedKey = key.trim().toUpperCase().replace(' ', '_');
        if (fields[formattedKey]) {
            result[fields[formattedKey]] = String(value);
        }
    });

    return result;
}