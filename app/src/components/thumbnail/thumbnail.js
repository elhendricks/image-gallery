import template from './thumbnail.html';
import styles from './thumbnail.scss';

export default {
    template,
    bindings: {
        images: '=',
        image: '=',
        remove: '<'
    },
    controller
    
};

function controller() {
    this.styles = styles;

    this.removeImage = function(image) {

        this.remove(image);
    };
}