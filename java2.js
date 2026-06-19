/* ========================= EASY ========================= */

// E1. A person can enter the club only if age is 18 or older
//     AND hasID is true. Print "Welcome" or "Denied".
const age1 = 20;
const hasID = true;
// Expected: Welcome
// your code here


// E2. It is a day off if isWeekend is true OR isHoliday is true.
//     Print "Day off" or "Work day".
const isWeekend = false;
const isHoliday = true;
// Expected: Day off
// your code here


// E3. Go to the beach only if temperature is above 30 AND isSunny.
//     Print "Beach" or "Stay home".
const temperature = 33;
const isSunny = true;
// Expected: Beach
// your code here


// E4. Grant admin access if username is "admin" OR username is "root".
//     Print "Admin access" or "Regular user".
const username = "root";
// Expected: Admin access
// your code here


// E5. A number is "good" if it is positive (> 0) AND even (n % 2 === 0).
//     Print "Good" or "Not good".
const number = 8;
// Expected: Good
// your code here


/* ======================== MEDIUM ======================== */
/* Combine && and || together, or chain several conditions. */

// M1. Login succeeds if the username is "elbeg" AND password is "1234".
//     Print "Login OK" or "Wrong credentials".
const user = "elbeg";
const password = "1234";
// Expected: Login OK
// your code here


// M2. A customer gets a discount if they are a member (isMember)
//     OR they spent more than 100000.
//     Print "Discount" or "Full price".
const isMember = false;
const totalSpent = 120000;
// Expected: Discount
// your code here


// M3. Entry is free if age is under 5 OR over 65. Otherwise paid.
//     Print "Free" or "Paid".
const age3 = 70;
// Expected: Free
// your code here


// M4. A person may drive only if ALL are true:
//     age is 18+, hasLicense is true, AND isSober is true.
//     Print "Can drive" or "Cannot drive".
const age4 = 25;
const hasLicense = true;
const isSober = false;
// Expected: Cannot drive
// your code here


// M5. Bring an umbrella if it isRaining,
//     OR if it isCloudy AND humidity is above 80.
//     Print "Umbrella" or "No umbrella".
const isRaining = false;
const isCloudy = true;
const humidity = 85;
// Expected: Umbrella
// your code here


/* ========================= HARD ========================= */
/* Operator precedence, ranges, and multi-part logic.
   Tip: when mixing && and ||, use parentheses to be explicit. */

// H1. Leap year. A year is a leap year if:
//     it is divisible by 4 AND not by 100,
//     OR it is divisible by 400.
//     Print "Leap year" or "Not a leap year".
//     After it works, mentally test: 1900 (no), 2000 (yes), 2023 (no).
const year = 2024;
// Expected: Leap year
// your code here


// H2. A grade is "valid B" if score is at least 80 AND below 90.
//     Print "Grade B" or "Not B".
const score = 84;
// Expected: Grade B
// your code here


// H3. Access the control panel only if the user isLoggedIn
//     AND (role is "admin" OR role is "moderator").
//     Print "Access granted" or "Access denied".
const isLoggedIn = true;
const role = "moderator";
// Expected: Access granted
// your code here


// H4. Three side lengths form a valid triangle only if EVERY pair
//     of sides sums to more than the third side:
//     a+b > c AND b+c > a AND a+c > b.
//     Print "Valid triangle" or "Invalid triangle".
const a = 3;
const b = 4;
const c = 5;
// Expected: Valid triangle
// your code here


// H5. A password is "strong" if its length is at least 8
//     AND it contains a number OR a symbol.
//     (hasNumber and hasSymbol are given as booleans.)
//     Print "Strong" or "Weak".
const pwLength = 10;
const hasNumber = false;
const hasSymbol = true;
// Expected: Strong
// your code here

// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
// Expected:
//   apple
//   banana
//   cherry
// your code here


// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
// Expected: 108
// your code here


// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 15, 18];
// Expected: 3
// your code here


// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56];
// Expected: 99
// your code here


// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];
// Expected: smallest 3 at index 3
// your code here


// 6. Build a NEW array where every number is doubled, then print it.
const base = [1, 2, 3, 4];
// Expected: [ 2, 4, 6, 8 ]
// your code here


// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
// Expected: 3
// your code here


// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
// Expected: 25
// your code here


// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
// Expected: [ 12, 20, 15 ]
// your code here


// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];
// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here


// 1. Print each character of the word on its own line.
const word = "code";
// Expected:
//   c
//   o
//   d
//   e
// your code here


// 2. Count the characters using a loop (increment a counter).
//    Do NOT just print .length — count them one by one.
const text = "javascript";
// Expected: 10
// your code here


// 3. Count how many vowels (a, e, i, o, u) are in the string.
const phrase = "education";
// Expected: 5
// your code here


// 4. Count how many times the letter "a" appears.
const sentence = "banana";
// Expected: 3
// your code here


// 5. Reverse the string into a NEW string (don't use a built-in reverse).
//    Build it character by character, then print it.
const name = "elbeg";
// Expected: geble
// your code here


// 6. Build a NEW string with all the spaces removed, then print it.
const spaced = "h e l l o";
// Expected: hello
// your code here


// 7. Build a NEW string where every space is replaced with a dash "-".
const title = "learn java script";
// Expected: learn-java-script
// your code here


// 8. Check if the word is a palindrome (reads the same forwards and
//    backwards). Print true or false.
const candidate = "level";
// Expected: true
// your code here


// 9. Count how many words are in the sentence.
//    Hint: words are separated by spaces.
const line = "I love javascript a lot";
// Expected: 5
// your code here


// 10. Count how many UPPERCASE letters are in the string.
//     Hint: a character ch is uppercase when  ch >= "A" && ch <= "Z"
const mixed = "HelloWorldJS";
// Expected: 4
// your code here