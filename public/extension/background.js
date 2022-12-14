/// <reference types="chrome"/>

chrome.contextMenus.create({
    id: "speak_with_blakify",
    title: "Speak with Blakify",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let selected_text = info.selectionText;

    chrome.storage.local.get(["csrf_token"]).then(async (result) => {
        const formData = new FormData();

        formData.append("csrf_test_name", result.csrf_token);
        formData.append("tts_text[]", selected_text);
        formData.append("selected_block[]", 1);
        formData.append("tts_change_language[]", "QETe6Cqir0e74644212548fbf123b7cc7163170efPOUtLjiY0");
        formData.append("tts_ssml_volume[]", "default");
        formData.append("tts_ssml_spk_rate[]", "default");
        formData.append("tts_ssml_pitch_rate[]", "default");
        formData.append("tts_filter_voice[]", "neural");
        formData.append("synthesize_type[]", "preview");
        formData.append("tts_ssml_style[]", "default");
        formData.append("tts_text_used_value", selected_text.length);
        formData.append("ssml_mode", "0");

        const url = "https://blakify.com/tts/start_action_new/";
        const resp = await fetch(url, {
            body: formData,
            method: "POST",
            headers: {
                'X-Requested-With': "XMLHttpRequest"
            }
        });

        console.log(selected_text);
        console.log(await resp.text());
    });

})

chrome.runtime.onMessage.addListener(function (request) {
    if (request.action == "csrf_element" && request.csrf_token) {
        chrome.storage.local.set({ "csrf_token": request.csrf_token })
    }
});