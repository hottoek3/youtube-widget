(function() {
    class YoutubePlayerMywidget extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            this.render();
        }

        render() {
            const videoId = this.videoId || 'dQw4w9WgXcQ';
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    iframe {
                        width: 100%;
                        height: 100%;
                        border: none;
                    }
                </style>
                <iframe
                    src="https://www.youtube.com/embed/${videoId}"
                    allowfullscreen>
                </iframe>
            `;
        }
    }
    customElements.define("youtube-player-mywidget", YoutubePlayerMywidget);
})();
