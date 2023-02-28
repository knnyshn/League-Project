> [Template Used](https://github.com/metruzanca/ga-vercel-demo)

## APP TITLE ##
League Champion Compendium

## Description ##
Database of League of Legends champions up until patch 13.4. 
Database has all relevant information and links to said champions.
Information includes three assets regarding default splash pictures, lore of each champion, base stats, enemy and ally tips, detailed stats and tags of each champion as well. 
Has full CRUD capability for all of LoL's champions as well as a search function for said champions. 

## API ##
http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json
http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion/["champion name"].json
http://ddragon.leagueoflegends.com/cdn/img/champion/splash/["champion name"]_0.jpg
http://ddragon.leagueoflegends.com/cdn/img/champion/loading/["champion name"]_0.jpg
http://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/["champion name"].png

## ROUTES ##

| Route                 | HTTP Method | DB Action  | Description                         |
|-----------------------|-------------|------------|-------------------------------------|
| /api                  | GET         | INDEX      | Index of all the champions          |
| /api/search           | GET         | SEARCH     | Search for specific champion        |
| /api/create           | POST        | CREATE     | Create a champion                   |
| /api/:id              | GET         | SHOW       | Show the specific champion          |
| /api/:id/update       | PATCH       | UPDATE     | Update champion with specific _id:  |
| /api/:id/delete       | DELETE      | DELETE     | Delete champion with specific _id:  |

## API SNIPPET ##
```js
async function champAPI(champ) {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champ}.json`    
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        return json;
    
      } catch (error) {
        console.log(error);
      }
    }    
    champAPI("Fizz");
```
**This shows that how I originally sourced API for a specific champion; however, I made a custom database with selected data from these several different points/assets for all champions to my specific schema. All information will be in champ.json under the db folder.

```js
async function champData(champion) {
  const searchUrl = `https://league-project.vercel.app/api/search/?name=${champion}`
  const res = await fetch(searchUrl)
  const json = await res.json()
  console.log(json)
}
```
** New champion API. 

## DATA MODEL ##
"id":
    "name": 
    "title": 
    "lore": 
    "allytips": [ ],
    "enemytips": [ ],
    "info": [ ],
    "splash": 
    "loading": 
    "icon": 
    "tags": [ ],
    "partype": 
    "stats": [ ]

## MVP ##
Have a full CRUD capable backend with all the champions with curated/detailed information.

## POST MVP ##
To start on an aesthetically pleasing front end / polished search and display champions.

## GOALS ##
Get backend done by end of Friday. Front End and MVP/Post MVP done over weekend. If possible, have a search bar and display for all the detailed info visible with some assets.



## Plagiarism ##

Take a moment to re-familiarize yourself with the
[plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job.
