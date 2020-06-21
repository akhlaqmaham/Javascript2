// Chp=21-25

// q1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName +" "+ lastName;
// alert("Hello " +fullName+ " !")

// q2
// var mobile = prompt("Enter your favorite mobile phone model");
// document.write("My favorite phone is : ", mobile, "<br>")
// document.write("Length of String : ", mobile.length)

// q3
// var str = "Pakistani"
// document.write("String: ", str, "<br>")
// for (var i=0 ; i<str.length; i++){
//     if (str[i]==="n"){
//         document.write("Index of 'n': ", i)
//     }
// }

// q4
// var str = "Hello World";
// document.write("String: ", str, "<br>")
// var index = -1;
// for (var i=0; i<str.length; i++){
//     if (str[i]==="l"){
//         index = i
//     }
// }
// document.write("Last index of 'l': ", index)

// q5
// var str ="Pakistani";
// document.write("String: ", str, "<br>")
// for (var i=0; i<str.length; i++){
//     if (i === 3){
//         document.write("Character at index 3: ", str[i])
//     }
// }

// q6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Hello ", fullName)

// q7
// var str = "Hyderabad";
// document.write("String: ",str,"<br>")
// var s = "Islam" + str.slice(5,);
// document.write("After replacement: ",s)

// q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var find ="and";
// res="";
// for (var i=0; i<message.length; i++){
//     message= message.replace("and", "&")

// }
// document.write(message)

// q9
// var str ="472";
// var a = str*1;
// document.write("Value: ",str, "<br>")
// document.write("Type: ", typeof str, "<br>")
// document.write("Value: ",a, "<br>")
// document.write("Type: ", typeof a)

// q10
// var str =prompt("Enter any string");
// var upper= str.toUpperCase()
// document.write(upper)

// q11
// var str =prompt("Enter any string");
// var a = str.slice(0,1);
// var b = str.slice(1,);
// var upper = a.toUpperCase()
// var full = upper + b;
// document.write(full)

// q12
// var num = 35.36 ;
// document.write("Number: ", num, "<br>")
// var a = ""+ num;
// var c = a.replace(".","");
// document.write("Result: ",c)

// q13
// var username = prompt("Enter username");
// for (var i=0; i<username.length; i++){
//     if (username[i]==="@"){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]==="."){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]===","){
//         var a= prompt("Please enter a valid username")
//     }
//     else if (username[i]==="!"){
//         var a= prompt("Please enter a valid username")
//     }
// }
// document.write(a)

// q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === b) {
//         document.write(b, " is available at index ", i, " in our bakery")
//         break;
//     }
//     else {
//         document.write("We are sorry. ", b, " is not available in our bakery")
//     }
//     break;
// }

// q15

// var p = prompt("Enter password");
// var password = p.toLowerCase();
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// if (password.length < 6) {
//     var a = prompt("password should be atleast 6 characters long")
//     document.write(a)
// }


// for (var i = 0; i < num.length; i++) {
//     if (password[0] == num[i]) {
//         var a = prompt("Password should not start with a number")
//     }
// }
// for (var j = 0; j < password.length; j++) {
//     var char = password.charCodeAt(j)
//     if (!(char > 47 && char < 58) && !(char > 96 && char < 123)) {
//         var a = prompt("Password should contain alphabets and numbers")
//         document.write(a)
//         break;
//     }
// }

// q16

// var university = "University of Karachi";
// var array = university.split("");
// for (var i=0; i<array.length;i++){
//     document.write(array[i], "<br>")
// }

// q17
// var str =prompt("Enter input");
// document.write("User input: ", str, "<br>")
// var a= str[str.length-1];
// document.write("Last character of input: ", a)

// q18
// var str= "The quick brown fox jumps over the lazy dog";
// document.write("Text: ", str, "<br>")
// var a =str.toLowerCase()
// var res=0
// var find = "the";
// for (var i=0; i<a.length;i++){
//     if (a.slice(i,i+find.length)== find){
//         res=res + 1;

//     }
// }
// document.write("There are ", res, " occurence(s) of word 'the'")

//CHP=26-30

//q1
//var a=+prompt("Enter positive integer:");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");


//QUESTION:2
// var a=+prompt("Enter negative floating point number: ");
// document.write("Number:",a+"<br>");
// var c=Math.round(a);
// document.write("Round off value:",c +"<br>");
// var d=Math.floor(a);
// document.write("floor value:",d +"<br>");
// var e=Math.ceil(a);
// document.write("Ceil value:",e +"<br>");

//q3
// var a=-4;
// var c=Math.abs(a);
// document.write("The absolute value of ",a," is ",c);

//q4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value: ' + diceRoll);

//q5
// var rNum = Math.floor( Math.random() * 2 ) +1;
// document.write(rNum+"<br>");
// if(rNum===1){
//      document.write("Random coin value: Tails");
// }
// else{
//     document.write("Random coin value: Heads");
// }

//q6
// var rNum = Math.floor( Math.random() * 100 ) +1;
// document.write("Random number b/w 1 and 100: " ,rNum);

//q7
// var a=prompt("Enter your weight in kilograms:");
// var b=parseFloat(a);
// document.write('"The weight of user is ",b,"kilograms");

//q8
// var secNum=Math.floor( Math.random() * 10 ) +1;
// var userI=+prompt("Enter a number between 1 and 10:");
// if(userI===secNum){
//     alert("Congrats!");
// }
// else{
//     alert("Try again");
// }


//CHP=31-34

//q1
// var date = new Date()
// document.write(date)

//q2
// var a = ["January","February","March","April","May","June","July","August","september","october","november","december"]
// var now = new Date();
// var month = now.getMonth();
// var nameOfMonth = a[month];
// document.write("Current Month: "+nameOfMonth)

//q3
// var a=new Date();
// var c = a.toString();
// var b = c.slice(0,3);
// document.write(b)

//q4
// var day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var to = new Date();
// var dayy = to.getDay();
// var name = day[dayy];
// document.write(name)
// if (name==="saturday" || name==="sunday") {
//     document.write("It's Fun Day")
// }

//q5
// var a = new Date();
// var dtoday = a.getDate(); 
// if (dtoday < 16) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last fifteen days of the month")
// }

//q6
// var time = new Date();
// var ms = time.getTime();
// var mins = ms/60000;
// document.write("Current Time: "+time + "<br>"+"Elapsed milliseconds since January 1,1970: " + ms +
// "<br>" + "elapsed minutes since January1,1970 "+ mins)

//q7
// var a = new Date();
// var time = a.getHours();
// if (time < 12) {
//     document.write("It's AM")
// } else {
//     document.write("It's PM")
// }

//q8
// var laterDate = new Date( "December 31, 2020 00:00:00");
// document.write(laterDate)
            //OR
// var a = new Date();
// n=a.setHours(0,0,0)
// z=new Date(a.setFullYear(2020,11,31))
// document.write(z)

//q9
// var ramadan = new Date("April 26,2020");
// var now = new Date();
// var day = now.getTime()-ramadan.getTime();
// var days = Math.floor(day/(1000*60*60*24));
// document.write(days," days have passed since first Ramadan April 26,2020.")

//q10
// var ref = new Date("2020,5,20");
// var reff= ref.getTime();
// var date = new Date();
// var get = date.getTime();
// var diff = (get - reff)/1000;
// document.write("Reference Date: ",date,"<br>"," ", diff, " seconds have passed since the beginning of 2020")

//q11
// var a = new Date();
// var hour1 = a.setHours(6,38,30);
// var hour2 = new Date()
// var b = hour2.setHours(7,38,30);
// document.write("Current Date: ",a,"<br>","1 hour ago it was ",hour2)

// q12:
// var d = new Date();
// document.write("Current date : " + d + "<br>" + "<br>");
// var a = d.getFullYear();
// var a = a - 100;
// d.setFullYear(a);
// document.write("100 years back, it was : " + d);

//q13
// var age = 19;
// var a = new Date();
// var year = a.getFullYear();
// var birthYear = year - age;
// document.write("my age is: ",age,"<br>","my birth year is: ",birthYear)

//q14:
// var numOfUnits = 500;
// var chargesPerUnit = 18.83;
// var latePayment = 500;
// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePayment;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>Zubia Naeem</b> </br>");
// document.write("Month: <b>June</b> </br>");
// document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");

//CHP=35-38
//q1
// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();

//q2
// function greeting(){
//     var name1 = prompt('enter first name1')
//     var name2 = prompt('enter second name2')
//     document.write('hello'+" "+name1+' '+name2 )
// }
// greeting();


//q3
// function add(){
//     var a= +prompt('enter first number');
//     var b= +prompt('enter second number');
//     return a+b
// }
// var res=add();
// alert (res)



//q4
// function calc() {
//     num1 = +prompt('enter num1')
//     num2 = +prompt('enter num2')
//     opr = prompt("enter opr")
//     if (opr === "+") {
//         return num1 + num2
//     }
//     else if (opr === "-") {
//         return num1 - num2
//     }
//     else if (opr === "*") {
//         return num1 * num2
//     }
//     else if (opr === "/") {
//         return num1 / num2
//     }
//     else {
//         return " incorrect opernum1tor"
//     }

// }
//  var a= calc()
//  alert(a)


//q5
// function sqr(){
//     var a=+prompt('enter a no.')
//     return a**2
// }
// var res= sqr()
// alert(res)


//q6
// function fact() {
//     var num = +prompt('enter a no.')

//     if (num === 0 || num === 1) {
//         return 1;
//     }

//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i;

//     }
//     return num;

// }
// var res = fact()
// alert(res) 



//q7
// function counting() {
//     var FirstNumber = +prompt('enter first value');
//     var SecondNumber = +prompt('enter second value');
//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//         document.write(i)
//     }

// }
// counting()

//q8
// function hypotenuse(){
//     var base=+prompt('enter the value of base');
//     var per=+prompt('enter the value of perpendicular');
    
//     function sqr(x){
//         return x*x
//     }
//     return Math.sqrt(sqr(base)+sqr(per))
    
    
// }
// var a=hypotenuse()
// alert(a)

//q9
// function AofRec(width,height){
//     return width*height
// }
// var A=AofRec(2,3)
// alert(A)

//q10

// function palin() {

//     var word = prompt("Enter a word","palindrome check!!");
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         check += word[i];
//     }

//     if (check === word) {
//         document.write(word + " is a palindrome word")
//     } else {
//         document.write(word + " is not a palindrome word")
//     }
// }
// palin();

//q11 Again using Split
// var str = prompt('Enter a Text to Capitalize');

// function capitalize(str) {
//     var strSplit = str.split(' ');
//     var text = '';
//     for (var i = 0; i < strSplit.length; i++) {
//         var test = strSplit[i].slice(0, 0 + 1);
//         upCase = test.toUpperCase();
//         text += upCase + strSplit[i].slice(1) + " ";
//     }
//     return text;

// }
// document.write('Capitalized Text is ' + '"' + capitalize(str).bold() + '"');



//q12
// var str = prompt('Enter to find the longest word');

// function findTheLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     var newStr = ' ';
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//             newStr = strSplit[i];
//         }

//     }
//     return newStr;

// }
// document.write('Longest word is ' + '"' + findTheLongestWord(str).bold() + '"');


//q13
// var input = prompt('enter a word');
// var letter = prompt('Enter the letter');

// function occur(input, letter) {
//     var inputSplit = input.split('')
//     var count = 0;
//     for (var i = 0; i < inputSplit.length; i++) {
//         if (inputSplit[i] === letter) {
//             count++;
//         }
//     }
//     return count;

// }
// var upCase = letter.toUpperCase()



//q14
// var rad = +prompt('Enter radius of the circle');

// function calcCircumference(rad) {
//     document.write('Circumference is ' + (3.142 * 2 * rad) + '<br>');
// }

// function calcArea(rad) {
//     document.write('Area is ' + (3.142 * Math.pow(rad, 2)))
// }
// calcCircumference(rad);
// calcArea(rad);