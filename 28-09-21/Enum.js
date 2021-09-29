var Print;
(function (Print) {
    Print[Print["no"] = 1] = "no";
    Print[Print["id"] = 2] = "id";
    Print["comment"] = "great";
    Print[Print["rate"] = 20] = "rate";
})(Print || (Print = {}));
function get(mName) {
    if (mName === 'bharat' || mName === 'rishi') {
        return Print.comment;
    }
}
var mediaType = get('rishi');
console.log(mediaType);
