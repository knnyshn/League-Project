import 'dotenv/config'
import Champion from '../models/champions.js'
import champData from '../db/champ.json' assert { type: "json" }
import mongoose from 'mongoose'

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  // Seed the database here
  
}

const champs = Object.values(champData.data)
await Champion.deleteMany({})
await Champion.insertMany(champs)

// DEAD
// import mongoose from 'mongoose';
// console.log("did this work");
// await mongoose.disconnect()
