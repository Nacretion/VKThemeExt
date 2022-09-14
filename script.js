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
        pinned_message = document.querySelector("._im_pinned_message"),
        chatInput = document.querySelector(".im-chat-input"),
        chat_header = document.querySelector(".im-page--chat-header"),
        music = document.querySelector(".CatalogBlock"),
        messages_history = document.querySelector("._im_page_history"),
        chatFooter = document.querySelector(".im-page--dialogs-footer"),
        pageHeader = document.querySelector(".im-page--header"),
        uiSearch = document.querySelector("._im_dialogs_search_input"),
        pageToolsw = document.querySelector(".im-page--toolsw"),
        blockHeader = document.querySelector(".page_block_header"),
        block = document.querySelector("._audio_page_content_block"),
        audioSearch = document.querySelector(".audio_search_wrapper"),
        audioPlayer = document.querySelector("._audio_page_player_wrap"),

        newBars = document.getElementsByClassName("im-page--history-new-bar"),
        postCaption = document.getElementsByClassName("im_post_top_info_caption"),
        posts = document.getElementsByClassName("post"),

        header = document.getElementById("page_header_cont"),
        sidebar = document.getElementById("side_bar_inner")

    let toOpacity = [messages, messages_history, chatInput, chatFooter, blockHeader, audioPlayer, audioSearch, music, pinned_message, header]
    let toTransparent = [chat_header, pageHeader, block, pageToolsw, uiSearch]


    toOpacity.map((node) => {
        node ? node.style.background = "rgba(0,0,0," + opacity + ")" : ""
    })

    toTransparent.map((node) => {
        node ? node.style.background = "transparent" : ""
    })

    postCaption ? postCaptionStyle(postCaption) : ""
    newBars ? newBarsStyle(newBars) : ""
    posts ? postStyle(posts) : ""


    if (sidebar) {
        sidebar.style.background = "rgba(0,0,0," + opacity + ")"
        sidebar.style.borderRadius = "20px"
        sidebar.style.padding = "20px"
        sidebar.style.marginLeft = "-50px"
        sidebar.style.marginTop = "calc(var(--header-height) + 15px)"
        sidebar.querySelector("nav").style.marginLeft = "10px"
    }
    if (header && container) {

        container.style.background = "url('" + url + "') no-repeat"
        container.style.backgroundSize = "100%"
        container.style.backgroundAttachment = "fixed"
    }
}

function newBarsStyle(newBars) {
    for (let i = 0; i < newBars.length; i++) {
        newBars[i].style.background = "transparent"
        newBars[i].querySelector("span").style.background = "transparent"
    }
}

function postStyle(posts) {
    for (let i = 0; i < posts.length; i++) {
        posts[i].style.background = "rgba(0,0,0," + opacity + ")"
    }
}

function postCaptionStyle(postCaption) {
    for (let i = 0; i < postCaption.length; i++) {
        postCaption[i].style.background = "transparent"
        postCaption[i].style.marginLeft = "5px"
    }
}

function interval(obj2) {
    snowFall(obj2.url)

    setInterval(() => snowFall(obj2.url), 2000)
}