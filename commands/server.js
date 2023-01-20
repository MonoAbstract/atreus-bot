const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Displays basic information about the server'),
    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        // Guild = Server
        await interaction.reply(`This server is ${interaction.guild.name} and currently has ${interaction.member.memberCount}.`);
    },
}