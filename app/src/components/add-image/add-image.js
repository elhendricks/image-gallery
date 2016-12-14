import template from './add-image.html';

export default {
    template,
    bindings: {
        add: '<',
        images: '<'
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
        // var image = {
        //     name: this.name,
        //     description: this.description,
        //     link: this.link 
        // };

        this.add({
            name: this.name,
            description: this.description,
            link: this.link 
        });
        console.log('Made it to AddImage');
        // this.reset();
    };
}