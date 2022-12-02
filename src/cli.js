import readlineSync from 'readline-sync';

const UserHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const Hello = `Hello, ${name}!`;
  return Hello;
};
export default UserHello;
