# ROCK/PAPER/SCISSORS/LIZZARD/SPOCK
## Descripción

Mi primer proyecto se trata de un simulador del juego infantil de azar para la toma de decisiones de piedra, papel, tijeras en su versión extendida creada por Sam Kass (homenajeando a Star Trek) y popularizada por la serie "The Big Bang Theory". El jugador tiene que clicar una de las cinco botones de opciones disponibles y la máquina le entregará una respuesta al azar de las cinco disponibles. Ambas respuestas se compararan y se decidirá el ganador en base a las reglas.

​
## Reglas del juego 

Es un juego de azar basado en unas normas básicas por las cuales se establece un ganador: 

+ La **piedra** aplasta la **tijera**.
+ La **tijera** corta el **papel**.
+ El **papel** envuelve la **piedra**.
+ La **piedra** machaca el **lagarto**.
+ El **lagarto** envenena a **Spock**.
+ **Spock** rompe las **tijeras**.
+ La **tijera** decapita al **lagarto**.
+ El **lagarto** se come al **papel**.
+ El **papel** desautoriza a **Spock**.
+ **Spock** vaporiza a la **piedra**.
​
Si al comparar las respuestas el jugador resulta ganador, se le sumará un punto en su *score*.

En caso que sea la máquina la ganadora, el punto se sumará en el *score* de la máquina.

Por último, en caso de empate, ninguno de los dos ganará ningun punto.

## MVP - User stories

### MVP
En una primera versión funcional del producto habrá:
+ __Pantalla de inicio__ con un botón que al apretarlo se iniciará el juego.
+ __Pantalla del juego__
    - __Pop-up__ Con las reglas del juego y la imagen de las combinaciones posibles.
    - __Juego__ 
        * _Parte derecha_ Botones para que el usuario elija la opción que desea
        * _Parte izquierda_ Canvas dividido horizontalmente donde se dibujará la opción del jugador y de la máquina.
        * _Ronda acabada_ Clear del canvas y dibujada la opción del ganador, una frase y la puntuación acumulada del ganador (jugador o máquina)


### User stories
Como jugador elegiré una opción de las cinco para que la máquina me devuelva otra aleatoria y identifique el ganador para conseguir puntos.

### Wireframes
![wireframe1](https://github.com/AGustems/finalproject-mo1-ironhack/blob/master/wireframes/wireframe1.jpg)

![wireframe2](https://github.com/AGustems/finalproject-mo1-ironhack/blob/master/wireframes/wireframe2.jpg)

![wireframe3](https://github.com/AGustems/finalproject-mo1-ironhack/blob/master/wireframes/wireframe3.jpg)

![wireframe4](https://github.com/AGustems/finalproject-mo1-ironhack/blob/master/wireframes/wireframe4.jpg)


## Backlog
+ La puntuación se almacenará en cada ronda, y al llegar a cierta cantidad de puntos ganados, el jugador recibirá una *insígnia* por su logro.
+ Versión para dos jugadores (donde se oculte la decisión del primer jugador hasta que el segundo jugador no introduzca la suya).
+ Incluir otras versiones del juego (la tradicional con tres elementos, una versión con 7 elementos, con 9...).
+ Juego responsive.


## Links



​
### Git
Repositorio:
+ [Repositorio en GitHub](https://github.com/AGustems/finalproject-mo1-ironhack)

​
// Deploy: (no ahora, para un futuro)
​
### Slides
// To Do​


### Kanban

+ [Kanban del proyecto](https://trello.com/b/pwKnX0a0/mo1-final-project)



