class Singleton {
    private static instance: Singleton;
    private constructor() { }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
/*
El patrón de diseño Singleton (Instancia Única) es un patrón creacional que asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a ella.

Aquí tienes un desglose del código que proporcionaste:

Singleton: Esta es la clase que queremos asegurar que tenga solo una instancia. El constructor es privado para prevenir la creación directa de objetos.

instance: Esta es una propiedad estática que mantiene la única instancia de la clase Singleton.

getInstance(): Este es un método estático que controla el acceso a la instancia singleton. Este método crea una nueva instancia de la clase Singleton si aún no existe una y la devuelve.

clientCode(): Esta es una función que demuestra cómo usar la clase Singleton. Crea dos variables s1 y s2, ambas asignadas con la instancia de Singleton obtenida a través del método getInstance(). Luego verifica si s1 y s2 son la misma instancia.

La idea es que en lugar de crear una nueva instancia de la clase Singleton cada vez que se necesita, se utiliza el método getInstance() para obtener la única instancia existente. Esto es útil cuando una clase necesita tener exactamente una instancia, y esa instancia necesita ser accesible desde diferentes partes del código (por ejemplo, una base de datos o un archivo de configuración).
*/
