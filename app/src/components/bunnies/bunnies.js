import template from './bunnies.html';

export default {
    template, 
    controller
};

controller.$inject = ['bunnyService'];
function controller (bunnies) {
    
    bunnies.get()
        .then(bunnies => {
            this.images = bunnies;
        });
}

