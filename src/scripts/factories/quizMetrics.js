(function() {

  angular
      .module('bowieFacts')
      .factory('quizMetrics', QuizMetrics);

      QuizMetrics.$inject = ['DataService'];

      function QuizMetrics(DataService) {
        var quizObj = {
          quizActive: true,
          resultsActive: false,
          changeState: changeState,
          correctAnswers: [],
          markQuiz: markQuiz,
          numCorrect: 0
        };

        return quizObj;

        // checks for metric and state and shows or hide
        // screens based on arguments passed
        function changeState(metric, state) {
          if(metric === "quiz") {
            quizObj.quizActive = state;
          } else if(metric === "results") {
              quizObj.resultsActive = state;
          } else {
              return false;
          }
        }

        // checks user answers and compare to correct answers
        function markQuiz() {
          quizObj.correctAnswers = DataService.correctAnswers;
          // loops through all 'selected' method in quizQuestions
          for(var i = 0; i < DataService.quizQuestions.length; i++) {
            // if 'selected' match correctAnswer[i]
            if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]) {
              // sets 'correct' to true
              DataService.quizQuestions[i].correct = true;
              // and increases numCorrect
              quizObj.numCorrect++;
            } else {
              // otherwise, sets 'correct' to false
              DataService.quizQuestions[i].correct = false;
            }
          }
        }
      }

})();
