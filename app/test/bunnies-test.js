describe('bunnies component', () => {
    const {assert} = chai;

    angular.mock.module.sharedInjector();

    before(angular.mock.module('components'));

    let $component = null;
    before(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {
        const bunnies = [
            {name: 'Mr. BunBun', link: 'http://bunnies.com/cutepic_1', description: 'Mr. BunBun in repose'}, 
            {name: 'Mr. Fluffernutter', link: 'http://bunnies.com/cutepic_2', description: 'Mr. Fluffernutter in repose'}
        ];

        const bunny = {name: 'Mr. FlopFlop', link: 'http://bunnies.com/cutepic_3', description: 'Mr. FlopFlop in repose'}

        const _id = 123;

        const bunnyService = {
            get() {
                return Promise.resolve(bunnies);
            }
        };

        let component = null;

        before(() => {
            component = $component('bunnies', {bunnyService});
        });

        it('loads bunnies', done => {
            setTimeout(() => {

                assert.equal(component.images, bunnies);
                done();
            })
        })
    });
})