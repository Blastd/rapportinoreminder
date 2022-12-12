const description = 'Invia una foto di Pierpaolo'

const init = (interaction, client) => {
    interaction.reply({content: "( ͡° ͜ʖ ͡°)", files: ["https://i.imgur.com/QxWCtwf.jpg"]})
}

module.exports = { init, description }
