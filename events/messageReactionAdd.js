exports.run = (client, messageReaction, user) => {
  let msg = messageReaction.message;
  if (msg.author.id == client.user.id && messageReaction.count > 1) {
    if (messageReaction.emoji.toString() === "❌") msg.delete();
  }
}
