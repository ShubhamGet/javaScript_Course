// callback, promises ans async/await

// callback, promises ans async/await

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script wiht Src: " + src);
        callback();
    }
    document.body.appendChild(script);
}

function hello() {
    alert("Hello world");
}
function goodmorning() {
    alert("Good Morning ");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
