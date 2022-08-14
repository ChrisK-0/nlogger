function logger(color = "white", text = undefined) {
    const today = new Date();

    function returnTime() {
        return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    }

    const reset = "\x1b[0m"; // Used to reset coloring for text.
    const colors = {
        info: "\x1b[36m",
        warn: "\x1b[31m",
        ok: "\x1b[32m",
        silly: "\x1b[35m",
        debug: "\x1b[33m",
        white: "\x1b[0m",
    };

    let useTracer = false;
    let noticeColor = colors.white; // Empty and reset-white by default.

    // No color specifications, eg. logger('Hello world')
    if (text === undefined) {
        noticeColor = `${colors.white} [${returnTime()}] ${reset}`;
        return console.log(noticeColor, color);
    }

    if (color.localeCompare("info") === 0) {
        noticeColor = `${colors.info} [${returnTime()}] [INFO]: ${reset}`;
    }

    if (color.localeCompare("silly") === 0) {
        noticeColor = `${colors.silly} [${returnTime()}] [SILLY]: ${reset}`;
    }

    if (color.localeCompare("ok") === 0) {
        noticeColor = `${colors.ok} [${returnTime()}] [OK]: ${reset}`;
    }

    if (color.localeCompare("warn") === 0) {
        // useTracer = true
        noticeColor = `${colors.warn} [${returnTime()}] [WARN]: ${reset}`;
    }

    if (color.localeCompare("debug") === 0) {
        // useTracer = true
        noticeColor = `${colors.debug} [${returnTime()}] [DEBUG]: ${reset}`;
    }

    if (useTracer) {
        return console.trace(noticeColor, text);
    }

    return console.log(noticeColor, text);
}

module.exports = logger;
