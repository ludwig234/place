// ==UserScript==
// @name         place-overlay
// @namespace    https://gitlab.com/alifurkany/place-overlay
// @version      0.0.1
// @description  overlay colors over r/place
// @author       Ludwig234
// @match        https://hot-potato.reddit.com/embed*
// @grant        none
// ==/UserScript==

const w = 2000;
const h = 2000;
const img =
	"https://raw.githubusercontent.com/ludwig234/place/main/overlay.png";
if (window.top !== window.self) {
	window.addEventListener(
		"load",
		() => {
			document
				.getElementsByTagName("mona-lisa-embed")[0]
				.shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
				.shadowRoot.children[0].appendChild(
					(function () {
						const i = document.createElement("img");
						i.style = `width: ${w}px;height: ${h};position: absolute;left: 0;top: 0;image-rendering: pixelated;`;
						i.src = img;
						return i;
					})()
				);
		},
		false
	);
}
