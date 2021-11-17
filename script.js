document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list'),
        inputTodo = document.getElementById('input-todo'),
        btnReset = document.getElementById('button-reset'),
        btnAdd = document.getElementById('button-add');

    let itemID = 0;

    const createError = function () {
        const obj = document.createElement('div');

        obj.classList.add('error_message');

        obj.textContent = 'The value is empty!';

        itemList.append(obj);

        setTimeout(function() {
            obj.remove();
        }, 2500);
    };

    const addItemFunc = function (text, id) {
        const obj = document.createElement('li');

        obj.innerHTML = `
            <span class="span_check"></span>

            <div class="item_text">${text}</div>

            <button class="button red">
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                </svg>
            </button>
        `;

        obj.classList.add('item');
        obj.id = `item-${id}`;

        itemList.append(obj);

        inputTodo.value = '';
    };

    btnAdd.addEventListener('click', function () {
        if (inputTodo.value !== '') {
            itemID = itemList.childElementCount;

            addItemFunc(inputTodo.value, itemID);
        } else {
            createError();
        };
    })

    btnReset.addEventListener('click', function() {
        inputTodo.value = '';
    });

    itemList.addEventListener('click', function(e) {
        const target = e.target;

        if (target.classList.value === 'span_check' && target.classList.value !== 'checked') {
            target.classList.add('checked');
        } else {
            target.classList.remove('checked');
        }
    });
});