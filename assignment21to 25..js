
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("enter a forst name")
// let lastName = prompt("enter a last name")
// let fullname = firstName + " " + lastName
// document.write("Assalamalaikum Dear " + fullname)



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let userinput = prompt("type your favourite mobile phone model")
// let length = userinput.length
// document.write(userinput +" "+ length)



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// let nationality = "Pakistani"
// for(i = 0 ; i < nationality.length; i++){
//     if(nationality[i]==="n" ){
//         document.write("index of 'n' " + i )
//     }
// }

// let nationality = 'pakistani'
// let indexnum = nationality.IndexOf("n")
// console.log(indexnum)



// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let word = "hellow world"
// let chackindex = word.lastIndexOf("l")
// document.write("The last index of 'l' in the word 'Hello World' is: " + chackindex)



// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let index = "Pakistani"
// let letter = index[3]
// document.write("character at index 3: " , letter)

// let index = "Pakistani"
// let letter = index.charAt(3)
// document.write("character at index 3: " , letter)

// 6. Repeat Q1 using string concat() method.

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad"
// let replace = city.slice(5,9)
// document.write("City:  "  + city + "<br>")
// document.write("After Replacement: " + " Islam"+replace)

// let city = "hyderabad"
// city = city.replace("hyder","islam")
// console.log(city)



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// let massage = "“Ali and Sami are best friends. They play cricket and football together;"
// let arr = massage.split(" ")
// let modifyword = []
// for(i=0;i<arr.length;i++){
//     if(arr[i]==="and"){
//         modifyword.push("&")
//     }else{modifyword.push(arr[i])}
// }
// let replace = modifyword.join(" ")
// document.write(replace)

// let massage = "“Ali and Sami are best friends. They play cricket and football together;"
// let newsms = massage.replaceAll("and","&")
// document.write(massage + "<br>")
// document.write(newsms)



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let string = "472"
// let number = +string
// document.write("value: " + string + "<br>" + "Type:  string" + "<br>" )
// document.write("value: " + number + "<br>" + "Type:  number")



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userinput="peanuts"
// let changeCase = userinput.toUpperCase()
// document.write(userinput + "<br>");
// document.write(changeCase);



// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let a = "javascript"
// let b = a[0].toUpperCase()
// let c = a.slice(1)
// document.write(a , "<br>")
// document.write(b+c)



// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let number = 35.36
// let string = number.toString()
// let stringdot = string.replace(".","")
// document.write(number+ "<br>")
// document.write(string+ "<br>")
// // document.write(stringdot+ "<br>")



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let bakery = ["choclate", "applepie","cookie","chips"]
// let order = prompt("plz order now")
// let isavailable = false
// for(i=0;i<bakery.length;i++){
//     if(bakery[i] === order){
//         isavailable = true
//     }
// }
// if(isavailable){
//     alert("its available")
// }else{
//     alert("its not available")
// }



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let uni = "universcity of karachi"
// let arr = uni.split('')
// for(i=0;i<uni.length;i++){
//     document.write(arr[i] )
// }



// 17. Write a program to display the last character of a user
// input.

// let country = "pakistan"
// let lastindex = country.charAt(country.length -1)
// document.write(lastindex)



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let string = "The quick brown fox jumps over the lazy dog"
// let arr = string.split(" ")
// let count = "0"
// for(i=0;i<arr.length;i++){
//     if(arr[i].toLowerCase()==="the"){
//         count++
//     }
// }
// document.write(count)





// let userinput = prompt("")
// if(userinput <= 3&&){
//     alert('accepted 3 more digit code');
// }else if(userinput >= 12){
//     alert("enter a 12 digit code")
// }else{alert("application accepted")}

// let userinput = prompt("type application")
// let a = ""
// for(i=0;i<userinput.length;i++){
//     if(userinput[i]==="a"){
//         a++
//     }
// }
// document.write(a)

