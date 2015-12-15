# String Replace

Replace String using a fluent interface.

## Why?

Try to understand the expected output of the code below:

```javascript
replaceAll( "\\dir", "/dir", "/Dir\\dir", true );
```

You can't do it without looking into the documentation first to be sure.

* Is it replacing all backslashes to slashes?
* Is it replacing all slashes to backslashes?
* Does the guy who wrote this is aware of the [Principle_of_least_astonishment](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)?
* What does that [Boolean Trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html) means?

The problem is that the code is written once, but read many times. If you need
to look elsewhere to be able to understand something, then something is wrong.

Now try to understand the expected output of the code below:

```javascript
replace
  .all( "/dir" )
    .ignoreCase()
    .from( "/Dir\\dir" )
  .to( "\\dir" );
```

It's much easier because the code is able to document itself in a clear manner.
