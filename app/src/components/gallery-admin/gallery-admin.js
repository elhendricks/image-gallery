import template from './gallery-admin.html';

export default {
    template, 
    controller, 
};

controller.$inject = ['imageService'];
function controller (images){

    images.getAlbums()
        .then(albums => {
            this.albums = albums;
        });

    this.add = function(image) {
        images.add(image)
            .catch(console.log);
    };

    this.addAlbum = function(album) {
        images.addAlbum(album)
            .then(saved => this.albums.push(saved))
            .catch(console.log);
    };
}
