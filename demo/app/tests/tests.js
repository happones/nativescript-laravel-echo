var LaravelEcho = require("nativescript-laravel-echo").LaravelEcho;
var laravelEcho = new LaravelEcho();

describe("greet function", function() {
    it("exists", function() {
        expect(laravelEcho.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(laravelEcho.greet()).toEqual("Hello, NS");
    });
});