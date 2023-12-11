function adjustLights(lights) {
  const fullLength = lights.length;

  let nextColorToFind = lights[0];
  let outOfPatternLights = 0;

  lights.map((el) => {
    if (el != nextColorToFind) {
      outOfPatternLights++;
    }

    nextColorToFind = nextColorToFind === "🟢" ? "🔴" : "🟢";
  });

  return Math.min(outOfPatternLights, fullLength - outOfPatternLights);
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
// -> 0 (ya están alternadas)

adjustLights(["🔴", "🔴", "🔴"]);
// -> 1 (cambias la segunda luz a 🟢)
