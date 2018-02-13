$(document).ready(function() {
  console.log('wootwoot');

let playerName = "";
let key = false;
let book = false;
let unlockDoor = false;
let pulledBook = false;
let inspectedBookShelf = false;
let inspectedDoor = false;
let insideRoomTwo = false;
let inspectChest = false;
let dagger = false;
let approachDoorFromRoomOneFirstTime = true;
let seenMonster = false;
let monsterAlive = true;
let proposed = false;

  $(".yes-button").on("click", function() {
    console.log('button clikcked');
    $(".intro-page").css("display", "none");
    $(".name-page").css("display", "block");
  });

/*let goToRoomNumber2 = function() {
  $(".content-text").text("Welcome to the game, " + playerName + ". You find yourself in a library. You've never been in one of these  DEERRRRRRRPPPPPP ds in them. Anyways, . . . .");
};*/

let enterGame = function() {

  $(".content-text").text("Welcome to the game, " + playerName + ". Our adventure begins with you waking up. As you awaken, it dawns on you that you have no idea where you are or how you got there. Your eyes are crusted over and you have a burgeoning headache—giving you the impression that you’ve been sleeping for a very long time. The uncomfortable bed creaks as you sit up and look around. You see that you’re in a small, dimly-lit room. The walls, floor, and ceiling are made of stone. Directly across from the bed is a closed door made of a dark grey metal. Along the wall to the left of the bed stands a bookshelf facing the inside of the room. And along the wall to the right of the bed lies an old oak chest. What would you like to investigate?");

  $(document).keypress(function(e) {
    if (e.which == 13) {

      switch ($('.player-input').val()) {

        case "bookshelf":

          if ((inspectedBookShelf === false) && (pulledBook === false) && (insideRoomTwo === false)) {
            $('.update-text').text("You move towards the bookshelf and begin inspecting it. You can see that it’s made of an old, heavy wood and that it’s packed to the brim with books. However, you notice that one book is sticking out slightly more than the rest.");
            book = true;
            inspectedBookShelf = true;
            break;
          }

          if ((inspectedBookShelf === true) && (pulledBook === true) && (insideRoomTwo === false)) {
            $('.update-text').text("Nothing else about the bookshelf strikes your interest.");
            break;
          }

          if ((inspectedBookShelf === true) && (pulledBook === false) && (insideRoomTwo === false)) {
            $('.update-text').text("Once again, the singular sticking-out book catches your eye.");
            break;
          }

          break;


        case "book":

          if ((book === true) && (pulledBook === false) && (insideRoomTwo === false)) {
            $('.update-text').text("You reach out, grab the conspicuous book, and pull. The book doesn’t come out of the shelf---but you feel some resistance as you pull, you hear a soft click, and you’re startled by a draft of wind that quickly enters the room as the metal door slides open. Beyond the door you can see only an impenetrable darkness.");
            unlockDoor = true;
            pulledBook = true;
            break;
          }

          if ((pulledBook === true) && (insideRoomTwo === false)) {
            $('.update-text').text("Aside from the book you pulled before, the remainder of the bookshelf appears to be completely ordinary.");
            break;
          }
            break;


        case "door":

          if ((unlockDoor === false) && (inspectedDoor === false) && (insideRoomTwo === false)) {
            $('.update-text').text("You approach the door slowly, a little wary of your surroundings. When you reach the door, you can feel an unnatural cold emanating off of it and you find yourself shivering; it’s a cold like none you’ve ever felt. Nevertheless, you run your hands along the exterior of the metal door searching for some way to open it. No luck—it’s sealed tight!");
            inspectedDoor = true;
            break;
          }

          if ((unlockDoor === false) && (inspectedDoor === true) && (insideRoomTwo === false)) {
            $('.update-text').text("The door hasn't changed since you last inspected it.");
            break;
          }

          if ((unlockDoor === true) && (insideRoomTwo === false) && (approachDoorFromRoomOneFirstTime === true)) {
            $('.update-text').text("You cautiously approach the darkness that lies beyond the door. It may be a trick of the eye, but it almost looks like the light from the current room is being sucked into that darkness. Perhaps the sound is too—it occurs to you—because your footsteps aren't making even the faintest noise. As you draw closer, an utterly horrifying creature suddenly fills the doorway. It’s humanoid in appearance, though it’s body is stick-thin; it’s skin the color of bone; it’s arms drag down to it’s feet, ending in cruel talons; and it’s face—it’s face is the most disturbing of all—for there is no face. Instead, it's as though the creature’s pale skin was stretched over its skull, showing just the trace outlines of a tortured scream underneath. Luckily, the creature cannot seem to enter the room, but you know you cannot get past the creature without a weapon of some kind. What do you do now?");
            approachDoorFromRoomOneFirstTime = false;
            seenMonster = true;
            break;
          }

          if ((unlockDoor === true) && (insideRoomTwo === false) && (approachDoorFromRoomOneFirstTime === false) && (monsterAlive === true)) {
            $('.update-text').text("The creature is still there! Though it has no eyes you can discern, you can feel it's lingering gaze. You dare not approach without a weapon. If you have one, perhaps you should use it; if you don't---find one!");
            break;
          }

          if (insideRoomTwo === true) {
            $('.update-text').text("There's no going back now! Anulus beckons!");
            break;
          }

          if ((unlockDoor === true) && (insideRoomTwo === false) && (approachDoorFromRoomOneFirstTime === false) && (monsterAlive === false)) {
            $('.update-text').text("");
            $('.content-text').text('With the creature vanquished, you step fully into the second room and the door slides closed behind you. Instantly the room becomes a swirling blur before your eyes. Your balance is thrown off and your vision is swimming—so you close your eyes to keep from getting sick. And then all at once—a sense of complete happiness comes over you. You feel warm and content. You’re totally at peace. You open your eyes and you’re in a familiar place. Sitting in a familiar chair. All of your favorite things are here: your video games, Sora, access to Paramore’s music, and your boyfriend. Choose an object to interact with!');
            insideRoomTwo = true;
            break;
          }

          break;

        case "sora":
          if (insideRoomTwo === true) {
          $('.update-text').text("You turn in your chair to glance down at Sora. As usual, he's sitting right next to you and staring up at you. You give him a quick pat on the head and his reaction gives you the confused impression that he both wanted you to do that---but was also deeply offended by it.");
          }
        break;

        case "Sora":
          if (insideRoomTwo === true) {
          $('.update-text').text("You turn in your chair to glance down at Sora. As usual, he's sitting right next to you and staring up at you. You give him a quick pat on the head and his reaction gives you the confused impression that he both wanted you to do that---but was also deeply offended by it.");
          }
        break;

        case "boyfriend":
          if (insideRoomTwo === true) {
          $('.update-text').text('You turn and look at your boyfriend and he’s kneeling down before you. He’s holding a ring, and he asks you: “Will you marry me?"');
          proposed = true;
          }
        break;

        case "nick":
          if (insideRoomTwo === true) {
          $('.update-text').text('You turn and look at your boyfriend and he’s kneeling down before you. He’s holding a ring, and he asks you: “Will you marry me?"');
          proposed = true;
          }
        break;

        case "Nick":
          if (insideRoomTwo === true) {
          $('.update-text').text('You turn and look at your boyfriend and he’s kneeling down before you. He’s holding a ring, and he asks you: “Will you marry me?"');
          proposed = true;
          }
        break;

        case "yes":
          if (proposed === true) {
            $(".library").css("display", "none");
            $(".final-page-1").css("display", "block");
          }
        break;

        case "Yes":
          if (proposed === true) {
            $(".library").css("display", "none");
            $(".final-page-1").css("display", "block");
          }
        break;

        case "no":
          if (proposed === true) {
            $(".library").css("display", "none");
            $(".final-page-2").css("display", "block");
          }
        break;

        case "No":
          if (proposed === true) {
            $(".library").css("display", "none");
            $(".final-page-2").css("display", "block");
          }
        break;

        case "video games":
          if (insideRoomTwo === true) {
          $('.update-text').text("You consider playing video games, but then think to yourself---perhaps just this once---there might be more important things to attend to.");
          }
        break;

        case "dagger":

          if ((unlockDoor === true) && (insideRoomTwo === false) && (approachDoorFromRoomOneFirstTime === false) && (monsterAlive === true) && (dagger === true)) {
            $('.update-text').text("Conquering your fears, you retrieve the glowing kris from your inventory. It instantly glows brighter in the presence of the creature—which visibly recoils as you draw the weapon. Praying to god that your video-game-playing days have taught you something, you run towards the creature with your kris extended before you and slam it into the creature’s chest. The creature instantly disintegrates before you—and with it, the darkness that was obscuring the next room. The way is open! Fly, you fool!");
            monsterAlive = false;
          }

        break;

        case "kris":

          if ((unlockDoor === true) && (insideRoomTwo === false) && (approachDoorFromRoomOneFirstTime === false) && (monsterAlive === true) && (dagger === true)) {
            $('.update-text').text("Conquering your fears, you retrieve the glowing kris from your inventory. It instantly glows brighter in the presence of the creature—which visibly recoils as you draw the weapon. Praying to god that your video-game-playing days have taught you something, you run towards the creature with your kris extended before you and slam it into the creature’s chest. The creature instantly disintegrates before you—and with it, the darkness that was obscuring the next room. The way is open! Fly, you fool!");
            monsterAlive = false;
          }

        break;

        case "chest":

          if ((inspectChest === false) && (insideRoomTwo === false)) {
            $('.update-text').text('You move closer to the oak chest and kneel down in front of it, inspecting it with your hands. The wood is rough, the craftsmanship hastily wrought. You can’t quite move the chest, but you can tell that there’s something inside. As you continue your investigation, you feel a slight catch give way and the lid flips open quickly, accompanied by a strong musty smell. JACKPOT! Inside you find 500 gil and a glowing, curved dagger (a “kris," if you will). You hastily add the contents to your inventory, stand back up, and dust your pants off.');
            inspectChest = true;
            dagger = true;
            break;
          }

          if ((inspectChest === true) && (insideRoomTwo === false)) {
            $('.update-text').text("You've already looted it; the treasure is yours! Don't spend all that gil at once!");
            break;
          }
          break;

          case "":
            $('.update-text').text("");
            break;

        default:
          $('.update-text').text("Select a single word to interact with, " + playerName + "!");
          break;
      }
    }
  });
};

$(".name-input").on("submit", function(event) {
  event.preventDefault();
  playerName = $(".name-space").val();
  console.log(playerName);
  $(".name-page").css("display", "none");
  $(".header").css("display", "none");
  $(".library").css("display", "block");
  enterGame();
  /*$(".content-text").text("Welcome to the game, " + playerName + ". Our adventure begins with you waking up. As you awaken, it dawns on you that you have no idea where you are or how you got there. Your eyes are crusted over and you have a burgeoning headache—giving you the impression that you’ve been sleeping for a very long time. The uncomfortable bed creaks as you sit up and look around. You see that you’re in a small, dimly-lit room. The walls, floor, and ceiling are made of stone. Directly across from the bed is a closed door made of a dark grey metal. Along the wall to the left of the bed stands a bookshelf facing the inside of the room. And along the wall to the right of the bed lies an old oak chest. What would you like to investigate?");*/
});


});
