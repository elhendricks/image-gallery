import template from './detail.html';
import styles from './detail.scss';

export default {
    template,
    bindings: {
        images: '='
    }, 
    controller
};

function controller() {
    this.styles = styles;
}