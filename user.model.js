// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

export const updateUsers = (user) => {
  // Write your code here
  const{id}=user;
  const index = users.findIndex((p) =>{
    return p.id === parseInt(id)
    });
    //  users[index]= user;
     if(index >-1){
      users.splice(index,1,user);
      return users[index];
     }else{
      return false;
     }
};




// export const updateUsers = (user) => {
//   const { id } = user;
//   const userToUpdateIndex = users.findIndex((user) => {
//     return user.id === parseInt(id);
//   });
//   if (userToUpdateIndex > -1) {
//     users.splice(userToUpdateIndex, 1, user);
//     return users[userToUpdateIndex];
//   } else {
//     return false;
//   }
// };
