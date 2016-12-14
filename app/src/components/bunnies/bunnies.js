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
        })
        .catch(console.log);
    
    this.add = function(bunny) {
        bunnies.add(bunny)
            .then(saved => this.images.push(saved))
            .catch(console.log);
    };
    
    this.remove = function(bunny) {
        bunnies.remove(bunny._id)
            .then(() => {
                var index = this.images.indexOf(bunny);
                if (index > - 1) {
                    this.images.splice(index, 1);
                }
            })
            .catch(console.log);
    };

}

