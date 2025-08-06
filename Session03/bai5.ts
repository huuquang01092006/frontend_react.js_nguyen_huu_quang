let firstName: string = "Alice";
let lastName: string = "smith";
if(firstName.charAt(0) != firstName.charAt(0).toUpperCase()){
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
if(lastName.charAt(0) != lastName.charAt(0).toUpperCase()){
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
let fullName: string = firstName + " " + lastName;
console.log(fullName);