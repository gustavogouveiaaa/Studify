const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Listen to the best playlist"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/2qR0NhL12SDE8gB4zEo5xs?si=2e93db90708241b7")
    }
}