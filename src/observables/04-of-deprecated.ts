import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));
const obs$ = of<any>(1, 2, 3, 4, 5, 6);

console.log('Inicio del Obs$');
obs$.subscribe({
    next: value => console.log('next ', value),
    error: () => { null },
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin del Obs$');

// of esta deprecated 