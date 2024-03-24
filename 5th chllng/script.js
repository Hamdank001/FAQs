const ques = document.querySelectorAll('.qu');

ques.forEach(qu => {
    const plus = qu.querySelector('.plus');
    const ans = qu.querySelector('.ans');

    qu.addEventListener('click', () => {

        if(ans.classList.contains('active')){
            plus.classList.remove('active');
            plus.src = "icon-plus-1.svg";
            ans.classList.remove('active');
            ans.style.maxHeight = null;
        } else {
            plus.classList.add('active');
            plus.src = "icon-minus-1.svg";
            ans.classList.add('active');
            ans.style.maxHeight = ans.scrollHeight + 'px';
        }

    })
})