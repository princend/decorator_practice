function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('I\'m a kyle')
class Persons {
    name = 'kyle';
    constructor() {
        console.log('creating a person');
    }
}