module.exports = function reverse(n) {
    if (n > 0) {
        let arr = String(n).split('').reverse().join('');
        return Number(arr);
    } else if (n < 0) {
        let arr = String(n).split('').reverse();
        let el_del = arr.pop();
        return Number(arr.join(''));
    }
}
