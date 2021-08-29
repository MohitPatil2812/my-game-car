var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b44209f7-2d02-41e0-9c98-22e2c7b1345c","cbc78218-6281-4a2d-8c1b-7dab2e3fa04b","44334174-d011-44d5-b4d5-44e5dfb52ad5","f8f9efad-b243-4492-9307-8f5b37cedb2a","6a69b8ab-9edb-4c1d-80d6-ff86ad222097","f27c7a44-c94b-484e-a729-c4fcc2b8fc88"],"propsByKey":{"b44209f7-2d02-41e0-9c98-22e2c7b1345c":{"sourceSize":{"x":508,"y":508},"frameSize":{"x":508,"y":508},"frameCount":1,"frameDelay":12,"name":"bg","sourceUrl":null,"size":91462,"version":"FIptnEkdorKsD4q6BMNy_WTSFWDfJFMP","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/b44209f7-2d02-41e0-9c98-22e2c7b1345c.png"},"cbc78218-6281-4a2d-8c1b-7dab2e3fa04b":{"sourceSize":{"x":363,"y":688},"frameSize":{"x":363,"y":688},"frameCount":1,"frameDelay":4,"name":"carp.png_1","sourceUrl":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/cbc78218-6281-4a2d-8c1b-7dab2e3fa04b.png","size":91637,"version":"mwP36MB7xdzBz4aP0_P89uZUWvbTQI3o","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/cbc78218-6281-4a2d-8c1b-7dab2e3fa04b.png"},"44334174-d011-44d5-b4d5-44e5dfb52ad5":{"sourceSize":{"x":441,"y":566},"frameSize":{"x":441,"y":566},"frameCount":1,"frameDelay":4,"name":"taxi.png_1","sourceUrl":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/44334174-d011-44d5-b4d5-44e5dfb52ad5.png","size":80762,"version":"geJLC.E0B95v_b8fIHl7PxZkXPoUP0mO","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/44334174-d011-44d5-b4d5-44e5dfb52ad5.png"},"f8f9efad-b243-4492-9307-8f5b37cedb2a":{"sourceSize":{"x":505,"y":494},"frameSize":{"x":505,"y":494},"frameCount":1,"frameDelay":4,"name":"policecar.png_1","sourceUrl":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/f8f9efad-b243-4492-9307-8f5b37cedb2a.png","size":81938,"version":"eI3ABAC8Gqhj_eWzbkqZcqevTPuPreLQ","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/f8f9efad-b243-4492-9307-8f5b37cedb2a.png"},"6a69b8ab-9edb-4c1d-80d6-ff86ad222097":{"sourceSize":{"x":73,"y":353},"frameSize":{"x":73,"y":353},"frameCount":1,"frameDelay":12,"name":"Screenshot_2021-08-29_102335-removebg-preview.png_1","sourceUrl":null,"size":28528,"version":"EsrKjWkGbUix36IgDzt5.mvK6.VlYKpI","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/6a69b8ab-9edb-4c1d-80d6-ff86ad222097.png"},"f27c7a44-c94b-484e-a729-c4fcc2b8fc88":{"sourceSize":{"x":111,"y":248},"frameSize":{"x":111,"y":248},"frameCount":1,"frameDelay":4,"name":"pick up truck","sourceUrl":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/f27c7a44-c94b-484e-a729-c4fcc2b8fc88.png","size":33070,"version":"HlcNhMP18zO.KoZT8kLL7GlCa82OrJxV","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/exFDFfuXh6YAb4cYriKvoiVMZRj7mYBK-0LLUijpezQ/f27c7a44-c94b-484e-a729-c4fcc2b8fc88.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backdrop = createSprite(200, 150, 400, 400);

var police = createSprite(150, -350);
police.scale = 0.2;

var playerCar = createSprite(100, 300);
playerCar.scale = 0.2;

var taxi = createSprite(50, -100);
taxi.scale = 0.2;

var truck = createSprite(300, -400);
truck.scale = 0.5;
var pickUpTruck = createSprite(350, -480);
pickUpTruck.scale = 0.4;
background("red");
function draw() {
  police.setCollider("rectangle", 0, 0, 25, 50);
  taxi.setCollider("rectangle", 0, 0, 5, 50);
  truck.setCollider("rectangle", 0, 0, 20, 250);
  pickUpTruck.setCollider("rectangle", 0, 0, 20, 100);
  
  backdrop.setAnimation("bg");
  
  playerCar.setAnimation("carp.png_1");
  taxi.setAnimation("taxi.png_1");
  police.setAnimation("policecar.png_1");
  truck.setAnimation("Screenshot_2021-08-29_102335-removebg-preview.png_1");
  pickUpTruck.setAnimation("pick up truck");
  
  backdrop.velocityY = 3;
  taxi.velocityY = 3;
  police.velocityY = 3;
  truck.velocityY = 3;
  pickUpTruck.velocityY = 3;
  if (backdrop.y >= 200) {
    backdrop.y = 150;
  }
  if (taxi.y >= 450) {
    taxi.y = -100;
    taxi.x = randomNumber(20, 100);
  }
  if (police.y >= 450) {
    police.y = -350;
    police.x = randomNumber(130, 200);
  }
  if (truck.y >= 500) {
    truck.y = -400;
    truck.x = randomNumber(220, 300);
  }
  if (pickUpTruck.y >= 500) {
    pickUpTruck.y = -480;
    pickUpTruck.x = randomNumber(320, 380);
  }
  
  if (keyDown("right")) {
    playerCar.x = playerCar.x+5;
  }
  if (keyDown("left")) {
    playerCar.x = playerCar.x-5;
  }
  
  if (playerCar.isTouching(police)||playerCar.isTouching(taxi)||playerCar.isTouching(truck)||playerCar.isTouching(pickUpTruck)) {
    playerCar.destroy();
    police.destroy();
    taxi.destroy();
    truck.destroy();
    pickUpTruck.destroy();
    backdrop.destroy();
    fill("white");
    strokeWeight(8);
    stroke("red");
    textSize(30);
    text("YOU LOST", 150, 200);
    textSize(20);
  }
  createEdgeSprites();
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
