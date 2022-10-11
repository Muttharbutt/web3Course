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
console.log("Old List");

invitationList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

let newList = invitationList.filter((guest) => guest.Status != "Not Coming");

console.log("\nNew List");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

newList.unshift({
  name: "Osama",
  message: "Assalam ul alaikkum! join my Function",
  Status: "Coming",
});
console.log("\n\n\n\nFound Bigger Table, So Let Invite new Guest in Starting");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

newList.push({
  name: "waseem",
  message: "Assalam ul alaikkum! join my ",
  Status: "Coming",
});
console.log("\n\n\nAdded new Guest in Last");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

newList.splice(newList.length / 2, 1, {
  name: "Shoaib",
  message: "Assalam ul alaikkum! join my ",
  Status: "Coming",
});
console.log("\n\n\nAdded new Guest in Middle");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);

console.log(
  "\n\n\nShit, We got smaller Table, We have space for 2 guests only\n"
);

while (newList.length != 2) {
  newList.pop();
  console.log("Sorry We can't invite you for Dinner");
}
newList.map((guest) => console.log("%s, You are still Invited ", guest.name));

while (newList.length != 0) {
  newList.pop();
  console.log("We Enjoyed the Dinner, Thanks");
}
console.log(newList);
