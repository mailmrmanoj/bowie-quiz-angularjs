(function() {

  angular
      .module('bowieFacts')
      .controller('resultsCtrl', ResultsController);

      ResultsController.$inject = ['quizMetrics', 'DataService'];

      function ResultsController(quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.getAnswerClass = getAnswerClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.calculatePerc = calculatePerc;
        vm.reset = reset;
        vm.activeQuestion = 0;

        // handles the class assigned to an answer
        function getAnswerClass(index) {
          if(index === quizMetrics.correctAnswers[vm.activeQuestion]) {
            return "bg-success";
          } else if(index === DataService.quizQuestions[vm.activeQuestion].selected) {
            return "bg-danger";
          }
        }

        // sets result active question
        function setActiveQuestion(index) {
          vm.activeQuestion = index;
        }

        // calculates the quiz result percentage
        function calculatePerc() {
          return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        // resets the whole game at the end of results
        // and goes back to facts screen
        function reset() {
          quizMetrics.changeState("results", false);
          quizMetrics.numCorrect = 0;

          for(var i = 0; i < DataService.quizQuestions.length; i++) {
            var data = DataService.quizQuestions[i];

            data.selected = null;
            data.correct = null;
          }
        }
      }

})();
