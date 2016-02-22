# JavaScript String Replace

A simple, lightweight, functional JavaScript API for replacing a String like a boss

* No dependency
* Fluent interface

## Why?

Try to understand the expected output of the code below:

```javascript
replaceAll( "\\dir", "/dir", "/Dir\\dir", true );
```

You can't understand the order and meaning of the arguments without looking into the documentation first to make sure it does what you want.

* Is it replacing all backslashes to slashes?
* Is it replacing all slashes to backslashes?
* Does the guy who wrote this is aware of the [Principle_of_least_astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment) to replace the first argument from  the second?
* What does that [Boolean Trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html) means?

The problem is that the code is written once, but read many times. If you need
to look elsewhere to be able to understand something, then something is wrong.

What if you could tell the computer to "Replace all occurrences ignoring the case from target with replacement"?

```javascript
replace
  .all( "/dir" )
  .ignoringCase()
  .from( "/Dir\\dir" )
  .with( "\\dir" );
```

Tcharam! This changes how you replace strings.

Stop being imperative and start being functional, the next developer say "Thanks".

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
var result = replace( "Java" )
  .from( "Java is not JavaScript" )
  .with( "Type" );
console.log( result ); // => Type is not TypeScript
```
