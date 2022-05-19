// Example Command

// This is important
const { SlashCommandBuilder } = require('@discordjs/builders');

// Export
module.exports = {
    // Data about the command
	data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server')
        // Subcommands
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                // Options
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server')),
        // Options can be added here if there is no subcommand
    // Code for the command
	async execute(interaction) {
        // Show that the bot is thinking
        await interaction.deferReply();
        // Subcommand, put code here if no subcommand
        switch(interaction.options.getSubcommand()) {
            case "server":
                // Edit the reply, use interaction.reply if you didn't use deferReply()
                // Input for both functions is a string
                await interaction.editReply(`Server name: \`${interaction.guild.name}\`\nTotal members: \`${interaction.guild.memberCount}\``);
                break;
            case "user":
                let userId = interaction.options.getUser('target').id || interaction.user.id;
                const user = interaction.client.users.cache.find(user => user.id === userId);
                await interaction.editReply(`User tag: \`${user.tag}\`\nUser id: \`${user.id}\``);
                break;
        }
	},
};