"use strict";
var __imns = function(){ return window; }
describe("isBoolean Test Suite", function(){
    var adr = __imns();
    var obj = {}, arr = [];
    it("isBoolean is a function", function(){ expect(typeof adr.isBoolean === 'function').toBe(true); });
    it("isBoolean: {Boolean} = true", function(){ expect(adr.isBoolean(true)).toBe(true); });
    it("isBoolean: {Boolean} = false", function(){ expect(adr.isBoolean(true)).toBe(true); });
    it("isBoolean: {String} = false", function(){ expect(adr.isBoolean('true')).toBe(false); });
    it("isBoolean: {Number} = false", function(){ expect(adr.isBoolean(0)).toBe(false); });
    it("isBoolean: {Number} = false", function(){ expect(adr.isBoolean(1)).toBe(false); });
    it("isBoolean: true expression = true", function(){ expect(adr.isBoolean((1 == 1))).toBe(true); });
    it("isBoolean: false expression = true", function(){ expect(adr.isBoolean((1 == 2))).toBe(true); });
    it("isBoolean: {undefined} = false", function(){ expect(adr.isBoolean(undefined)).toBe(false); });
});
