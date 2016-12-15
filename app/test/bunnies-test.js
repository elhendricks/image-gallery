describe('images component', () => {
    const {assert} = chai;

    angular.mock.module.sharedInjector();

    before(angular.mock.module('components'));

    let $component = null;
    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {
        const images = [
            {name: 'Mr. BunBun', link: 'http://images.com/cutepic_1', description: 'Mr. BunBun in repose'}, 
            {name: 'Mr. Fluffernutter', link: 'http://images.com/cutepic_2', description: 'Mr. Fluffernutter in repose'}
        ];

        const image = {name: 'Mr. FlopFlop', link: 'http://images.com/cutepic_3', description: 'Mr. FlopFlop in repose'}

        const _id = 123;

        const imageService = {
            get() {
                return Promise.resolve(images);
            }
        };

        let component = null;

        before(() => {
            component = $component('images', {imageService});
        });

        it('loads images', done => {
            setTimeout(() => {

                assert.equal(component.images, images);
                done();
            })
        })
    });
})