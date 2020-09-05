module.exports = {
    name: 'Say',
    description: "This is a say command!",
    execute(message, args) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}