# Pasos para descargar e inciar el proyecto

1. Cree una carpeta en su computador y nombrela `ViShop`
2. abra la ventana de comandos entre a la carpeta creada y clone el repositorio
3. Clone el repositorio con el siguiente comando `git clone https://github.com/LuisVigoya/ViShop.git`
4. Una vez clonado haga un cd a esa carpeta que se creo dentro de `ViShop` y renombrela a `01-ViShop`
5. Entre a su rama correspondiente con el comando `git checkout NombreRama`
  - Nombres de rama creados
    - andres
    - cesar
    - luis
7. Instale los modulos de node con el siguiente comando `npm install`
6. Para inicializar el proyecto use `npm start`

# Pasos para hacer un push a git

1. Para subir los cambios al git ejecute el comando `git push -u origin NombreRama`
2. una vez realizado esto con su `NombreRama` Respetivo en futuros push solo debera ejecutar el comando `git push`
3. para agregar los cambios a la rama main debera hacerlo con un `Pull Request` y estos seran validados para incluir en el main

# Pasos para hacer un Pull de git
1. Verifique si hay cambios en la rama main usando `git fetch`, esto solo me actualiza los commit que se encuentras hechos
en el repositorio en git a mi repositorio local, no hace cambios en los archivos
1. Ya hubicado en la ruta se su proyecto ejecute el comando `git pull origin main` previamente verifique que se encuentran  en su rama para traer los cambios que se encuentren en main


## Cambios con el initial commit

- Se realizo la intalacion del primeNG en su version 16.8.0
- Se realizo la instalcion de Prime Flex
- Se configuro dentro de app el modulo de prime-ng, donde se podran realizar las distintas importacion de los componentes
que vamos usando en nuestro proyecto y que provienen de primeNG, estas importaciones funcionaran de forma global ya que se
importo el modulo completo en app.module.ts
- Se realizo la configuracion del efecto ripple de primeNG en el app.component.ts
- Se configuro el tema lara-light-blue en el angular.json styles y del mismo modo en app/styles.css
# git branch -a
- para ver todas las ramas , tanto locales como remotas.