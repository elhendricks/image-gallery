const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('images', () => {

    before(done => {
        const drop = () => {
            connection.db.dropDatabase(done);}
            if (connection.readyState === 1) drop();
            else {
                connection.on('open', drop);
            }
    });

    const request = chai.request(app);

    it('gets All when empty', done => {
        request
            .get('/api/images')
            .then(res => {
                assert.deepEqual(res.body , []);
                done();
            })
            .catch(done);
    })

    const fluffy = {name: 'image', link: '<url>', description: 'description'};
    it('posts', done => {
        request
            .post('/api/images')
            .send(fluffy)
            .then(res => {
                const image = res.body;
                assert.isOk(image._id);
                fluffy._id = image._id;
                fluffy.__v = image.__v;
                
                assert.deepEqual(image, fluffy);
                done();
            })
            .catch(done);
    })
})