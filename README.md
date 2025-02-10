Museo FACSO
===

Requisitos en el servidor:

- Node v.19.9.0 o superior


El sitio es estático y no consume ninguna funcionalidad de servidor dinámico. Esta es la documentación de cómo está hecha esta parte:
https://nextjs.org/docs/app/building-your-application/deploying/static-exports

Es decir, al ejecutar `npm run build` se exporta todo el sitio compilado al directorio `/out` y hay que configurar el servidor para que redirija correctamente a los archivos del sitio. Esto se menciona a final del link copiado más arriba.