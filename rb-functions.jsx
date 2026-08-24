async function placeBattlefields() {
  const destintation = game.isHost ? "myBF1": "myBF2"
  if (cards?.Battlefields?.length > 0) {
    for (const card of cards?.Battlefields) {
      if (card.owner === game.playerId) {
        await functions.moveCard(card, destintation)
      }
    }
    await functions.repositionCards()
  }
}