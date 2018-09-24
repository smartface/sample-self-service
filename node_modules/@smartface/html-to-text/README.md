[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/smartface/html-to-text/blob/master/LICENSE)
![npm version](https://img.shields.io/npm/v/@smartface/html-to-text.svg?style=flat)

# html-to-text

You can convert html string to attributed strings for your textview component with this module

## Installation
    
    npm i --save @smartface/html-to-text
    
## Usage & Example

```javascript
    const TextView = require('sf-core/ui/textview');
    const AttributedString = require("sf-core/ui/attributedstring");
    const createAttributedStrings = require("@smartface/html-to-text");
    const propFactory = require("@smartface/contx/lib/smartface/sfCorePropFactory").default;
    
    var textView = new TextView();
    var htmlSource = "<span style=\"font-size: 24px; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\"><span style=\"font-family: Nunito-LightItalic; font-size: 24px; background-color: transparent; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\">Your </span><font face=\"ios-Default-Bold\" style=\"font-size: 24px; font-family: ios-Default-Regular; background-color: transparent; color: rgb(0, 0, 0); text-decoration-color: rgb(0, 0, 0);\">attributed </font><span style=\"text-decoration-line: underline; color: rgb(139, 87, 42); font-size: 24px; font-family: ios-Default-Regular; background-color: transparent; text-decoration-color: rgb(0, 0, 0);\">Stri<span style=\"color: rgb(139, 87, 42); text-decoration-line: underline; text-decoration-color: rgb(0, 0, 0); font-size: 24px; font-family: ios-Default-Regular; background-color: transparent;\">ngs</span></span></span><div><span style=\"font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; text-decoration-color: rgb(0, 0, 0); font-size: 24px; font-family: ios-Default-Regular; background-color: rgb(189, 16, 224);\">second</span></span></span></div><div><span style=\"font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; font-size: 16px; font-family: ios-Default-Regular; text-decoration-color: rgb(0, 0, 0);\"><span style=\"text-decoration-line: underline; text-decoration-color: rgb(0, 0, 0); font-size: 16px; font-family: ios-Default-Regular; background-color: rgb(189, 16, 224); color: rgb(248, 231, 28);\">Third</span></span></span></div>";
    var attributedStrings = createAttributedStrings(htmlSource);
    textView.attributedText = attributedStrings.map(s => new AttributedString(propFactory(s)));
```

## Limitations & Rules

1. If you want to write **newline** character, you can use these tags **\<br\>**, **\<div\>** or use "\n".
    - "attributed \<br\> string"
    - "attributed \<div\> string\</div\>"
    - "attributed \n string"

2. You can use following html tags 
    - **br** ➡️ newline
    - **div** ➡️ newline and general tag for styling
    - **span** ➡️ general tag for styling
    - **font** ➡️ has attribute as color(**color**), size(**font-size**) and face(**font-family**)
    - **b** ➡️ bold style
    - **u** ➡️ underline style
    - **i** ➡️ italic style 

3. You can only use following css styles
    - font.family-style ➡️  **font-family** ➡️ "font-family: Nunito-ExtraBold;".
    - font.italic    ➡️    **font-style** ➡️ "font-style: italic;".
    - font.size      ➡️    **font-size** ➡️ "font-size: 24px;" (24pt, 24dp)
    - font.bold       ➡️   **font-weight** ➡️ ️"font-weight: bold;".
    - foregroundColor  ➡️  **color** ➡️ "color: rgb(127, 125, 127);".
    - backgroundColor  ➡️  **background-color** ➡️ "background-color: rgb(255, 125, 127);".
    - underline       ➡️   **text-decoration-line** ➡️ "text-decoration-line: underline;".
    - ios.underlineColor ➡️ **text-decoration-color** ➡️ "text-decoration-color: rgba(255, 125, 128);".

4. ⚠️ If you give **font-family** style, this style can overwrite **font-weight** and **font-style**.
    - font-family: **Nunito-ExtraLightItalic**; ➡️ this overwrite **font-weight** as normal.

