
import bcrypt from 'bcrypt';
const saltRounds = 10;
const myPlaintextPassword = 'taolahaone';
const someOtherPlaintextPassword = 'not_bacon';
let hash;

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    hash = hash;
    bcrypt.compare('taolahaone', hash, function(err, result) {
        console.log(result);
    });
});


bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});