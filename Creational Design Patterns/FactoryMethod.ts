abstract class Creator {
    public abstract factoryMethod(): Product;
    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());

/*
El patrón de diseño Factory Method (Método de Fábrica) es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

Aquí tienes un desglose del código que proporcionaste:

Creator: Esta es una clase abstracta que declara el método de fábrica factoryMethod(), que debe devolver un objeto de tipo Product. También tiene un método someOperation() que realiza alguna operación con el producto creado por el método de fábrica.

ConcreteCreator1 y ConcreteCreator2: Estas son subclases de Creator que implementan el método de fábrica factoryMethod(). Cada una de estas clases crea un producto diferente (ConcreteProduct1 y ConcreteProduct2 respectivamente).

Product: Esta es una interfaz que declara operaciones que todos los productos concretos deben implementar.

ConcreteProduct1 y ConcreteProduct2: Estas son las implementaciones concretas de la interfaz Product. Cada una de estas clases tiene un método operation() que debe implementarse.

La idea es que en tiempo de ejecución, Creator (y todas sus subclases) pueden instanciar Product sin tener que especificar la clase concreta. Esto se logra mediante el método de fábrica factoryMethod(), que actúa como un "hook" para las subclases para proporcionar la implementación concreta.
*/