# Comunicacion entre componentes

Desde el Padre => le pasamos al hijo

<AddCategory setCategories={setCategories} />

# useEffect

1)Evitar re-renderizados
2)evitar ciclos infinitos

# helpers

aqui van funciones que hacen un cierto trabajo en especifico, pueden recibir argumentos, lo procesan y hacen algun return. No hace falta que redibuje un state o algo asi.

# custom hooks

- es una forma de extraer logica de algun componente o logica que quiero reutilizar y extraerla de tal manera que sea sencillo de utilizarla nuevamente.
- Se recomienda crearlos en una carpeta llamada Hooks.
- Cada vez que cambie el componente cambie, se vuelve a disparar el custom hook y ejecuta todo lo que esté dentro. Pero vamos a usar useEffect, para que todo se ejecute si la dependencia cambia
