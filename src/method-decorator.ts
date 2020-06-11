function methodDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('方法裝飾器,method decorator');
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);
}

class Blog {
    author: string;
    blogs = [];

    constructor(author: string) {
        this.author = author;
    }

    @methodDecorator
    getBlogNum() {
        return this.blogs.length
    }
}


new Blog('john cena');