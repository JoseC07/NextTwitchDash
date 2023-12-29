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
    const redirectUri = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&clientsecret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;
    res.redirect(redirectUri);
});

app.listen(port,()=>{
    console.log(`Example app Listening on port ${port}`)
})

console.log(twitchClientId,twitchClientSecret);