module.exports = {

    doesNotContainsAnySpecialChar : (value) => {
        return /^[a-zA-Z]+$/g.test(value);
    },
    checkLengthAtLeast: (value, length) => {
        let regex = new RegExp(`^.{${length},}$`, "g");
        return regex.test(value);
    },
    hasAnyWhiteSpaces: (value) => {
        return /\s/g.test(value);
    },

};