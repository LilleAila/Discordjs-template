// Another example command
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    // Slash command data
    data: new SlashCommandBuilder()
        .setName("example")
        .setDescription("This is an example command")
        .addStringOption(option => option.setName("option").setDescription("Example option")),
    // Function to execute
    async execute(interaction) {
        // Show that the bot is thinking
        await interaction.deferReply();
        // Or use this to only show the reply to the person who sent the message
        await interaction.deferReply({ ephemeral: true })

        // get the value of the option
        const option = interaction.options.getString("option");

        // Edit the reply
        await interaction.editReply("Text to send in discord")
    }
}