const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image', () => {

    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if (connection.readyState === 1) drop();
        else {
            connection.on('open', drop);
        }
    });

    const request = chai.request(app);

    const bunnyAlbum = {
        name: 'Bunnies',
        description: 'All the bunnies fit to see'
    };

    const bunny = {
        name: "Mr. Bunny",
        description: "He is cute and fluffy",
        link: "http://www.url.com"
    }

    it('gets all ALBUMS when none have been created', done => {
        request
            .get('/api/albums')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });

    it('posts an ALBUM', done => {
        request
            .post('/api/albums')
            .send(bunnyAlbum)
            .then(res => {
                const album = res.body;
                assert.isOk(album._id);
                bunnyAlbum._id = album._id;
                bunny.albumId = album._id;
                bunnyAlbum.__v = album.__v;
                assert.deepEqual(bunnyAlbum, album);
                done(); 
            })
            .catch(done);
    });

    it('gets all ALBUM', done  => {
        request
            .get('/api/albums/')
            .then(res => {
                assert.deepEqual(res.body[0], bunnyAlbum);
                done();
            })
            .catch(done);
    });

    it('gets all IMAGES when empty', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body , []);
                done();
            })
            .catch(done);
    });

    it('posts IMAGE', done => {
        request
            .post('/api/images')
            .send(bunny)
            .then(res => {
                const image = res.body;
                assert.isOk(image._id);
                bunny._id = image._id;
                bunny.__v = image.__v;
                assert.deepEqual(image, bunny);
                done();
            })
            .catch(done);
    });

    it ('gets IMAGES', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body[0], bunny);
                done();
            })
            .catch(done);
    });

    it('gets IMAGE by id', done => {
        request
            .get(`/api/images/${bunny._id}`)
            .then(res => {
                assert.deepEqual(res.body, bunny);
                done();
            })
            .catch(done);
    });

    it('gets ALBUM with IMAGES', done => {
        request
            .get(`/api/albums/${bunnyAlbum._id}`)
            .then(res => {
                for (var key in bunnyAlbum) {
                    assert.equal(res.body[key], bunnyAlbum[key]);
                }
                assert.deepEqual(res.body.images[0], bunny);
                done();
            })
            .catch(done);
    });
});