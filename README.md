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

**'='vs'=='vs'==='**<br>
  * '=' : Assign Value.
  * '==' : Compare only values of variables
  * '===' : Compare Values as well as Types<br>
```javascript
var x = 5, y = 7, z = '5';      // Value Assign to Respect Variables
x == z      // true
x === z    // false
```
