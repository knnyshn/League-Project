const champUrl = 'http://localhost:3000/api/search'
const form = document.getElementById('search-wrapper')
const input = document.getElementById('search')

// async function champAPI() {
//   const res = await fetch(champUrl)
//   const json = await res.json()
//   console.log(json)
// }
// champAPI()

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const champion = input.value
  champData(champion)
})

async function champData(champion) {
  const searchUrl = `https://league-project.vercel.app/api/search/?name=${champion}`
  const res = await fetch(searchUrl)
  const json = await res.json()
  console.log(json)
}
