import template from './images.html';

export default {
    template, 
    controller
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
    
    this.add = function(image) {
        images.add(image)
            .then(saved => this.images.push(saved))
            .catch(console.log);
    };

    this.addAlbum = function(album) {
        images.addAlbum(album)
            .then(saved => this.albums.push(saved))
            .catch(console.log);
    };
    
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

}

