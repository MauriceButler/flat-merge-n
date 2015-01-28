var test = require('tape'),
    flatMergeN = require('../');

test('standard', function(t){
    t.plan(1);

    var a = {a: 1},
        b = {b: 2},
        c = {c: 3};

    t.deepEqual(flatMergeN(a, b, c), {a: 1, b: 2, c: 3});
});

test('override', function(t){
    t.plan(1);

    var a = {a: 1},
        b = {a: 2},
        c = {a: 3};

    t.deepEqual(flatMergeN(a, b, c), {a: 3});
});

test('falsy overrides', function(t){
    t.plan(1);

    var a = {a: 1},
        b = {a: 2},
        c = {a: null};

    t.deepEqual(flatMergeN(a, b, c), {a: null});
});

test('null target', function(t){
    t.plan(1);

    var a = {a: null},
        b = {a: 2},
        c = {a: 3};

    t.deepEqual(flatMergeN(a, b, c), {a: 3});
});

test('null source', function(t){
    t.plan(1);

    var a = {a: 1},
        b = {a: 2},
        c = null;

    t.deepEqual(flatMergeN(a, b, c), {a: 2});
});

test('null everything', function(t){
    t.plan(1);

    var a = null,
        b = null,
        c = null;

    t.deepEqual(flatMergeN(a, b, c), {});
});

test('only own properties', function(t){
    t.plan(1);

    var a = {
            a: 1,
            __proto__: {
                aa: 11
            }
        },
        b = {
            b: 2
        },
        c = {
            c: 3,
            __proto__: {
                cc: 33
            }
        };

    t.deepEqual(flatMergeN(a, b, c), {a: 1, b: 2, c: 3});
});