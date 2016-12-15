describe( ' image service', () => {
    const {assert} = chai;

    beforeEach(
        angular.mock.module('services', {apiUrl: '/api'})
    );

    let $httpBackend = null, imageService = null;

    beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
        $httpBackend = _$httpBackend_;
        imageService = _imageService_;
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('gets images', done => {
        const images = [1, 2, 3];

        $httpBackend
            .expectGET('/api/images')
            .respond(images);

        imageService.get()
            .then(allImages => {
                assert.deepEqual(allImages, images);
                done();
            })
            .catch(done);
        $httpBackend.flush();
    });
})