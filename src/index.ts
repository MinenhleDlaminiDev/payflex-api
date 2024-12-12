import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const user = {
  id: 1,
  idNumber: "9502451455841",
  fullname: "Minenhle Dlamini",
  email: "minenhledlamini@hiremepayflex.com",
  country: "South Africa",
  hobbies: [],
}

const hobbies = [
  { id: "1", hobby: "football" },
  { id: "2", hobby: "basketball" },
  { id: "3", hobby: "painting" },
  { id: "4", hobby: "photography" },
  { id: "5", hobby: "cycling" },
  { id: "6", hobby: "gardening" },
  { id: "7", hobby: "swimming" },
  { id: "8", hobby: "knitting" },
  { id: "9", hobby: "chess" },
  { id: "10", hobby: "traveling" },
  { id: "11", hobby: "hiking" },
  { id: "12", hobby: "reading" },
  { id: "13", hobby: "writing" },
  { id: "14", hobby: "volunteering" },
  { id: "15", hobby: "dancing" },
  { id: "16", hobby: "cooking" },
  { id: "17", hobby: "baking" },
  { id: "18", hobby: "fishing" },
  { id: "19", hobby: "skiing" },
  { id: "20", hobby: "surfing" },
  { id: "21", hobby: "yoga" },
  { id: "22", hobby: "meditation" },
  { id: "23", hobby: "watching movies" },
  { id: "24", hobby: "listening to music" },
  { id: "25", hobby: "playing video games" },
  { id: "26", hobby: "board games" },
  { id: "27", hobby: "puzzles" },
  { id: "28", hobby: "bird watching" },
  { id: "29", hobby: "astronomy" },
  { id: "30", hobby: "camping" },
  { id: "31", hobby: "stargazing" },
  { id: "32", hobby: "ice skating" },
  { id: "33", hobby: "pottery" },
  { id: "34", hobby: "woodworking" },
  { id: "35", hobby: "carpentry" },
  { id: "36", hobby: "coin collecting" },
  { id: "37", hobby: "stamp collecting" },
  { id: "38", hobby: "gardening" },
  { id: "39", hobby: "sculpting" },
  { id: "40", hobby: "calligraphy" },
  { id: "41", hobby: "watchmaking" },
  { id: "42", hobby: "journaling" },
  { id: "43", hobby: "public speaking" },
  { id: "44", hobby: "DIY projects" },
  { id: "45", hobby: "model building" },
  { id: "46", hobby: "birdhouse building" },
  { id: "47", hobby: "cycling" },
  { id: "48", hobby: "sailing" },
  { id: "49", hobby: "horseback riding" },
  { id: "50", hobby: "potluck hosting" },
  { id: "51", hobby: "bowling" },
  { id: "52", hobby: "skateboarding" },
  { id: "53", hobby: "billiards" },
  { id: "54", hobby: "rock climbing" },
  { id: "55", hobby: "parkour" },
  { id: "56", hobby: "drone flying" },
  { id: "57", hobby: "3D printing" },
  { id: "58", hobby: "laser cutting" },
  { id: "59", hobby: "video editing" },
  { id: "60", hobby: "graphic design" },
  { id: "61", hobby: "comic book collecting" },
  { id: "62", hobby: "model trains" },
  { id: "63", hobby: "geocaching" },
  { id: "64", hobby: "photography" },
  { id: "65", hobby: "vlogging" },
  { id: "66", hobby: "blogging" },
  { id: "67", hobby: "social media content creation" },
  { id: "68", hobby: "nutrition" },
  { id: "69", hobby: "fitness" },
  { id: "70", hobby: "swimming" },
  { id: "71", hobby: "boxing" },
  { id: "72", hobby: "martial arts" },
  { id: "73", hobby: "tai chi" },
  { id: "74", hobby: "stand-up comedy" },
  { id: "75", hobby: "puppet making" },
  { id: "76", hobby: "acrobatics" },
  { id: "77", hobby: "wrestling" },
  { id: "78", hobby: "improv" },
  { id: "79", hobby: "acting" },
  { id: "80", hobby: "magic tricks" },
  { id: "81", hobby: "fashion design" },
  { id: "82", hobby: "makeup artistry" },
  { id: "83", hobby: "hair styling" },
  { id: "84", hobby: "nail art" },
  { id: "85", hobby: "mixology" },
  { id: "86", hobby: "craft beer brewing" },
  { id: "87", hobby: "wine tasting" },
  { id: "88", hobby: "cheese making" },
  { id: "89", hobby: "cheerleading" },
  { id: "90", hobby: "juggling" },
  { id: "91", hobby: "soap making" },
  { id: "92", hobby: "candle making" },
  { id: "93", hobby: "metalworking" },
  { id: "94", hobby: "theater" },
  { id: "95", hobby: "cycling" },
  { id: "96", hobby: "snowboarding" },
  { id: "97", hobby: "mixing music" },
  { id: "98", hobby: "sound editing" },
  { id: "99", hobby: "doodling" },
  { id: "100", hobby: "sketching" }
]


const app = new Hono()

app.get('/profile', (c) => {
  return c.json({data:user})
})

app.get('/hobbies', (c) => {
  return c.json({data:hobbies})
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
