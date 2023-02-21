import mongoose from './connection.js'

import Champion from '../models/champions.js'
// import champData from './champions.json' assert { type: 'json' }

import Item from '../models/items.js'
// import itemData from './items.json' assert { type: 'json' }

await Champion.deleteMany({})
// await Champion.create(champData);

await Item.deleteMany({})
// await Item.create(itemData);