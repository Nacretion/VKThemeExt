const opacity = 0.7

chrome.storage.sync.get('ext-enabled', function (obj) {

    chrome.storage.sync.get('url', function (obj2) {
        obj["ext-enabled"] ?
            interval(obj2)
            : ""
    })
})


function snowFall(url) {
    const container = document.querySelector(".scroll_fix"),
        messages = document.querySelector("._im_page_dialogs"),
        messageDay = document.getElementsByClassName("im-page--history-new-bar_days"),
        pinned_message = document.querySelector("._im_pinned_message"),
        chatInput = document.querySelector(".im-chat-input"),
        chat_header = document.querySelector(".im-page--chat-header"),
        music = document.querySelector(".CatalogBlock"),
        messages_history = document.querySelector("._im_page_history"),
        chatFooter = document.querySelector(".im-page--dialogs-footer"),
        header = document.getElementById("page_header_cont"),
        sidebar = document.getElementById("side_bar_inner")

    if (messages && chat_header && messages_history) {
        messages.style.background = "rgba(0,0,0," + opacity + ")"

        chat_header.style.background = "rgba(0,0,0," + opacity + ")"
        messages_history.style.background = "rgba(0,0,0," + opacity + ")"
        chatInput.style.background = "rgba(0,0,0," + opacity + ")"
        chatFooter.style.background = "rgba(0,0,0," + opacity + ")"
    }
    messageDay ?
        messageDayStyle(messageDay)
        : ""
    music ? music.style.background = "rgba(0,0,0," + opacity + ")" : ""
    pinned_message ? pinned_message.style.background = "rgba(0,0,0," + opacity + ")" : ""

    if (sidebar) {
        sidebar.style.background = "rgba(0,0,0," + opacity + ")"
        sidebar.style.borderRadius = "20px"
        sidebar.style.padding = "20px"
        sidebar.style.marginLeft = "-50px"
        sidebar.style.marginTop = "calc(var(--header-height) + 15px)"
    }
    if (header && container) {

        header.style.background = "rgba(0,0,0," + opacity + ")"

        container.style.background = "url('" + url + "') no-repeat"
        container.style.backgroundSize = "100%"
        container.style.backgroundAttachment = "fixed"
    }
}

function messageDayStyle(messageDay) {
    for (let i = 0; i < messageDay.length; i++) {messageDay[i].style.background = "transparent"}
}
function interval(obj2) {
    snowFall(obj2.url)

    setInterval(() => snowFall(obj2.url), 2000)
}