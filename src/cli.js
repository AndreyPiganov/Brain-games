import readlineSync from 'readline-sync';

const userHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${name}!`;
  return hello;
};
export default userHello;
