class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;
    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}

clientCode();

/*
El patrón de diseño Prototype (Prototipo) es un patrón creacional que permite clonar objetos existentes sin hacer que el código dependa de sus clases. Todos los objetos de la clase Prototype tienen la capacidad de clonarse y crear duplicados de sí mismos.

Aquí tienes un desglose del código que proporcionaste:

Prototype: Esta es una clase que declara el método clone(). Este método crea un nuevo objeto que es una copia del objeto Prototype existente. Clona tanto los valores primitivos como los objetos y las referencias circulares.

ComponentWithBackReference: Esta es una clase que tiene una referencia de vuelta al objeto Prototype. Cuando el objeto Prototype se clona, esta referencia también se clona.

clientCode: Esta es una función que crea un objeto Prototype, establece sus propiedades y luego crea una copia de este objeto utilizando el método clone().

La idea es que en lugar de crear nuevos objetos desde cero, puedes crear una copia de un objeto existente. Esto puede ser más eficiente en términos de rendimiento, especialmente si la creación del objeto es una operación costosa.

En tu código, la línea 24 crea una copia del objeto p1 utilizando el método clone(). El objeto clonado p2 tendrá las mismas propiedades que p1, pero será una instancia separada.
*/