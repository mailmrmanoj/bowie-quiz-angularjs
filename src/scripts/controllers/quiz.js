(function() {

  angular
      .module('bowieFacts')
      .controller('quizCtrl', QuizController);

      QuizController.$inject = ['quizMetrics', 'DataService'];

      function QuizController(quizMetrics, DataService) {
        var vm = this;
        var numQuestionsAnswered = 0;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.finaliseAnswers = finaliseAnswers;
        vm.activeQuestion = 0;
        vm.error = false;
        vm.finalise = false;

        function setActiveQuestion(index) {
          if(index === undefined) {
            var breakOut = false;
            var quizLength = DataService.quizQuestions.length - 1;

            // while breakOut is false
            while(!breakOut) {
              // if activeQuestion < quiz length
              // increments activeQuestion
              // if it's not, resets to 0 (back to first question)
              vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
              if(vm.activeQuestion === 0) {
                vm.error = true;
              }
              // if current question selected method is equal to null
              // then that means the answer hasn't be replied
              if(DataService.quizQuestions[vm.activeQuestion].selected === null) {
                breakOut = true;
              }
            }
          // if index is passed then active question
          // becomes the one that has been clicked on
          } else {
              vm.activeQuestion = index;
          }
        }

        // if current question has been answered
        // and user clicks continue
        function questionAnswered() {
          var quizLength = DataService.quizQuestions.length;
          // function increments numQuestionsAnswered count
          if(DataService.quizQuestions[vm.activeQuestion].selected !== null) {
            numQuestionsAnswered++;
            if(numQuestionsAnswered >= quizLength) {
              // checks that all questions have been answered
              for(var i = 0; i < DataService.quizQuestions.length; i++) {
                // if one question hasn't been answered
                if(DataService.quizQuestions[i].selected === null) {
                  // goes back to unanswered question
                  setActiveQuestion(i);
                  return;
                }
              }
              vm.error = false;
              vm.finalise = true;
              return;
            }
          }
          vm.setActiveQuestion();
        }

        // gets triggered when clicking an answer
        // passes the question index
        function selectAnswer(index) {
          // sets selected to current index and add class if equal
          DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        // when quiz is complete
        function finaliseAnswers() {
          // resets everything
          vm.finalise = false;
          numQuestionsAnswered = 0;
          // vm.activeQuestion = 0;
          quizMetrics.markQuiz();
          // hides the quiz
          quizMetrics.changeState("quiz", false);
          // shows the results
          quizMetrics.changeState("results", true);
        }

      }

})();
