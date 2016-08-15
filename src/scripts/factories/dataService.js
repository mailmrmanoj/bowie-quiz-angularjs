(function() {

  angular
      .module('bowieFacts')
      .factory('DataService', DataFactory);

      function DataFactory() {
        var dataObj = {
          quizQuestions: quizQuestions,
          correctAnswers: correctAnswers
        };

        return dataObj;
      }

      var correctAnswers = [2, 0, 2, 0, 3, 2, 1, 3, 1, 0]

      var quizQuestions = [
        {
          type: "text",
          text: "On the 8th January 1947, in Brixton, the man who would become a worldwide phenomenon as David Bowie was born. But what was his birth name?",
          possibilities: [
            {
              answer: "David Edward Smith"
            },
            {
              answer: "David John Burns"
            },
            {
              answer: "David Robert Jones"
            },
            {
              answer: "David Paul Buckley"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "How many of Bowie’s song titles contain the word “star”?",
          possibilities: [
            {
              answer: "9"
            },
            {
              answer: "12"
            },
            {
              answer: "4"
            },
            {
              answer: "5"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which of these scenes is taken from the 1983 movie 'The Hunger'?",
          possibilities: [
            {
              answer: "http://img.wennermedia.com/620-width/labyrinth-zoom-73477620-25a9-4342-957a-c962dac6db3b.jpg"
            },
            {
              answer: "http://www.telegraph.co.uk/content/dam/film/prestige-xlarge.jpg"
            },
            {
              answer: "https://s-media-cache-ak0.pinimg.com/originals/c3/31/02/c33102c3e5c90b4bd6041d93a40e3931.jpg"
            },
            {
              answer: "https://www.acmi.net.au/media/2218193/bowie-on-film-essay-mr-lawrence-hero.jpg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "David Bowie formed his first band at the age of 15, but what was the name of his band?",
          possibilities: [
            {
              answer: "The Konrads"
            },
            {
              answer: "Riot Squad"
            },
            {
              answer: "The Iguanas"
            },
            {
              answer: "The King Bees"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What was special about the release of Bowie’s 1997 single Telling Lies?",
          possibilities: [
            {
              answer: "It came with a free DIY stenography kit"
            },
            {
              answer: "It was released under three different pseudonyms: James Machete, Craig Dagger and John Stanley"
            },
            {
              answer: "None of the musicians credited on the single were real people"
            },
            {
              answer: "It was released online, making it one of the first downloadable singles"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "6.	Which of these is not the title of a David Bowie album?",
          possibilities: [
            {
              answer: "Black Tie White Noise"
            },
            {
              answer: "Young Americans"
            },
            {
              answer: "Diamond Girls"
            },
            {
              answer: "Low"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "What was the name of the David Bowie tour that began on 14th September 1995 and ended 20th February 1996?",
          possibilities: [
            {
              answer: "Earthling Tour"
            },
            {
              answer: "Outside Tour"
            },
            {
              answer: "Glass Spider Tour"
            },
            {
              answer: "Serious Moonlight Tour"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "image",
          text: "Which of these shows David Bowie during the Heathen tour in 2002?",
          possibilities: [
            {
              answer: "https://c.o0bg.com/rf/image_1920w/Boston/2011-2020/2016/01/11/BostonGlobe.com/Arts/Images/033004_bowie_02-1144555.jpg"
            },
            {
              answer: "http://features.japantimes.co.jp/david-bowie-in-japan/img/bowieopen_large5.jpg"
            },
            {
              answer: "http://snappa.static.pressassociation.io/assets/2016/01/11122823/1452515301-7dcf499528b23983839b1dc1fc835711-600x424.jpg"
            },
            {
              answer: "http://www.fuse.tv/image/5697d029f0a2814903000023/816/545/david-bowie-at-jones-beach-theater-on-long-island-ny.jpg"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "In the ‘Space Oddity’ video, how many times is “GC” printed on Bowie’s T-shirt?",
          possibilities: [
            {
              answer: "2"
            },
            {
              answer: "3"
            },
            {
              answer: "4"
            },
            {
              answer: "5"
            }
          ],
          selected: null,
          correct: null
        },
        {
          type: "text",
          text: "In ‘Moonage Daydream’, what does Bowie describe love as?",
          possibilities: [
            {
              answer: "Such a holy place to be"
            },
            {
              answer: "Such a groovy place to be"
            },
            {
              answer: "Such a happy place to be"
            },
            {
              answer: "Such a blissful place to be"
            }
          ],
          selected: null,
          correct: null
        }
      ];

})();
