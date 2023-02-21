> [Template Used](https://github.com/metruzanca/ga-vercel-demo)

## LEAGUE TEAM BUILDER ##

## Description ##
The backend for a league team builder. Will have database / JSON of the full list of champions and items. The purpose is to create a team builder where you can choose all the champions and itemize said champions. The backend will incorporate all the boilerplate files associated with champions and items respectively.

## API ##
Champions: http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json
Champion Details: http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/Aatrox.json
Champion Splash: http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
Champion Icons: http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/Aatrox.png
Items: http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/item.json
Item Icons: http://ddragon.leagueoflegends.com/cdn/13.3.1/img/item/1001.png

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
## MVP ##
Implement an itemization option. For your team of five. Possibly implement an enemy team as well.

## POST MVP ##
Really polished front end.

## GOALS ##
Get backend done by end of Friday. Front End and MVP/Post MVP done over weekend. 

## Plagiarism

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
