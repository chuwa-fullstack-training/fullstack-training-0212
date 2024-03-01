var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function makeCustomer(u) {
    return __assign(__assign({}, u), { type: "customer" });
}
// T is extend from User, it may contains other properties. We need to copy other properties from u to ensure the function will return a T object
// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a, b) {
    if (typeof a === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
