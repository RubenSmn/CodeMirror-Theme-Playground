export const docs: { [index: string]: string } = {
  'javascript': `const btn = document.getElementById('btn');
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
  'c++': `#include <iostream>
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
  'css': `html {
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
  'go': `struct config {
  port int
}

func main() {
  var cfg config

  flag.IntVar(&cfg.port, "port", 4000)
  flag.Parse()

  // Start the web server.
  addr := fmt.Printf(":%d", cfg.port)
  log.Fatal(http.ListenAndServe(addr, nil))
}`,
  'java': `public class Main {
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
  'python': `import os

"""A string"""

# A comment

class Foo (object):
  def __init__(self):
    num = 42
    print(num)

  @property
  def foo(self):
    retun 'bar'`,
  'markdown': `
An h1 header
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
};
