import dotenv from 'dotenv'
import express from 'express';
dotenv.config();


const app = express();
const port = 3000;

const twitchClientId = process.env.TWITCH_CLIENT_ID;
const twitchClientSecret = process.env.TWITCH_CLIENT_SECRET;


app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.post('/test',(req,res) => {
    res.send('Hello this is a succesful post request!');
})

app.get('/auth/twitch',(req,res)=> {
    const twitchAuthURL = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${process.env.TWITCH_CLIENT_ID}&redirect_uri=${process.env.TWITCH_REDIRECT_URI}&scope=moderator%3Aread%3Afollowers`;
    res.redirect(twitchAuthURL);
});

app.get('/auth/twitch/callback',(req,res)=> {
    const authorizationCode = req.query.code as string;
    console.log(authorizationCode);
    if(!authorizationCode)
    {
        return res.status(400).send('Authorization code is missing');
    }

});

app.listen(port,()=>{
    console.log(`Example app Listening on port ${port}`)
})

console.log(twitchClientId,twitchClientSecret);