chrome.contextMenus.create({
    id: "speak_with_blakify",
    title: "Speak with Blakify",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let selected_text = info.selectionText;
    const formdata = new FormData()
    formdata.append("tts_text[]", selected_text);
    const url = "https://blakify.com/tts/start_action_new/";
    const resp = await fetch(url, {
        body: formdata,
        method: "POST",

    });
    console.log(selected_text);
    console.log(await resp.text());
})