import python from '../assets/python.jpg';
import cpp from '../assets/cp.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import react from '../assets/react.png';
import js from '../assets/js.png';

const languageData = [
  {
    name: 'Python',
    imageSrc: python,
    boilerplate: 'print("Hello, World! from Pyhon")',
    output: 'Hello World! from Python'
  },
  {
    name: 'C++',
    imageSrc: cpp,
    boilerplate: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World! from c++";\n  return 0;\n}',
    output: 'Hello World! from c++'
  },
  {
    name: 'HTML',
    imageSrc: html,
    boilerplate: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello, World! from HTML</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>',
    output: 'Hello World! from HTML'
  },
  {
    name: 'Java',
    imageSrc: java,
    boilerplate: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World! from Java");\n  }\n}',
    output: 'Hello World! from Java'
  },
  {
    name: 'React',
    imageSrc: react,
    boilerplate: 'import React from "react";\nimport ReactDOM from "react-dom";\n\nfunction App() {\n  return <h1>Hello, World! from React</h1>;\n}\n\nReactDOM.render(<App />, document.getElementById("root"));',
    output: 'Hello World! from React'
  },
  {
    name: 'JS',
    imageSrc: js,
    boilerplate: 'console.log("Hello, World! from JS");',
    output: 'Hello World! from JS'
  }
];

export default languageData;
