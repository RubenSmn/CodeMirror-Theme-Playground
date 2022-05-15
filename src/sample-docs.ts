import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { css } from "@codemirror/lang-css";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { markdown } from "@codemirror/lang-markdown";
import { LanguageSupport } from "@codemirror/language";

export const docs: { [index: string]: { doc: string, lang: LanguageSupport } } = {
  'javascript': {
    doc: `const btn = document.getElementById('btn');
let count = 0;
function render() {
  btn.innerText = \`Count: \$\{count}\`;
}

btn.addEventListener('click', () => {
  // count from 1 to 10.
  if (count < 10) {
    count += 1;
    render();
  }
});`,
    lang: javascript(),
  },
  'c++': {
    doc: `#include <iostream>
#include <fstream>

int main() {
  string line;
  ifstream file;

  file.open("myfile.txt");
  
  // Read file line by line.
  while(getline(myfile, line)) {
    prinf("%s", line.c_str());
  }
}`,
    lang: cpp(),
  },
  'css': {
    doc: `html {
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}

*,
*:before,
*:after: {
  box-sizing: border-box;
}`,
    lang: css(),
  },
  'php': {
    doc: `<?php
class Car {
  function Car() {
    $this->model = "Tesla";
  }
}

// create an object
$Lightning = new Car();

// show object properties
echo $Lightning->model;
?>`,
    lang: php(),
  },
  'java': {
    doc: `public class Main {
  int num = 1;
  boolean bool = true;
  String foo = "bar";

  static void printMessage() {
    System.out.println("Hello World!");
  }

  public static void main(String[] args) {
    // Print message to stdout
    printMessage();
  }
}`,
    lang: java(),
  },
  'python': {
    doc: `import os

"""A string"""

# A comment

class Foo (object):
  def __init__(self):
    num = 42
    print(num)

  @property
  def foo(self):
    retun 'bar'`,
    lang: python(),
  },
  'markdown': {
    doc: `An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists look like:

* this one
* that one
* the other one

Note that --- not considering the asterisk --- the actual text content starts at 4-columns in.

> Block quotes are written like so.

An h2 header
------------

Here's a numbered list:
1. first item
2. second item
3. third item

Here is a [link](example.com)

~~~js
const hello = () => {
  console.log('world');
};
~~~
`,
    lang: markdown(),
  },
};
