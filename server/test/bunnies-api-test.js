const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('bunnies', () => {

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
            .get('/api/bunnies')
            .then(res => {
                assert.deepEqual(res.body , []);
                done();
            })
            .catch(done);
    })

    const fluffy = {name: 'bunny', link: '<url>', description: 'description'};
    it('posts', done => {
        request
            .post('/api/bunnies')
            .send(fluffy)
            .then(res => {
                const bunny = res.body;
                assert.isOk(bunny._id);
                fluffy._id = bunny._id;
                fluffy.__v = bunny.__v;
                
                assert.deepEqual(bunny, fluffy);
                done();
            })
            .catch(done);
    })
})