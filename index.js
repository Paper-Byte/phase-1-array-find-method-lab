// code your solution here
function superbowlWin(record) {
  const winningGame = record.find(findWin);
  if (winningGame) {
    return winningGame.year;
  } else {
    return undefined;
  }
}

function findWin(element) {
  if (element.result === 'W') {
    return element.year;
  }
  return undefined;
}
