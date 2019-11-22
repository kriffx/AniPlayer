import { queryAll } from './utils';
import Component from './utils/component';

export default class Info extends Component {
    constructor(art) {
        super(art);

        const {
            template: { $infoPanel, $infoClose, $video },
            events: { proxy },
        } = art;

        proxy($infoClose, 'click', () => {
            this.show = false;
        });

        let timer = null;
        const types = queryAll('[data-video]', $infoPanel);

        art.on('destroy', () => {
            clearTimeout(timer);
        });

        function loop() {
            types.forEach(item => {
                const value = $video[item.dataset.video];
                item.innerHTML = typeof value === 'number' ? value.toFixed(2) : value;
            });
            timer = setTimeout(() => {
                loop();
            }, 1000);
        }

        art.on('info:toggle', value => {
            clearTimeout(timer);
            if (value) {
                loop();
            }
        });
    }
}
