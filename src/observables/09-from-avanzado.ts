import { of, from } from 'rxjs';

// of = toma argumentos y genera una secuencia 
// from = array, promise, iterable, observable 

const observer = {
    nex: val => console.log('next:', val),
    complete: () => console.log('complete')
}

// const source$ = from([1, 2, 3, 4, 5]);
const source$ = of([1, 2, 3, 4, 5]);

source$.subscribe(observer);

