import getUser from './getuser'
export default async function authenticate() {
  const user = getUser();
  if (!user) {
    // If the user is not logged in, redirect to the login page
    return null;
  }else{
    return user
  }
}