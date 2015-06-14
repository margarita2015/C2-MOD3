MOOC2-MOD3
P2P OPCIONAL Modulo 3
El ejercicio dice:
Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros en uno solo.
El programa se debe invocar de la siguiente forma
node merge.js <dest> <f1> <f2> .. <fn>

El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.

Para ello:
Descargar el repositorio en el escritorio o clonarlo en un espacio de proyectos.
Ejecutar el comando en una consola de unix : node merge.js solucion.txt 1.txt 2.txt 3.txt 4.txt
Comprobar que en el nuevo fichero creado solucion.txt está el contenido de los ficheros 1.txt 2.txt 3.txt 4.txt
Este programa mezcla el contenido de los ficheros origenes en el fichero destino de la forma:
node merge.js <dest> <f1> <f2> .. <fn>
