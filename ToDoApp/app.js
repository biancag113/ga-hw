// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};

$(() => {

    let todo = [];

    let complete = [];

    const render = () => {
        console.log(todo);

        $('#todolist').empty();

        todo.forEach((item) => {
            $('#todolist').append('<li id="todoitem">' + item + '</li>')
            $('#todoitem').on('click', (event) => {
                $(event.currentTarget).css('text-decoration', 'line-through')
            })
        })
    }
    $('#submit').submit((event) => {
        console.log( $('#input-box').val() );

        todo.push( $('#input-box').val() );

        // event.preventDefault();
        // $(event.currentTarget).trigger('reset');
      });
      
})