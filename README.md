JS Game Engine
==============

##Directory Structure
    /js/
    Javascript for both the server and the client

    /js/game/
    Game-independant code

    /js/server/
    Just the server code

    /js/client/
    Just the client code


##Object Hierarchy
* Engine
    * Game
        * ClientGame
        * ServerGame

**Engine** class is the base class for everything that the game should do.  This includes:
* Updates
* Starting the game
* Pausing/stopping the game
* Providing updates to the gamestate.
* Rewriting the gamestate

**Game** class is one level above **Engine**.  It is where all game-logic should go.  Depending on how your server 
is built (Authoritative or not), you will want to keep this fairly simple, like movement and other actions 
that both the server **and** client should be doing.

**ClientGame** class is the shell around **Game** that houses all logic that can or should only be done on the client
side.  This includes input handling, client-side predictions, and routing input to the server to be validated.

**ServerGame** class is the shell around **Game** that houses all logic that can or should only be done on the server.
This is by-far, the most complicated piece, as it is required to validate input, update the gamestate, and send updates
to the clients.  

