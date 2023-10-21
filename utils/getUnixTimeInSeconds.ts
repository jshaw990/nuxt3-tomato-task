
export default (returnString: boolean = false) => {
    const time = Math.floor(Date.now() / 1000)
    return returnString ? time.toString() : time
}