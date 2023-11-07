// Agregar al README
Además de las dependencias de flask, se instalaron otras tales como mysql, flask-mysql y filetype. Todas estás 
dependencias adicionales están en el archivo requirements.txt.

Los botones registrar hincha y ver listado de hinchas redireccionan al registro de artesano y al listado de artesano 
por ahora, ya que las funcionalidades de los hinchas no se pedían para la tarea.

La tarea tiene varios problemas, pero el mayor de estos es que no inserta los datos correctamente en la base de datos 
al registrar un artesano. Por esto, incluí archivos sql que realizan inserciones de algunos datos de ejemplo para poder
probar las funcionalidades de la página (las relacionadas al listado de artesanos y la información de estos). Corriendo
las querys de esos archivos en la base de datos se puede ver que el listado de artesanos muestra los datos en el orden 
que fueron agregados, y el archivo de información de artesanos muestra la información del artesano seleccionado (Y no 
al de un artesano genérico como pasaba en la tarea 1). Los archivos son 'Insercion_artesano.sql', 
'Insercion_artesano_tipo.sql' y 'Insercion_foto.sql'. pd: Las fotos y tipos no necesariamente corresponden, son solo de
ejemplo. Otra cosa que le falta a la Tarea es paginación. 