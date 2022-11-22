import readlineSync from 'readline-sync';

const UserHello = () =>{
    let name = readlineSync.question('May I have your name? ');
    let Hello= 'Hello, ' + name + '!';
    return Hello;
}
export {UserHello};