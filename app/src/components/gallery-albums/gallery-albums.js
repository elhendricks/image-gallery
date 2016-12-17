import template from './gallery-albums.html';

export default {
    template, 
    controller, 
    bindings: {
        album: '<',
        view: '<'
    }

};

controller.$inject = ['imageService', '$state'];
function controller (images, $state) {
     
    // images.get()
    //     .then(images => {
    //         this.images = images;
    //     })
    //     .catch(console.log);

    images.getAlbums()
        .then(albums => {
            this.albums = albums;
        });

    this.remove = function(image) {
        images.remove(image._id)
            .then(() => {
                var index = this.images.indexOf(image);
                if (index > -1) {
                    this.images.splice(index, 1);
                }
            })
            .catch(console.log);
    };

    this.updateAlbum = function() {
        $state.go($state.current.name, {album: this.albumId});
    };

    this.uiOnParamsChanged = params => {
        this.album = params.album;
        console.log(this.album);
        if (this.album !== 'all') images.getAlbum(this.album);
        else images.getAlbums();
    };

}

