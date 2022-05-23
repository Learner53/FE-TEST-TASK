window.addEventListener('load', (event) => {
    var modalCta = document.querySelector('.product-color');
    modalCta.insertAdjacentHTML('beforeend', '<button id="modal-cta">Open Modal</button>');
    var modalContainer = document.querySelector('.product-configuration');
    modalContainer.insertAdjacentHTML('beforeend',
    `<div id="modal-container" class="modal-closed">
        <div id="modal-body">
            <div class="modal-content">
            <div class="loader-wrapper hide-loader">
                <div class="loader"></div>
            </div>
            <p class="modal-close-btn">&times;</p>
            <div class="modal-tabs">
                <button class="modal-tab-1 active-tab">TAB-1</button>
                <button class="modal-tab-2">TAB-2</button>
            </div>
            <div class="modal-tab-content"></div>
            </div>
        </div>
    </div>`);
    document.querySelector('#modal-cta').addEventListener('click', function () {
        var activeAttribute, getattributeClass, modalContainer = document.querySelector('.modal-tab-content');
        var activeImage = document.querySelector('img.active').getAttribute('src');
        modalContainer.innerHTML = `
        <button class="surprise-me-cta">Surprise Me</button>
        <img  class="modal-product-image" src="${activeImage}" alt="">`;
        document.querySelector('#modal-container').classList.remove('modal-closed');
        document.querySelector('.surprise-me-cta').addEventListener('click', 
        function () {
            document.querySelector('.loader-wrapper').classList.remove('hide-loader');
            setTimeout(function () {
                document.querySelector('.modal-tab-1').classList.toggle('active-tab');
                document.querySelector('.modal-tab-2').classList.toggle('active-tab');
                var randomNumber = Math.floor(Math.random() * 3);
                console.log(randomNumber);
                modalContainer.innerHTML = '';
                modalContainer.insertAdjacentHTML('beforeend', `
                <div class="product-color-attributes"> 
                <div class="product-each-colors">
                    <span class="red"></span>
                    <span class="blue"></span>
                    <span class="black"></span>
                </div> 
                <button class="select-me-cta">Select Me</button>
                </div>`);

                activeAttribute = document.querySelectorAll('.product-each-colors span')[randomNumber]
                getattributeClass = activeAttribute.getAttribute('class');

                activeAttribute.classList.add('selected-attribute');
                document.querySelector('.loader-wrapper').classList.add('hide-loader');
                document.querySelector('.select-me-cta').addEventListener('click', function () {
                    document.querySelector('#' + getattributeClass).click();
                    document.querySelector('#modal-container').classList.add('modal-closed');

                });
            }, 500)
        });
    });
    document.querySelector('.modal-close-btn').addEventListener('click', function () {
        document.querySelector('#modal-container').classList.add('modal-closed');
    });
});
