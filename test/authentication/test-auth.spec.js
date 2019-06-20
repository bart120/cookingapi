"use strict"
let expect = require('chai').expect;
let request = require('request');

it('test auth without param', function (done) {
    request('http://localhost:8888/authentication', function (error, response, body) {
        expect(response.statusCode).equal(404);
        // expect(body).contains('token');
        done();
    });
});

it('test auth with param', function (done) {
    const obj = { login: 'sfont@exelcia-it.com', password: 'Wxcvbn123*' };

    request.post({ url: 'http://localhost:8888/authentication', json: obj }, function (err, resp, body) {
        expect(resp.statusCode).equal(200);
        expect(body.token).not.empty;
        done();
    });
});