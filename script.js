let enterButton;
let alButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let c1Button;
let c2Button;
let screen = 0;


//basic
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  background("pink");
  text(
    "As you sit around in your house bored\nwith nothing to do. As you finally\nrise up from your couch to get yourself a snack, \nyou here a knock on the door.",
    width / 2,
    height / 2 - 160
  );

  enterButton = new Sprite(width / 2, height / 2 + 100);
  alButton = new Sprite(-200, -200);
  a1Button = new Sprite(-50, -50);
  a2Button = new Sprite(-100, -100);
  b1Button = new Sprite(-150, -150);
  b2Button = new Sprite(-200, -200);
  c1Button = new Sprite(-250, -250);
  c2Button = new Sprite(-300, -300);
}

function draw() {
  // Draw enter button
  enterButton.w = 140;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.text = "Check it out";
  enterButton.color = "plum";

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    background("paleturquoise");
    text(
      "*slip* A paper slides under your front door.\nAs you pick up to read this mysterious letter,\nyou see an odd stamp, a suspicious one in fact.",
      width / 2,
      height / 2 - 100
    );
    enterButton.pos = { x: -180, y: -100 };

    // Add A1 button
    a1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
    a1Button.w = 150;
    a1Button.h = 50;
    a1Button.collider = "k";
    a1Button.color = "plum";
    a1Button.text = "Ignore the letter";

    // Add A2 button
    a2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    a2Button.w = 100;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.color = "plum";
    a2Button.text = "Read it";

    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      print("Display screen 2");
      background("palegreen");
      text(
        "You toss the letter away and \nmake your way to the kitchen. \nYou settle down to take a long nap...\nB A M\nYou hear a loud noise coming form outside\nAlmost like someone is trying to break in.",
        width / 2,
        height / 2 - 100
      );

      // Move extra buttons off screen
      a1Button.pos = { x: -200, y: -200 };
      a2Button.pos = { x: -50, y: -50 };

      // Add b1 Button
      b1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
      b1Button.w = 50;
      b1Button.h = 50;
      b1Button.collider = "k";
      b1Button.color = "plum";
      b1Button.text = "Run";

      // Add b2 Button
      b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
      b2Button.w = 50;
      b2Button.h = 50;
      b2Button.collider = "k";
      b2Button.color = "plum";
      b2Button.text = "Hide";

      screen = 2;
    } else if (a2Button.mouse.presses()) {
      print("Display screen 5");
      background("lightgreen");
      text("You read the letter and it tells \nyou that in a few minutes you will be under attack.\n You quickly make a run for it and enter a pathway a few meters \naway from your house where the path splits into two. \nOn one side is a forest. \nThe other side is a city.", width / 2, height / 2 - 100);

      // Move extra buttons off screen
      a1Button.pos = { x: -200, y: -200 };
      a2Button.pos = { x: -50, y: -50 };

      // Add C1 button
      c1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
      c1Button.w = 100;
      c1Button.h = 50;
      c1Button.collider = "k";
      c1Button.color = "plum";
      c1Button.text = "Forest";

      // Add C2 button
      c2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
      c2Button.w = 100;
      c2Button.h = 50;
      c2Button.collider = "k";
      c2Button.color = "plum";
      c2Button.text = "City";

      screen = 5;
    }
  }

  if (screen == 2) {
    if (b1Button.mouse.presses()) {
      print("Display screen 3");
      background("AliceBlue");
      text(
        "In the limited amount of time, you run to the back of your house.\n\n...\n\nYOURE SURROUNDED BY BANDITS!! YIKES!!\n\n[ending1:trapped]",
        width / 2,
        height / 2 - 100
      );
      // Move all buttons off screen
      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -200, y: -200 };

      screen = 3;
    } else if (b2Button.mouse.presses()) {
      print("Display screen 4");
      background("BurlyWood");
      text(
        "You hide quietly...\nBASH!!\nYour door bursts open!! \nThere's no way out!\n\n[engding2:covered]",
        width / 2,
        height / 2 - 100
      );
      // Move all buttons off screen
      b1Button.pos = { x: -200, y: -200 };
      b2Button.pos = { x: -200, y: -200 };

      screen = 4;
    }
  }

  if (screen == 5) {
    if (c1Button.mouse.presses()) {
      print("Display screen 6");
      background("Coral");
      text(
        "You rush to the forest. In the corner of your vision, \nyou see bandits surrounding your house. You would \nhave definitely been caught if you hung around any more. \nYou run into the abyss and escape. \n\n[ending3:wilderness]",
        width / 2,
        height / 2 - 100
      );
      // Move all buttons off screen
      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -200, y: -200 };

      screen = 6;
    } else if (c2Button.mouse.presses()) {
      print("Display screen 7");
      background("HoneyDew");
      text(
        "You head to the city in a rush with no intrest in ging back.\nYou keep running\nAnd running\nWhat will happen next?\n\n[ending4:city]",
        width / 2,
        height / 2 - 100
      );
      // Move all buttons off screen
      c1Button.pos = { x: -200, y: -200 };
      c2Button.pos = { x: -200, y: -200 };

      screen = 7;
    }
  }

  print(screen);
}