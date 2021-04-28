exports.showDate = function () {
    let date = new Date();
    return date;
}

exports.Greeting = function () {
    let date = new Date();
    if (date.getHours() > 23 || date.getHours() <= 5) {
        return "Good night";
    } else if (date.getHours() > 5 && date.getHours() <= 11) {
        return "Good morning";
    } else if (date.getHours() > 11 && date.getHours() <= 17) {
        return "Good day";
    } else if (date.getHours() > 17 && date.getHours() <= 23) {
        return "Good evening";
    }
}