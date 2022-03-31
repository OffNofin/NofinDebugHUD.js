# NScreenConsole.js

<p>A very simple plug and play solution to get a simple on screen console similar to the unreal engine one.</p>

<p>You just need to add the files to your directory and to link the stylesheet and the JS file, no more code adaptation needed.</p> 

<p>Then just call the function anywhere you want :</p>

```JS
printString("Your string" or data, "the line index", "the color of the line in CSS format(optional)");
```

**<p>Example : </p>**

```JS
printString("Hello world", 0, "blue"); //the absence of specified color will result in a green color
```

**<p>Illustrated example : </p>**

|Snippet|Result|
|:-:|:-:|
|![NScreenConsoleSnippet](https://user-images.githubusercontent.com/57896051/161060404-1807c529-27bf-414d-8948-8a72e70ca1fa.png)|![NScreenConsole Demo](https://user-images.githubusercontent.com/57896051/161060419-cc3f0107-ed48-4336-adaa-106c84c327cc.gif)|

**<p>Fullscreen result : </p>**

![NScreenConsole Demo](https://user-images.githubusercontent.com/57896051/161062038-bf775ea3-e3a4-4cbb-9c22-d9f0a60d75d3.png)

<p>You can also hide the empty line by updating the "showEmptyLines" variable on line 3</p>

```JS
var showEmptyLines = false;
```
