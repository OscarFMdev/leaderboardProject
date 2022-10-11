import './style.css';

import { sayHi } from "./functions";

sayHi();

const element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello');