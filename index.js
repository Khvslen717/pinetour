const age = 20
const hasID = true

if (age > 18 && hasID === true){
    console.log("Welcome")
}else if (age < 18){console.log("denied")}



const isWeekend = false
const isHoliday = true

if (isWeekend === true || isHoliday === true){console.log("Day off")}
else if (isWeekend === false || isHoliday === false){console.log("Work day")}



const temperature = 33
const isSunny = true

if (temperature>30 && isSunny === true){
    console.log("Beach")
}else if (temperature<=30){console.log("stay at home")}



const username = "root"
if (username === "root" || username === "admin"){console.log("admin access")}
else {console.log("regular user")}


const number = 8
if (number > 0 && number % 2 === 0){console.log("Good")}
else{console.log("Not good")}

const user = "elbeg"
const password = "1234"
if (user=== "elbeg" && password === "1234"){console.log("Login OK")}
else {console.log("Wrong credentials")}



const isMember = false
const totalSpent = 120000
if (isMember === true || totalSpent>10000){console.log("Discount")}
else{console.log("Full price")}


const age1 = 70
if( age1<5 || age1>65){console.log("Free")}
else{"Paid"}


const age2 = 25;
const hasLicense = true;
const isSober = false;
if (age2>18 && hasLicense ===true && isSober === true){console.log("can drive")}
else{console.log("cannot drive")}


const isRaining = false
const isCloudy = true
const humidity = 85
if(isRaining === true || isCloudy === true || humidity>80){console.log("bring umbrella")}
else{console.log("no umbrella")}


const year = 1900
if(year%4 === 0 && year%100 !==0 || year/400 === 0){console.log("Leap year")}
else{console.log("Not a leap year")}


const score = 84
if (score >= 80 && score<90){console.log("Grade B")}
else{console.log("Not B")}


const isLoggedIn = true
const role = "moderator"
if(isLoggedIn === true && role === "moderator" || role === "admin"){console.log("Access granted")}
else{console.log("Access denied")}


const a = 3
const b = 4
const c = 5
if (a+b > c && b+c >a && a+c >b){console.log("Valid traingle")}
else{console.log("Invalid traingle")}


const pwLength = 10
const hasNumber = false
const hasSymbol = true
if (pwLength>8 && hasNumber === true || hasSymbol === true){console.log("Strong")}
else{console.log("Weak")} 




const fruits = ["apple", "banana", "cherry"]
for(let i = 0; i < 3; i++) { 
    console.log(fruits[i])}



let sum = 0
const nums = [4, 8, 15, 16, 23, 42]

for(let i = 0; i< 6 ; i++){
    console.log(sum + nums[i])
    sum = sum + nums[i]
} 



const values = [3, 6, 9, 12, 15, 18]
let count = 0
for(let i = 0 ;i<6 ; i++){
    if( values[i]%2 === 0){
        count++
    }
}
console.log(count)



const scores = [42, 17, 99, 23, 56]
let nms = 0
for( let i=0; i < 6 ;i++){
    if(nms < scores[i] ) {
        nms = scores[i]
    }
}
console.log(nms)


const temps = [12, 5, 8, 3, 20]
let n = temps[0], index
for( let i=1; i < 6 ;i++){
    if(n >temps[i] ) {
        n = temps[i]
        index = i
    }
}
console.log("smallest",n,"at index",index)


const base = [1, 2, 3, 4]
for(let i = 0 ; i <4 ; i++){
    base[i] = base[i] * 2
    
}
console.log(base)


const items = [1, 2, 2, 3, 2, 4]
const target = 2
let too = 0

for(let i = 0 ; i <5 ; i++){
    if (items[i]===target ){
        too = too+1        
    }
}
console.log(too)



const data = [10, 20, 30, 40]
let s = 0
let l =0 
for(let i = 0 ; i <data.length ;i++){
    s=s+data[i]
    a=s/data.length
   
}console.log(a)



const list = [5, 12, 8, 20, 3, 15]
let p = []
for( let i =0 ; i<list.length;i++){
    if(list[i]>10) {p.push(list[i])
    }

    }
console.log(p)


const letters = ["a", "b", "c", "d"];
let w =[]
for( let i = 3 ; i >= 0 ; i --){
    w.push(letters[i])

}
console.log(w)



const word = "code";
for(let i = 0 ; i < word.length ; i ++){
    console.log(word[i])
}



const text = "javascript"
let wq= 0
for(let i = 0 ; i<text.length; i++){
    if(text[i] >= 'a' || text[i] <= 'z') {
        wq = wq+1
    }
}

console.log(wq)



const phrase = "education"
let qw=0
for(let i = 0;i <phrase.length;i++){
    if(phrase[i] === 'i'||
        phrase[i] === 'a'||
        phrase[i] === 'e'||
        phrase[i] === 'u'||
        phrase[i] === 'o'){
     qw=qw+1
    }

}
console.log(qw)


const sentence = "banana"
let mn=0
for (let i=0;i<sentence.length;i++){
    if(sentence[i]=== "a"){
        mn=mn+1
    }
}
console.log(mn)


const namee = "elbegjhdbfuhxbfuxfhubxuhxbuhxbuxdbfuxbixbxufbxu"
let wa =''
for( let i = namee.length - 1; i >=0  ; i --){
    wa= wa + namee[i]

}
console.log(wa)


const spaced = "h e l l o"
let qwe=""
for(let i =0; i<spaced.length;i++){
    if(spaced[i]!=" "){
qwe=qwe+spaced[i]
    }
}
console.log(qwe)


const title = "learn java script"
let qwa=""
for(let i =0; i<title.length;i++){
    if(title[i]!=" "){
qwa=qwa+title[i]
    }else{
        qwa=qwa+"-"
    }
}
console.log(qwa)


const candidate = "level"
