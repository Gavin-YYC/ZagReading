// 类型检测
// from sea.js
function isType ( type ) {
    return function ( obj ) {
        return {}.toString.call( obj ) == "[object " + type + "]";
    }
}

var isObject = isType('Object');
var isString = isType('String');
var isArray  = isType('Array');
var isFunction = isType('Function');
var isUndefined = isType('Undefined');


console.log( isObject( {} ) );
console.log( isObject( [] ) );
console.log( isObject( 12 ) );

// 唯一cid
var _cid = 0;
function cid () {
    return _cid++;
}
