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

newList.push({
  name: "waseem",
  message: "Assalam ul alaikkum! join my ",
  Status: "Coming",
});

console.log("\nList with new Guest");
newList.map((guest) =>
  console.log("\n%s, %s (%s)", guest.name, guest.message, guest.Status)
);
