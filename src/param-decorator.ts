function parameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log('parameter decorator');
    console.log(`target:${JSON.stringify(target)}`);
    console.log(`propertyKey:${propertyKey}`);
    console.log(`parameterIndex:${parameterIndex}`);
}

export class Square {
    remark = '123';
    getArea(@parameterDecorator radius: number, @parameterDecorator key: number) {
        return radius ** 2;
    }
}

new Square();