import breakfast from './breakfast';
import dinners from './dinner';
import lunchs from './lunch';

const fakeData = [...breakfast, ...dinners, ...lunchs];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;