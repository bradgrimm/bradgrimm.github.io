---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<button id="fullscreenBtn" onclick="goFullscreen()" style="position: fixed; top: 10px; right: 10px; z-index: 1000;">Fullscreen</button>

<script>
function goFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
}
</style>
