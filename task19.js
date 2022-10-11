let invitationList = [
  {
    name: "Ahmed",
    message: "I would like to invite you to my function",
    Status: "Coming",
  },
  {
    name: "Hasseb",
    message: "hey would you like to join my function",
    Status: "Not Coming",
  },
  {
    name: "Farhan",
    message: "hey would you like to join my function",
    Status: "Coming",
  },
];
console.log("\tOld List");
let numberOfGuests = invitationList.length;

invitationList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);
console.log("\nInvited Guests: %d", numberOfGuests);
let newList = invitationList.filter((guest) => guest.Status != "Not Coming");

console.log("\n\n\tNew List");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

numberOfGuests = newList.length;
console.log("\nInvited Guests: %d", numberOfGuests);

newList.unshift({
  name: "Osama",
  message: "Assalam ul alaikkum! join my Function",
  Status: "Coming",
});
console.log(
  "\n\n\n\n\tFound Bigger Table, So Let Invite new Guest in Starting"
);
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);
numberOfGuests = newList.length;
console.log("\nInvited Guests: %d", numberOfGuests);

newList.push({
  name: "waseem",
  message: "Assalam ul alaikkum! join my ",
  Status: "Coming",
});
console.log("\n\n\n\tAdded new Guest in Last");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);
numberOfGuests = newList.length;
console.log("\nInvited Guests: %d", numberOfGuests);

newList.splice(newList.length / 2, 0, {
  name: "Shoaib",
  message: "Assalam ul alaikkum! join my ",
  Status: "Coming",
});
console.log("\n\n\n\tAdded new Guest in Middle");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);
numberOfGuests = newList.length;
console.log("\nInvited Guests: %d", numberOfGuests);

console.log(
  "\n\n\nShit, We got smaller Table, We have space for 2 guests only\n"
);
numberOfGuests = newList.length;
console.log("\nInvited Guests: %d\n", numberOfGuests);
while (newList.length != 2) {
  newList.pop();
  console.log("Sorry We can't invite you for Dinner");
  numberOfGuests = newList.length;
  console.log("Removed Guest: 1\nRemaining Guests: %d\n", numberOfGuests);
}

newList.map((guest) => console.log("%s, You are still Invited ", guest.name));

console.log("\n\n\tAfter Dinner");
while (newList.length != 0) {
  numberOfGuests = newList.length;
  newList.pop();
  console.log("\nGuests: %d\n", numberOfGuests);
  console.log("We Enjoyed the Dinner, Thanks");
}
numberOfGuests = newList.length;
console.log("\nGuests: %d\n", numberOfGuests);
console.log(newList);
