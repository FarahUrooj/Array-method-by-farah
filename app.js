

// Section A: indexing and length

// Problem 1
var students = ["Ali", "Sara", "Hina", "Omar"];
console.log(students[0]);
console.log(students[2]);

// Problem 2
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(cities[cities.length - 1]);

// Problem 3
var prices = [100, 200, 300];
prices[2] = 350;
console.log(prices[2]);

// Problem 4
var cart = ["Pen", "Copy", "Eraser", "Ruler"];
console.log(cart.length);
console.log(cart[1]);


// Section B: push and pop

// Problem 5
var fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

// Problem 6
var tasks = ["Homework", "Cooking", "Shopping"];
tasks.pop();
console.log(tasks);

// Problem 7
var stack = [10, 20, 30];
var removed = stack.pop();
console.log(removed);
console.log(stack);

// Problem 8
var queue = ["A", "B"];
var newLength = queue.push("C", "D");
console.log(newLength);
console.log(queue);


// Section C: unshift and shift

// Problem 9
var line = ["Ali", "Sara"];
line.unshift("VIP");
console.log(line);

// Problem 10
var customers = ["Hina", "Omar", "Zain"];
var served = customers.shift();
console.log(served);
console.log(customers);

// Problem 11
var songs = ["Song2", "Song3", "Song4"];
songs.unshift("Song1");
songs.pop();
console.log(songs);


// Section D: includes and indexOf

// Problem 12
var items = ["Rice", "Sugar", "Tea"];
console.log(items.includes("Tea"));
console.log(items.includes("Milk"));

// Problem 13
var bookedSeats = [1, 5, 9, 12];
var seatNumber = 9;
if (bookedSeats.includes(seatNumber)) {
  console.log("Seat already booked");
} else {
  console.log("Seat available");
}

// Problem 14
var names = ["Ali", "Sara", "Hina", "Omar"];
console.log(names.indexOf("Hina"));
console.log(names.indexOf("Zain"));

// Problem 15
var members = ["Ali", "Sara"];
var newMember = "Sara";
if (members.indexOf(newMember) === -1) {
  members.push(newMember);
  console.log("Member added");
} else {
  console.log("Already a member");
}
console.log(members);


// Section E: slice

// Problem 16
var scores = [95, 90, 85, 80, 75];
var top3 = scores.slice(0, 3);
console.log(top3);
console.log(scores);

// Problem 17
var days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(days.slice(-2));

// Problem 18
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
console.log(months.slice(1, 4));
console.log(months.slice(3));


// Section F: splice

// Problem 19
var colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(2, 1);
console.log(colors);

// Problem 20
var numbers = [1, 2, 4, 5];
numbers.splice(2, 0, 3);
console.log(numbers);

// Problem 21
var team = ["Ali", "Sara", "Hina", "Omar"];
team.splice(1, 1, "Zain");
console.log(team);

// Problem 22
var books = ["Math", "Urdu", "English", "Science", "Art"];
var removed = books.splice(1, 2);
console.log(removed);
console.log(books);



// Problem 23
var sentence = "I love JavaScript";
var words = sentence.split(" ");
console.log(words);
console.log(words.length);

// Problem 24
var data = "Ali,Sara,Hina,Omar";
var students = data.split(",");
console.log(students[2]);
console.log(students.indexOf("Omar"));
console.log(students.includes("Zain"));

// Problem 25
var data = "Ali,Sara,Hina,Omar,Zain";
var students = data.split(",");
var left = students.shift();
console.log(left);
students.push("Bilal");
students.splice(2, 0, "Noor");
console.log(students);
console.log(students.indexOf("Omar"));
console.log(students.slice(-2));