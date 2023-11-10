const team = {
  _players: [
    { firstname: "Roger", lastName: "Bishop", age: 23 },
    { firstname: "Katrina", lastName: "Alvarez", age: 25 },
    { firstname: "Nia", lastName: "Holmes", age: 20 },
  ],
  _games: [
    { opponent: "jets", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Giants", teamPoints: 45, opponentPoints: 12 },
    { opponent: "Eagles", teamPoints: 31, opponentPoints: 15 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstname: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
