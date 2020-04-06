const { json } = require('micro');
const ngrok = require('ngrok');

const greenString = str => {
  const green   = '\u001b[32m';
  const reset   = '\u001b[0m';
  return `${green}${str}${reset}`
}

ngrok.connect(3000).then(url => {
  console.log(`Webhook URL: ${greenString(url)} \nPaste this URL to Line bot webhook setting and send some message in the room you invited the bot.\n`);
});

module.exports = async (req, res) => {
  try {
    const { events } = await json(req);
    console.log(events)
  } catch (error) {
    console.log(error)
  }

  res.end('ok')
}