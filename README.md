# javascript
Content Which Is Important to Note related to Javascript

# Why Javascript
  * make web pages more interesting and alive..
# How Javascript Works
  ![Image of Javasript Working](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)

# Data Types
  * 2 types. <br>
  * **dynamic typing** (so no need to give pre-defined type like int,string,float to any variable. in here value decide which type the variable should have..)
* Primitive (main first 3)
  * Number
  * String
  * Boolean
  * null
  * undefined  
* Non-Primitive
  * Objects <br>

**Number**<br>
  *purpose* : to store only Numeric value <br>
  *e.g.* : age, mobileNo, quantity etc. <br>
  ```javascript
  var age = 25; // here age variable data type is Number and it's store 25
  ```
**String**<br>
*purpose* : to store string type value or alphanumeric combination <br>
*e.g.* : idNo,email etc.
```javascript
var firstName = "Jash" // Always Use Quotes (either single or double)
```

**Boolean**<br>
it has only two values(either false or true)<br>
*purpose* : simply store either yes or no <br>
*e.g.* : isEnabled, very useful when we create function<br>
```javascript
var isButtonEnabled = true; // yes, Button is Enabled
```

**use Strict**<br>
why? - When it is located at the top of a script, the whole script works the “modern” way.<br>

**typeof** <br>
```javascript
var num = 1;
typeof num;   // Here Shows "number"
var str = "123";
typeof str;   // String
var x = null;  
typeof x;   // Here Shows "null"
```
<br>

# '='vs'=='vs'==='<br>
  * '=' : Assign Value.
  * '==' : Compare only values of variables
  * '===' : Compare Values as well as Types<br>
```javascript
var x = 5, y = 7, z = '5';      // Value Assign to Respect Variables
x == z      // true
x === z    // false
```
<br>

# Operators<br>
```javascript
var x = 5, y = 9, X='6', Y = '7';
var z = x + y;      // z = 14
var Z = X + Y;      // Z = '67' (concatenation of string)
z = X + x + y;      // z = '659' (first parameter is String so it treats other parameter as a string)
x = -x;             // Unary Minus (Now x = -5)
z = x - y;         // z = -5 -9 = -14
x = -x;            // now x = 5
x = +x;            // Unary Plus (doen't Affect) it Not affects on numbers.
X = +X;            // (Converts String to Number) now X = 6(not String), Unary Plus : Converts Everydatatype to Number datatype
z = x + X;         // z = 11
var str = '7';
z = +str + +Y;     // z= 14(first convert 'str' and 'Y' into Number After that perform binary addition)
```
<br>

# '++x' vs 'x++'<br>
```javascript
var x=0,y=0,a,b;
x++;                 // x becomes 1
++y;                 // y becomes 1
a = x++;             // here first a = x after x = x + 1 so, a = 1 and x = 2
b = ++y;             // here first y = y + 1 so now y = 2 and b = y so b = 2

// Check This 

var i = 1;
alert(i++ + i++ + i++);     // 1 + 2 + 3 = 6
i = 1;
alert(++i + ++i + ++i);     // 2 + 3 + 4 = 9
```
<br>

# Comparisons<br>
Result always **Boolean** either true or false.
```javascript
var result = 5 > 4; // assign the result of the comparison
alert( result ); // true

alert('a' > 'A');  // true Because lowercase character has greater index in the internal encoding table Javascript uses(Unicode)
```
<br>

When comparing values of different types, JavaScript converts the values to numbers.
```javascript
alert( '01' == 1 ); // true, string '01' becomes a number 1

// Crazy consiquenences

null == undefined      //true
null === undefined     // false
alert(null == 0)       // '==' for 'undefined' and 'null' is defined such that, without any conversions, they equal each other and don't equal anything else.
```
<br>

# Number Methods<br>
first of all in Number we Can Assign Hexadecimal,Octal,binary Values Through *Number* type.<br>
```javascript
var hex_val = 0xff;     // 255 (Decimal Form)
var bi_val = 0b11111111 // 255 
var octal_val = 0o377   // 255

// toString(base) method;
var x = 128;
var y = num.toString(16);   // Converts 128 into hexadecimal format

// Math Methods;
Math.floor(5.)   // Select Floor (Nearest Lower Integer Value)
Mat.ceil()
```
