interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }
    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }
    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Builder;
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);


/*
El patrón de diseño Builder (Constructor) es un patrón creacional que permite construir objetos complejos paso a paso. A diferencia de otros patrones creacionales, Builder no requiere que los productos tengan una interfaz común. Esto hace posible producir diferentes productos utilizando el mismo proceso de construcción.

Aquí tienes un desglose del código que proporcionaste:

Builder: Esta es una interfaz que declara los métodos de construcción (producePartA, producePartB, producePartC) que se utilizan para crear un objeto Product.

ConcreteBuilder1: Esta es una clase que implementa la interfaz Builder. Define los métodos de construcción para crear un objeto Product1. Cada método de construcción (producePartA, producePartB, producePartC) agrega una parte al producto.

reset: Este método en ConcreteBuilder1 se utiliza para reiniciar el proceso de construcción, creando un nuevo objeto Product1 vacío.

getProduct: Este método en ConcreteBuilder1 se utiliza para recuperar el producto resultante. Normalmente se llama una vez que se ha completado el proceso de construcción.

La idea es que el código del cliente puede crear diferentes Product utilizando el mismo proceso de construcción. El patrón Builder es especialmente útil cuando necesitas construir objetos complejos o compuestos. En lugar de construir el objeto con un gran constructor o mediante una serie de llamadas a métodos setter, el patrón Builder desglosa el proceso de construcción en una serie de pasos que se pueden realizar de manera individual. Esto hace que el código del cliente sea más fácil de leer y escribir, y también permite la reutilización del código de construcción.
*/