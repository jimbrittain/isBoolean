"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isBoolean' in adr)){
    adr.isBoolean = function(boo){ return (boo !== undefined && (boo === true || boo === false)); };
}
