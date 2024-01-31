function extractDateParts(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = inputString.match(regex);
    if (match) {
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null;
    }
}

const datePattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
const testString = '25/12/2023'

const result = extractDateParts(datePattern,testString)
console.log(result) //{ day: '25', month: '12', year: '2023' }


