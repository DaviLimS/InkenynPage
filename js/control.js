let sound = {
  intesity: 30,
  distance: 5,
};
let disipation = -0.1;

function intensityTest() {
  let intensityNow = sound.intesity * 10 ** (sound.distance * disipation);
  let intensity = Math.floor(intensityNow);

  if (typeof sound.intesity != "number" || sound.intesity < 0) {
    sound.distance = 0;
    console.log("Doesnt sound exist");
  } else if (intensity > 0) {
    console.log(`Intensity of sound is ${intensityNow}`);
  } else {
    console.log("any sound detected");
  }
}
intensityTest();
