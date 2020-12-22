console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  const $middleEarth = $('<section>').attr('id', 'middle-earth')
  

  // 2. append the section to the body of the DOM.
  $('body').append($middleEarth);
  // 3. use a for loop to iterate over the lands array that does the following:
  lands.forEach(land => {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    //   3b. gives each land article an `id` tag of the corresponding land name
    const middleLands = $('<article>').attr('id', land);
    //   3c. includes an h1 with the name of the land inside each land article
    const $h1 = $('<h1>').text(land)
    middleLands.append($h1);

    //   3d. appends each land to the middle-earth section
    $middleEarth.append(middleLands);
  });
};

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  $listHobbits = $('<ul>')

  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
    hobbits.forEach(hobbit => {
      const $hobbitLi = $('<li>').attr('class', 'hobbit').text(hobbit)
      $listHobbits.append($hobbitLi);
    });

  // 3. also, give each hobbit (`li`) a class of "hobbit"
    //done above
  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
    $('#The-Shire').append($listHobbits);
};


// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const $theRing = $('<div>').attr('id', 'the-ring')

  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    checkArr = $('.hobbit').toArray()
    $(checkArr[0]).append($theRing);

    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  
  // 2. give each of the baddies a class of "baddy"
 
  baddies.forEach(baddie => {
    const $baddies = $('<ul>').attr('class', 'baddy').text(baddie)
    // 3. remember to append the ul to Mordor
    $('#Mordor').append($baddies);
  });
};

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

  $buddiesAside = $('<aside>')
  $buddiesAside.insertAfter('#Mordor');

  // 2. display an unordered list of buddies in the aside
  buddies.forEach(buddy => {
    // 3. give each of the buddies a class of "buddy"
    const $buddyUl = $('<ul>').attr('class', 'buddy').text(buddy)
    // 4. don't forget to append them to the aside
    $buddiesAside.append($buddyUl);
  });


};

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
    const $moveHobbits = $('ul').children()
    $('#Rivendell').append($moveHobbits);

  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)

};


// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
  const list = $('aside').find('.buddy')
  const allListElements = list
  allListElements.eq([3]).text('Aragorn');
};

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  $theFellowship = $('<div>').attr('id', 'the-fellowship');

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $h1 = $('<h1>')
  $h1.text('The Fellowship')
  $h1.appendTo($theFellowship);
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($theFellowship);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $moveHobbits = $('#Rivendell').find('.hobbit')
  $moveHobbits.appendTo('#the-fellowship');

};

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const list = $('aside').find('.buddy')
  const allListElements = list
  // 2. add a class "the-white" to this element
  allListElements.eq([0]).text('Gandalf the White').attr('class', 'the-white');

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!")
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $list = $('aside').find('.buddy')
  // console.log($list)
  $boromir = $list.eq([3])
  $boromir.css('text-decoration', 'line-through')
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $uruk = $('.baddy').eq(2)
  $uruk.remove()
};

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const hobbitList = $('#the-fellowship').find('.hobbit')
  const $frodo = hobbitList.eq([0])
  // console.log($frodo)
  $('#Mordor').append($frodo);
  const $sam = hobbitList.eq([1])
  $('#Mordor').append($sam);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mountDoom = $('<div>').attr('id', 'mount-doom')
  $('#Mordor').append($mountDoom);
};

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = $('<div>').attr('id', 'gollum')
  $('#Mordor').append($gollum);
  // 2. Move the ring from Frodo and give it to Gollum
  $('#gollum').append($('#the-ring'));
  
  // 3. Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'));

};

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $('#gollum').remove();
  // 2. remove all the baddies from the DOM
  $('.baddy').remove();
  // 3. Move all the hobbits back to the shire
  const hobbitListOne = $('#the-fellowship').find('.hobbit')
  $('#The-Shire').append(hobbitListOne);
  const hobbitListTwo = $('#Mordor').find('.hobbit')
  $('#The-Shire').append(hobbitListTwo);
};


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});