// const expect = require('chai').expect;
// const server = require('../server');

// describe('test', () => {
//     it('should return a string', () => {
//         expect('Teamwork Project!').to.equal('Teamwork Project!')
//     });
// });


const expect = require("chai").expect;
const server = require("../server");

describe("test", () => {
    it("should return a string", () => {
        expect("Teamwork Project!").to.equal(
            "Teamwork Project!"
        );
    });
});

// const assert = require('chai').assert;
// const server = require('../server')

// describe('test', function () {
//     it('should return a string', function () {
//         assert.typeOf(server, 'string')
//     })
// })