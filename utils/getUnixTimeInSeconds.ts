/**
 * Get current unix time in seconds with optional param to return as a string
 * @param {boolean} returnString - return type is a string
 * @returns {number | string} current unix time in seconds ( / 1000)
 */
export default (returnString: boolean = false): number | string => {
    const time = Math.floor(Date.now() / 1000)
    return returnString ? time.toString() : time
}