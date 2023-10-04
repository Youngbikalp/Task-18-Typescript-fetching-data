Step 1: I first created an interface for users, then defined a few of the relevant properties, then defined the types for each of the properties. After that I exported the interface
Step 2: I created userList component where I imported the interface and then created a useState. I defined the initial type of useState to an empty array, defined a generic type for the usestate so that the state variable takes whatever the interface has.
Step 3: used async/await to fetch the data and set the data, after that used map function to print the data.
