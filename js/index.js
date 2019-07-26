$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'What is the main protagonist\'s name in the series?',
      'options': [
        'Riku',
        'Sora',
        'Axel'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'Which Keyblade below is not part of Kingdom Hearts 2?',
      'options': [
        'Kingdom Key',
        'Fenrir',
        'Fairy Harp',
        'Sweet Memories'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Fairy Harp is in Kingdom Hearts 1.',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'Who are the first Final Fantasy characters you meet in Kingdom Hearts 1?',
      'options': [
        'Leon, Aeris, and Yuffi',
        'Tidus, Wakka, and Selphie',
        'Cloud and Tifa',
        'Cid'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct! You meet Tidus, Wakka, and Selphie on Destiny Islands at the beginning of the game.',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'Who does Terra choose as his successor?',
      'options': [
        'Sora',
        'Riku',
        'Kairi'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'What are the names of Roxas\'s signature Keyblades?',
      'options': [
        'Starseeker and Kingdom Key',
        'Fatal Crest and Follow the Wind',
        'Oblivion and Oathkeeper'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'What is Demyx\'s elemental power?',
      'options': [
        'Ice',
        'Air',
        'Water'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Dance Water Dance!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'What is the name of the fruit on Destiny Islands that interwines peoples destinies together?',
      'options': [
        'Star Fruit',
        'Paopu Fruit',
        'Dragon Fruit'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'In Kingdom Hearts 2, what was the only message in Jiminy\'s Journal?',
      'options': [
        'Thank Namine',
        'Find Mickey',
        'Thank Kairi'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'In Kingdom Hearts Birth by Sleep, what was Terra and Aqua preparing for?',
      'options': [
        'A Wedding',
        'Adopting Ventus',
        'Mark of Mastery',
        'Saving the World'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    },
    {
      'q': 'Has Sora Passed his Mark of Mastery?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct!',
      'incorrectResponse': 'Incorrect!'
    }
  ]
});