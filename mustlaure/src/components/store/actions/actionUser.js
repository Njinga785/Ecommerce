

 export const ajouter = (user) => ({
    type: 'ADD_USER', 
    user: user
}); 

// export const ajouter = (userData = {
//     firstName:'', 
//     lastName:'', 
//     email:'', 
//     password:'', 
//     profile:''
// }) => {
// return(dispatch) => {
//     const user = {
//         firstName: userData.firstName, 
//         lastName: userData.lastName, 
//         email: userData.email, 
//         password: userData.password, 
//         profile: userData.profile
//     }; 
//     return axios.post('sign-in', user).then (result => {
//         dispatch(ajouter(result.data))
//     })
// }
// } 

// const retirerUser = ({id} = {}) => ({
//     type: 'DELETE_USER', 
//     id
// }); 

// export const retirerUser = ({id} = {}) => {
//     return (dispatch) => {
//         return axios.delete(`get-user/${id}`).then(() =>{
//             dispatch(retirerUser({id}))
//         })
//     }
// }


// const recupUser = (users) => ({
//     type: 'GET_USER', 
//     user
// }); 
// export const recupUser = () => {
//     return (dispatch) => {
//         return axios.get('get-users').then(resul => {
//             const users =[]; 
//             result.data.forEach(user => {
//                 users.push(user)
//             }); 
//             dispatch(recupUser(users))
//         })
//     }
// }