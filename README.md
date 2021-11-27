# bootstrap-nav-tab-scrollable


## Synopsis

Simple horizontally scrollable nav tab for Bootstrap 3.0 (good for mobile sites), i.e. for product images on m-commerce. 

Works with touch events, example image: [http://imgur.com/3y4qoje](http://imgur.com/3y4qoje) 


## Code Example

Just use the normal Bootstrap Nav-tab construction, adding the `horizontal-scrollable-tabs` and the `nav-tabs-horizontal` classes for the desired style effect.  

It's also possible to add arrows for extra control, but touch events will work to scroll horizontally the tab.

```html
<div class="row">
  <div class="col-xs-12">
    <div id="js_image_selection" class="horizontal-scrollable-tabs">
      <!-- Added for controls (will be invisible on bigger viewports) - touch/swipe/dragging does work though -->
      <div class="scroller arrow-left"><i class="fa fa-arrow-left"></i></div> 
      <div class="scroller arrow-right"><i class="fa fa-arrow-right"></i></div>
      <div class="horizontal-tabs">
        <!-- nav-tabs-horizontal added for the style -->
        <ul role="tablist" class="nav nav-tabs nav-tabs-horizontal">
          <!-- Normal bootstrap tabs -->
          <li role="presentation" class="active"><a href="#image01" data-toggle="tab">Tab 1</a></li>
          <li role="presentation"><a href="#image02" data-toggle="tab">Tab 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

## Motivation

Whilst developing a mobile commerce website there was the need for a product gallery that had such behavior, unable to find a working component decided to build one myself.

## Installation

Simply apply the stylesheet and the js to your project and import it on your HTMl as such:

On the header the StyleSheet

```html
<link href="bootstrap-nav-tab-scrollable.css" rel="stylesheet"> 
```

Before closing the body import and execute:

```html
<!-- Import the component -->
<script src="bootstrap-nav-tab-scrollable.js"></script>
<!-- Execute the plugin -->
<script type="text/JavaScript">
  $("#js_image_selection").horizontalTabs();
</script>    
```

## API Reference

Currently, there is only one option, to initialize the horizontal tabs. As such:

### Initialize

Call it after the element was rendered.

```javascript
$("#ID_OF_ELEMENT").horizontalTabs();
```


## Contributors

Feel free to include any features, issues, bug fixes, among other contributions, every help is welcome and very much appreciated.

## License

The MIT License (MIT)

Copyright (c) 2015 Lucas Lazaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
