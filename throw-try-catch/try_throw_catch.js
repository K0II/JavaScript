'use strict';

var value = '_2sda';
var re = /[0-9a-zA-z\_]{9,16}/;
try {
  //document.getElementById("demo").value;    //  [ReferrenceError: document is not defined]
  if( value === '' ) throw 'Empty';
  if( !re.test(value) ) throw 'Can`t match';
  console.log('ok');
}
catch(err) {
  console.log(err);
}
