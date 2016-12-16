import template from './add-image.html';

export default {
    template,
    bindings: {
        add: '<',
        images: '<',
        albums: '<',
    },
    controller
};

function controller() {

    this.reset = function() {
        this.name = '';
        this.description = '';
        this.link = '';
    };

    this.reset();

    this.addImage = function() {
        var image = {
            name: this.name,
            description: this.description,
            link: this.link,
            albumId: this.albumId
        };

        this.add(image);
        
        this.reset();
    };
}