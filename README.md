PracticaTypeScriptModificando y PracticaTypeScriptAdding (en otro repositorio)
Hice 2 ejercicios: uno modificando y otro añadiendo, por recibir 2 mensajes distintos de cómo hacerlo.

Revisar los 2.

No he utilizado nada más que TypeScript, ya que desarrollándose todo para ser ejecutado en el Terminal, no he creído necesario utilizar ni HTML, ni CSS por no ser este el propósito del ejercicio.

He creado 4 clases para almacenar la lógica que podría tener una agenda con datos personales: nombre, direcciones, teléfonos, mails… Cada clase se ha creado en un archivo TypeScript diferente.

Después, mediante un módulo principal, llamado main.ts, utilizamos las clases, con sus propiedades y métodos definidos.

Se crean 3 registros de Persona, y se muestran en el Terminal. Se modifica 1 de los registros, realizando una búsqueda por DNI, modificando la dirección, el mail y el teléfono.

Finalmente, se muestran de nuevo los 3 registros, con los cambios realizados

Para compilar y ejecutar el ejercicio, escribir en el Terminal: tsc && node main