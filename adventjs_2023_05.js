function cyberReindeer(road, time) {
  let followedRoute = [];
  followedRoute.push(road);

  let ongoingRoad = [...road];

  let reinderSlot = ".";
  let reinderPos = 0;

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      ongoingRoad = [...ongoingRoad.join("").replaceAll("|", "*")];
    }
    if (ongoingRoad[reinderPos + 1] === "|") {
      followedRoute.push(ongoingRoad.join(""));
      continue;
    }

    reinderPos++;
    ongoingRoad[reinderPos - 1] = reinderSlot;
    reinderSlot = ongoingRoad[reinderPos];
    ongoingRoad[reinderPos] = "S";

    followedRoute.push(ongoingRoad.join(""));
  }

  return followedRoute;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

console.log(result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
