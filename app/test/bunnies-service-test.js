describe( ' bunny service', () => {
    const {assert} = chai;

    beforeEach(
        angular.mock.module('services', {apiUrl: '/api'})
    );

    let $httpBackend = null, pirateService = null;

    beforeEach(angular.mock.inject((_bunnyService_, _$httpBackend_) => {
        $httpBackend = _$httpBackend_;
        bunnyService = _bunnyService_;
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets bunnies', done => {
        const bunnies = [1, 2, 3];

        $httpBackend
            .expectGET('/api/bunnies')
            .respond(bunnies);

        bunnyService.get()
            .then(allBunnies => {
                assert.deepEqual(allBunnies, bunnies);
                done();
            })
            .catch(done);
        $httpBackend.flush();
    });
})