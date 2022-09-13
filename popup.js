
document.getElementById("submit").addEventListener("click", () => {
    chrome.storage.sync.get('ext-enabled', function (obj) {
        let data = {};
        data["ext-enabled"] = !obj["ext-enabled"];
        chrome.storage.sync.set(data, function () {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });
})

chrome.storage.sync.get('ext-enabled', function (obj) {
    document.getElementById("submit").innerText = obj["ext-enabled"] ? "TURN OFF" : "TURN ON"
    document.getElementById("submit").style.background = obj["ext-enabled"] ? "green" : "red"
});

document.getElementById("change").addEventListener("click", () => {
    chrome.storage.sync.get('url', function (obj) {
        let data = {};
        data["url"] = document.getElementById("url").value;
        chrome.storage.sync.set(data, function () {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });
})