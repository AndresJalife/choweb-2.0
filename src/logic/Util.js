
export const normalizeAndUnSpace = (str) => {
    return str.replace(/[^A-Z0-9.]/ig, "");
}