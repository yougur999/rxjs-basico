import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado')
}

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error 
    // const a = undefined;
    // a.nombre = 'Sergio';

    subs.complete();

});

obs$.subscribe( observer );

/* obs$.subscribe( 
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error)
); */ 












