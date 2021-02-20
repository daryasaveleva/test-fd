$(function() {
    startTest();
    showNextbtn();
    nextQuestion();

    function startTest() {
        $(document).on('click','.btn__start', function(){
            $('.pagetwo').removeClass('hidden');
            $('.pageone').addClass('hidden');
        });
    }

    function showNextbtn() {
        $(document).on('click','input', function(){
            $('.pagetwo__button').removeClass('disabled');
        });
    }

    function nextQuestion() {
        $(document).on('click', '.btn__next', function() {
            var quesNext = $(this).data('q');
            $('.pagetwo').find('q'+quesNext).removeClass('hidden');
        });
    }
});