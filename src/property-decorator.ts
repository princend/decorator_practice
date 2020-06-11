function propertyDecorator(target: any, propertyName: string) {
    console.log('property decorator');
    console.log(`target:${JSON.stringify(target)}`);
    console.log(`propertyName:${propertyName}`);
}


export class Shape {
    @propertyDecorator
    type: string = 'circle';
    getArea(radius: number) {
        return Math.PI * radius ** 2;
    }
}

new Shape();