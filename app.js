const test2 = memoize.getElementById('test-2');
const test3 = memoize.querySelector('#test-2');

test2.style.background = 'blue';
test3.style.background = 'red';

test3.style.background = 'green';
