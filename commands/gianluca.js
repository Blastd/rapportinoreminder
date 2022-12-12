const description = 'Ti spiegherà cosa sono le fumetterie'

const init = (interaction, client) => {
    interaction.reply({content: "La fumetteria è un negozio specializzato nella vendita di fumetti... https://it.wikipedia.org/wiki/Fumetteria", files: ["https://shop.maranello.it/wp-content/uploads/2020/05/IMG_2039.jpg"]})
}

module.exports = { init, description }
