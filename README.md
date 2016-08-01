# JavaScript String Replace

A simple, lightweight, functional JavaScript API for replacing a String like a boss

* No dependency
* Fluent interface

## Why?

[Code is read much more often than it is written, so plan accordingly](https://blogs.msdn.microsoft.com/oldnewthing/20070406-00/?p=27343/), any experienced developer knows that.

The above principle has been ignored for some trivial operations, such as replacing a String. **Not anymore.**

Try to understand the expected output of the code below:

```javascript
replaceAll( "bus", "road", "Get on the road", true );
```

It is impossible to understand the order and meaning of the arguments by looking at the code:

* Does the guy who wrote this is aware of the [Principle of least astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) to replace the first argument from the second? Is it replacing all "bus" to "road"? Or all "road" to "bus"?
* What does that [Boolean Trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html) means?

If you need to look elsewhere to be able to understand something, then something is wrong.

What if you could tell the computer to "Replace all occurrences ignoring the case from target with replacement"?

```javascript
const occurrences = "road";
const target = "Get on the Road";
const replacement = "bus";
const result = replace.all( occurrences ).ignoringCase().from( target ).with( replacement );
console.log(result); // => Get on the bus
```

Or, if you don't want to use variables:

```javascript
const result = replace.all( "road" ).ignoringCase().from( "Get on the Road" ).with( "bus" );
console.log(result); // => Get on the bus
```

Tcharam! This changes how you replace strings.

Stop using functions that are impossible to understand, the next developer say "Thanks".

## Installation

Install via npm:

```
$ npm install str-replace --save
```

Require in the file you want to use it:

```javascript
var replace = require("str-replace");
```

## Basic Usage

Replace the first dot to space:

```javascript
replace(".").from("John.Doe.Company").with(" "); // => "John Doe.Company"
```

Replace the first characters ignoring the case when matching:

```javascript
replace("hey").ignoringCase().from("HEY, DON'T SAY HEY!").with("YO"); // => "YO, DON'T SAY HEY!"
```

Replace all dots to spaces:

```javascript
replace.all(".").from("John.Doe.Company").with(" "); // => John Doe Company
```

Replace all characters ignoring the case when matching:

```javascript
replace.all("hey").ignoringCase().from("HEY, DON'T SAY HEY!").with("YO"); // => "YO, DON'T SAY YO!"
```

## API

### replace( occurrences )

Creates a `ReplaceDefinition` that will replace the first substring that
matches the `occurrences`.

Receives an `occurrences`, which is a `String` representing what is going to
be replaced.

**Example:**

```javascript
replace( "e" ); // => ReplaceDefinition
```

### replace.all( occurrences )

Creates a `ReplaceDefinition` that will replace all substrings that
matches the `occurrences`.

Receives an `occurrences`, which is a `String` representing what is going to
be replaced.

**Example:**

```javascript
replace.all( "dreaming" ); // => ReplaceDefinition
```

### ReplaceDefinition

Contains the strategy for the replace.

#### ignoringCase()

Creates a `ReplaceDefinition` that will ignore the case when matching the
`occurrences`.

**Example:**

```javascript
replace( "java" ).ignoringCase(); // => ReplaceDefinition
```

#### from( target )

Creates a `ReplaceOperation` that will replace the given `target`.

Receives a `target`, which is a `String` representing from where it
is going to be replaced.

**Example:**

```javascript
replace( "Thunder" ).from( "Thunderstorm" ); // => ReplaceOperation
```

### ReplaceOperation

Contains the algorithm representing what should be replaced.

#### with( replacement )

Creates a `String` replacing with the given `replacement` according to the
rules of the `ReplaceDefinition`.

Receives a `replacement`, which is a `String` representing the new substring to
be replaced.

**Example:**

```javascript
var result = replace.all( "Java" ).from( "Java is not JavaScript" ).with( "Type" );
console.log( result ); // => Type is not TypeScript
```

## Manual release steps

* Increment the "version" attribute of `package.json`
* Commit with the message "Release version x.x.x"
* Create version tag in git
* Create a github release
* Release on npm

## Authors

* [Fagner Brack](https://github.com/FagnerMartinsBrack)
