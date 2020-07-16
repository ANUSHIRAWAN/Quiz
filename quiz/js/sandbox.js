const correctAnswers = ['B','B','B','B','C','D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const best = document.querySelector('.best');
const good = document.querySelector('.good');
const mid = document.querySelector('.mid');
const sad = document.querySelector('.sad');
const dead = document.querySelector('.dead');


form.addEventListener('submit', e =>{
    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value];


    userAnswers.forEach((answers,index)=>{
        if(answers === correctAnswers[index]){
            score += 17;


            let output = 0;
            const timer = setInterval(() => {
                result.querySelector('span').textContent = ` ${output}% `;
                if(output === score){
                    clearInterval(timer);
                    if(score === 100){
                        best.classList.remove('d-none');
                        mid.classList.add('d-none');
                        sad.classList.add('d-none');
                        good.classList.add('d-none');
                        dead.classList.add('d-none');
                    }else if(score === 75){
                        mid.classList.add('d-none');
                        sad.classList.add('d-none');
                        best.classList.add('d-none');
                        dead.classList.add('d-none');
                        good.classList.remove('d-none');
                    }else if(score === 50){
                        dead.classList.add('d-none');
                        sad.classList.add('d-none');
                        good.classList.add('d-none');
                        best.classList.add('d-none');
                        mid.classList.remove('d-none');
                    }else if(score === 25){
                        sad.classList.remove('d-none');
                        mid.classList.add('d-none');
                        best.classList.add('d-none');
                        good.classList.add('d-none');
                        dead.classList.add('d-none');
                    };
                }else{
                    output++;
                }
            }, 10);
        }
    });
    if(score === 0){
        dead.classList.remove('d-none');
        sad.classList.add('d-none');
        best.classList.add('d-none');
        good.classList.add('d-none');
        mid.classList.add('d-none');
    };
   
    scrollTo({top: 0,left: 0,behavior: 'smooth'});
    result.querySelector('span').textContent = ` ${score}% `;
    result.classList.remove('d-none');
    
});
