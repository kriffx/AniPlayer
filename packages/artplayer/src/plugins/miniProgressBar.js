export default function miniProgressBar(art) {
    art.on('ready', () => {
        art.layers.add({
            name: 'mini-progress-bar',
            mounted($progressBar) {
                art.on('destroy', () => {
                    $progressBar.style.display = 'none';
                });

                if (art.constructor.USE_RAF) {
                    art.on('raf', () => {
                        $progressBar.style.width = `${art.played * 100}%`;
                    });
                } else {
                    art.on('video:timeupdate', () => {
                        $progressBar.style.width = `${art.played * 100}%`;
                    });
                }

                art.on('setBar', (type, percentage) => {
                    if (type === 'played') {
                        $progressBar.style.width = `${percentage * 100}%`;
                    }
                });
            },
        });
    });

    return {
        name: 'mini-progress-bar',
    };
}
