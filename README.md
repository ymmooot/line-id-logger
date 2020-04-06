# line-id-logger

## Usage

```
# install
npm ci

# run server
npm run start
```

Server starts with `npm run start` and you will get [ngrok](https://ngrok.com/) URL.  
Paste it to Line bot Webhook URL setting and send some message in room you invited the bot.  
This server will dump your user ID, and your room ID if it is a group chat.
