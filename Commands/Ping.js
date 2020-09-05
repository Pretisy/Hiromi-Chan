module.exports = {
    name: 'ping',
    description: "this is a Ping command!",
    execute(message, args){
        message.channel.send('pong!');
    }
}