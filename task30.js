let usernames = ["admin", "Mutthar", "Ahmed", "Haseeb", "Mamoon"];
usernames.map((name) =>
  console.log(
    name === "admin"
      ? "Hello admin, would you like to see a status report"
      : "Hey %s, Thank You for logging in again",
    name
  )
);
