chrome.runtime.onMessage.addListener(function (request) {
    if (request.action == "read_csrf_token") {
        chrome.runtime.sendMessage({
            action: "csrf_element",
            csrf_token: document.querySelector('input[name="csrf_test_name"]').value
        });
    }
});

chrome.runtime.onConnect.addListener(function () {
    chrome.runtime.sendMessage({
        action: "csrf_element",
        csrf_token: document.querySelector('input[name="csrf_test_name"]').value
    });
})

if (document.querySelector('input[name="csrf_test_name"]')) {
    chrome.runtime.sendMessage({
        action: "csrf_element",
        csrf_token: document.querySelector('input[name="csrf_test_name"]').value
    });
}
