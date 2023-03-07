# solirius-code-challenge
Coding Challenge 

```
.
├── node
|   ├── index.js
│   └── tests
|       └── romanNumeralGenerator.spec.js
├── web
│   └── index.html
└── romanNumeralGenerator.spec.js
```

## romanNumeralGenerator.js
This is the main function. It takes a number value and outputs roman string.<br/>
The function works by storing an array of units, tens, hundreds & thousands.<br/>
It will then loop through the int and calculate the index for each unit.<br/>
It uses modulo operator and division to slice the integer.

## Node
### Prerequisites
```
npm install
```
To run node application just run 
```
npm start
```
The node application will ask you to enter a number within the terminal.<br/>
Enter the number you wish to convert and press the RETURN key.<br/>
The roman value will then print on the next line.
<br/><br/>![image](https://user-images.githubusercontent.com/22575815/223578231-cfca549a-02ad-4fb5-9d91-61b0d93c7688.png)

### Tests
Tests are implemented using jest. To run tests run the command below:
```
npm tests
```
## Web
Open index.html to load web page.
Enter value in input and the roman number should apear. you might have to click off of the input for the event to register.

![image](https://user-images.githubusercontent.com/22575815/223579550-49b5d847-7168-45df-9064-96266e3cc069.png)
