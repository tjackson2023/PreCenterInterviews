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
