function showConfirmation() {
    var userConfirmation = confirm("このサイトのHTML、CSSコードがGitHub上で観覧できます");
    if (userConfirmation) {
        window.open("https://github.com/mintson0517/usc_html-css", "newwindow");
    } else {
        // ユーザーがキャンセルした場合、何もしない
    }
}