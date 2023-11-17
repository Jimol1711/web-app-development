Además de las dependencias de flask, se instalaron otras tales como mysql, flask-mysql y filetype. Todas estás 
dependencias adicionales están en el archivo requirements.txt.

En esta tarea se corrigieron varias cosas que no se lograron en la tarea 2. Cabe recalcar que estas correcciones 
se hicieron en particular para las funcionalidades relacionadas a los hinchas, ya que eran las que se pedían para 
esta tarea. Las funcionalidades relacionadas a los artesanos siguen teniendo los problemas de la tarea 2, los cuales
están específicados al final. Estos problemas no influyen en lo que se pide para la tarea 3.

En caso de que no hayan errores de validación, el botón registrar hincha agrega una entrada correctamente a la tabla 
hincha y en la tabla hincha_deporte en la base de datos. Las validaciones en Javascript fueron comentadas, ya que estas 
me generaron problemas para la tarea 1, por lo tanto, solo se hacen validaciones en el back-end. 

Los gráficos funcionan correctamente. Para probar esto, se agregaron archivos sql. Al correr estas querys en la base de
datos, se agregan algunas entradas de ejemplo a la base de datos. Luego al ver los gráficos se deberían mostrar estadísticas
de hinchas por deporte y artesanos por tipo correctamente. Los archivos son 'Insercion_artesano.sql', 'Insercion_artesano_tipo.sql'.
'Insercion_foto.sql', 'Insercion_hincha.sql' e 'Insercion_hincha_deporte.sql'.

Problemas de la tarea 2:
La tarea 2 tiene varios problemas, pero el mayor de estos es que no inserta los datos correctamente en la base de datos 
al registrar un artesano. Por esto, incluí archivos sql que realizan inserciones de algunos datos de ejemplo para poder
probar las funcionalidades de la página (las relacionadas al listado de artesanos, la información de estos y los gráficos). 
Corriendo las querys de esos archivos en la base de datos se puede ver que el listado de artesanos muestra los datos en el 
orden que fueron agregados, y el archivo de información de artesanos muestra la información del artesano seleccionado (Y no 
la de un artesano genérico como pasaba en la tarea 1). Los archivos son 'Insercion_artesano.sql', 'Insercion_artesano_tipo.sql' 
y 'Insercion_foto.sql'. pd: Las fotos y tipos no necesariamente corresponden, son solo de ejemplo.