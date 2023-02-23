import 'dotenv/config'
import Champion from '../models/champions.js'
import champData from '../db/champ.json' assert { type: "json" }
import mongoose from 'mongoose'

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()

async function seed() {
  await Champion.deleteMany({})
  await Champion.insertMany(champData)
  // Seed the database here
}
await mongoose.disconnect()

// const champs = Object.values(champData.data)

// DEAD
// import mongoose from 'mongoose';
// console.log("did this work");
// await mongoose.disconnect()
