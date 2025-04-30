# Konbini
A library that makes calling up elements by ID easier than ever. And now, it's easier to have multiple elements with the same ID!

## Getting elements by ID
### Raw
```js
var myElement = document.getElementById("myElement").innerText = "Hello!";
```

### With Konbini
```js
$myElement.innerText = "Hello!";
```

## Getting elements by its ID from its parent Node
(It's assumed that two elements with different IDs both have a child with the `wxyz` ID.)

### Raw
```js
document.querySelector('#def #wxyz').child.remove();
```

### With Konbini
```js
$def.$wxyz.remove();
```

## Getting elements with spaces in their ID
### Raw
```js
document.getElementById("funny image").src = 'meme.gif';
```

### With Konbini
```js
window["$funny image"].src = 'meme.gif';
```

## Getting elements by an ID with spaces in it from its parent Node
### Raw
```js
var parent = document.getElementById('parent');
// `Element` doesn't support `getElementById`
var all = Array.from(parent.querySelector('*'));
for(var i = 0; i < all.length; i++) {
    if(all[i].id === 'please remove me') {
        all[i].remove();
        break;
    }
}
```

### With Konbini
```js
$parent['$please remove me'].remove();
```

## Previews
### Shortcuts - Coming in v2.0.0!
```js
                                 document   =>   $dom
          document.querySelector('query')   =>   $dom.qs('.query')
document.getElementsByClassName('.class')   =>   $dom.class('.class')
            document.getElementById('id')   =>   $dom.$id / $dom['$id']
     document.getElementsByTagName('div')   =>   $dom.div
```
