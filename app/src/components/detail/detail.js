import template from './detail.html';
import styles from './detail.scss';

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