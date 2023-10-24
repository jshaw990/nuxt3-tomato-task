/**
 * Check if a provided value is null, undefined, or a length === 0
 * @param {string | unknown} value - param to check
 * @returns {boolean} is @param {string | unknown} value null, undefined, or length === 0
 */
export const isNullOrEmpty = (value: string | unknown): boolean => {
    return value === null || value === undefined || value.length === 0
}

export const generateGuid = (): string => {
    return ''
}