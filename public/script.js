const champUrl = 'http://localhost:3000/api'

async function champAPI() {
  const res = await fetch(champUrl)
  const json = await res.json()
  console.log(json)
}
champAPI()