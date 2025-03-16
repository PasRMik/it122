'use strict'

import {Game} from "./models/Game.js";

// find all documents
Game.find({}).lean()
.then((games) => {
    console.log(games)
})
.catch(err => console.log(err));