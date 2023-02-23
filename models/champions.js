import mongoose from 'mongoose'

const champSchema = new mongoose.Schema({
  id: String,
  name: String,
  title: String,
  lore: String,
  difficulty: Number,
  splash: String,
  loading: String,
  icon: String,
  tags: [String],
  partype: String,
  stats: [{
    hp: Number,
    hpperlevel: Number,
    mp: Number,
    mpperlevel: Number,
    movespeed: Number,
    armor: Number,
    armorperlevel: Number,
    spellblock: Number,
    spellblockperlevel: Number,
    attackrange: Number,
    hpregen: Number,
    hpregenperlevel: Number,
    mpregen: Number,
    mpregenperlevel: Number,
    crit: Number,
    critperlevel: Number,
    attackdamage: Number,
    attackdamageperlevel: Number,
    attackspeedperlevel: Number,
    attackspeed: Number
  }],
})

export default mongoose.model('Champion', champSchema)
