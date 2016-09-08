## MDZZ: Such a motherfucking idiot
<img src="./assets/cover.jpg" width="500">
> Mom, what am I to you? 🙉🙉🙉

> You are MDZZ. 🌚🌚🌚

## Contents
- [Callback Hell](#callback-hell)
- [Non Alphanumeric](#non-alphanumeric)
- [Pointless If Statement](#pointless-if-statement)
- [Shittify](#shittify)
- [Zhuangbility](#zhuangbility)

## Callback Hell

``` javascript
KDANIMATE.prototype.play = function(){
  this.installBox();
  this.step1(function(){
    this.step2(function(){
      this.step3(function(){
        this.step4(function(){
          this.step5(function(){
            this.step6(function(){
              this.step7(function(){
                this.step8(function(){
                  this.step9(function(){
                    this.stepN(function(){
                      // N + 1 ......
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}
```
Source: http://www.kuaidadi.com/assets/js/animate.js - [Snippet](./snippets/callback-hell.js#L82)

## Non Alphanumeric
Write any JavaScript with 6 Characters: `[]()!+`
``` javascript
// Source
alert(1)

// Fucked
[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[
]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]
])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+
(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+
!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![
]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]
+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[
+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!!
[]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![
]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[
]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![
]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(!
[]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])
[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[+!+[]]+(
!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[
])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]])()
```
Source: https://github.com/aemkei/jsfuck - [Snippet](./snippets/non-alphanumeric.js)

One more style: [aaencode](http://utf-8.jp/public/aaencode.html), encode any JavaScript program to Japanese style emoticons (^_^)

## Pointless If Statement
``` javascript
// Eew
return kRegex.test(value);

// Beautified
if (kRegex.test(value)) {
  return true;
} else {
  return false;
}
```
Source: http://uglyjs.github.io/2011/09/07/pointless-if - [Snippet](./snippets/pointless-if-statement.js)

## Shittify
So you can honestly say your code is full of shit.

``` bash
$ ./bin/shittifyjs -m

(function () {
  var a = 'this';
  var b = 'code';
  var c = 'is a pile';
  var d = 'of shit';
  return a + b + c + d;
})()

(function(){var💩="this";var💩💩="code";var💩💩💩="is a pile";var💩💩💩💩="of shit";return💩+💩💩+💩💩💩+💩💩💩💩})();
```
Source: https://github.com/alexkuz/shittify-js - [Snippet](./snippets/shittify.js)

## Zhuangbility

``` javascript
// Boolean
!!'fuck'

// ParseInt
~~3.14159 === parseInt(3.14159)

// Hex
(~~(Math.random()*((1<<24)-1))).toString(16)+'00000').substring(0,7)

// <<
parseInt('1000000000000000000000000', 2) === (1 << 24)
Math.pow(2,24) === (1 << 24)
```
Source: https://segmentfault.com/a/1190000004972445 - [Snippet](./snippets/zhuangbility.js)

## Contributing
Any shit is welcome here, fell free to open a PR : )
