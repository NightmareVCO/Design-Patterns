interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductB1 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());


/* Explicación:

El patrón de diseño Abstract Factory (Fábrica Abstracta) es un patrón creacional que proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas.

Aquí tienes un desglose del código que proporcionaste:

AbstractFactory: Esta es una interfaz que declara métodos de creación para dos tipos de productos: AbstractProductA y AbstractProductB.

ConcreteFactory1 y ConcreteFactory2: Estas son clases que implementan la interfaz AbstractFactory. Definen los métodos de creación para AbstractProductA y AbstractProductB. Cada fábrica concreta corresponde a una variante específica de productos.

createProductA y createProductB: Estos métodos en la interfaz AbstractFactory devuelven productos abstractos. Las fábricas concretas (ConcreteFactory1 y ConcreteFactory2) sobrescriben estos métodos para devolver productos concretos.

AbstractProductA y AbstractProductB: Estos son tipos de productos abstractos que se supone que la fábrica debe devolver. Los tipos de productos reales (ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2) son subclases de estos tipos abstractos.

La idea es que en tiempo de ejecución, el código del cliente puede trabajar con cualquier fábrica concreta y crear productos sin siquiera conocer sus clases exactas. El cliente solo necesita saber sobre las interfaces de fábrica abstracta y producto abstracto. Esto te permite cambiar el tipo de fábrica que una aplicación utiliza, junto con el tipo de productos que crea, en tiempo de ejecución.

*/