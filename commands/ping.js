// require() is a node method that takes classes from files/frameworks
const { SlashCommandBuilder } = require('discord.js');

// module.exports makes it so that you can use require() to export methods to other files
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies to the user with a Pong'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};