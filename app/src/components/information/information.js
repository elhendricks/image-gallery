import template from './information.html';
import styles from './information.scss';

export default {
    template,
    bindings: {
        image: '='
    },
    controller
};

function controller() {
    this.styles = styles;
}
