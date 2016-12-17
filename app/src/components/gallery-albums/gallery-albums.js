import template from './gallery-albums.html';

export default {
    template, 
    controller, 
    bindings: {
        album: '<',
        view: '<'
    }

};

controller.$inject = ['imageService'];
function controller (images) {
     
    images.get()
        .then(images => {
            this.images = images;
        })
        .catch(console.log);

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

    this.uiOnParamsChanged = params => {
        console.log(params);
        this.view = params.view;
    };

}

