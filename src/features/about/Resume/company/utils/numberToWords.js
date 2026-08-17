export const numberToWords = (num) => {
    if (num === null || num === undefined || isNaN(num)) return "ZERO ONLY";
    const n = Math.floor(Math.abs(Number(num)));
    if (n === 0) return "ZERO ONLY";
    const a = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"];
    const b = ["", "", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];
    const inWords = (number) => {
        if (number < 20) return a[number];
        if (number < 100) return b[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + a[number % 10] : "");
        if (number < 1000) return a[Math.floor(number / 100)] + " HUNDRED" + (number % 100 !== 0 ? " " + inWords(number % 100) : "");
        if (number < 100000) return inWords(Math.floor(number / 1000)) + " THOUSAND" + (number % 1000 !== 0 ? " " + inWords(number % 1000) : "");
        if (number < 10000000) return inWords(Math.floor(number / 100000)) + " LAKH" + (number % 100000 !== 0 ? " " + inWords(number % 100000) : "");
        return inWords(Math.floor(number / 10000000)) + " CRORE" + (number % 10000000 !== 0 ? " " + inWords(number % 10000000) : "");
    };

    return `${inWords(n)} ONLY`;
};
