import React, { useState } from 'react'; 

const numbers = [4, 9, 16, 25, 29];
const first = numbers.find(myFunction);

const [newVar, setNewVar] = useState('');

const myFunction = (value, index, array) => {
return value > 18; 
setNewVar('Test');
}
