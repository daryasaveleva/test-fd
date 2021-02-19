$(function() {
    startTest();
    popupAlert();
    nextQuestion();

    function startTest() {
        $(document).on('click','.btn__start', function(){
            $('.pagetwo').removeClass('hidden');
            $('.pageone').addClass('hidden');
        });
    }

    function nextQuestion() {
        $(document).on('click', '.btn__next', function() {
            var quesNext = $(this).data('q');
            $('.pagetwo').find('q'+quesNext).removeClass('hidden');
        });
    }

    function popupAlert() {
        $(document).on('click', '.btn__next', function() {

        });
    }
});