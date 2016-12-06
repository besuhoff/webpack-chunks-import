import Something from './class';
import something from './test2';

window.go = function() {
  if (!(something instanceof Something)) {
    throw new Error('Fokken webpack!');
  } else {
    alert ('Its ok!');
  }
};