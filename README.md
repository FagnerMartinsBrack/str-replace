# String Replace

Replace String using a fluent interface.

## Why?

Try to understand the expected output of the code below:

```javascript
replaceAll( "token", "tokentoken", "tokentoken", true );
```

You can't do it without looking into the documentation first. The problem is that
the code is written once, but read many times. If you need to look to the
documentation to be able to understand something, then something is wrong.

Now try to understand the expected output of the code below:

```javascript
replace
  .all( "token" )
    ignoreCase()
    from( "tokentoken" )
  to( "tokentoken" );
```

It's much easier because the code is able to document itself.
