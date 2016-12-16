import template from './add-album.html';

export default {
    template,
    bindings: {
        addAlbum: '=',
        albums: '<',
    },
    controller
};

function controller() {

    this.reset = function() {
        this.name = '';
        this.description = '';
    };

    this.reset();

    this.addNewAlbum = function() {
        var album = {
            name: this.name,
            description: this.description,
        };

        this.addAlbum(album);
        
        this.reset();

    };
}