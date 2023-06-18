var COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
var getData = function (url) {
    var comments = fetch(url);
    return comments;
};
getData(COMMENTS_URL)
    .then(function (data) { return data.json(); })
    .then(function (res) {
    return res.forEach(function (el) { return console.log("ID:", el.id, "Email:", el.email); });
});
