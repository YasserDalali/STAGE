/**
 * Formats a date string with fallback for empty dates
 * @param {string} dateString - The date string to format
 * @param {string} noDateMessage - Message to show when date is empty
 * @returns {string} Formatted date string
 */
const formatDate = (dateString, noDateMessage = 'No date') => {
    if (!dateString) return noDateMessage;
    return new Date(dateString).toLocaleDateString();
};

export default formatDate; 