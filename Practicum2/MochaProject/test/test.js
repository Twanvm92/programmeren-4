/**
 * Created by twanv on 8-5-2017.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');
var should = chai.should();

chai.use(chaiHttp);

describe('API Test', function() {
    it('Test GET /api/v2/recipes', function(done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/info', function(done) {
        chai.request(server)
            .get('/api/v2/info')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipes/:number', function(done) {
        chai.request(server)
            .get('/api/v2/recipes/2')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipe?category=Salad', function(done) {
        chai.request(server)
            .get('/api/v2/recipe?category=Salad')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});
