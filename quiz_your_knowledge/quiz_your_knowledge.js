fetch("quiz_questions.json")
    .then(response => response.json())
    .then(data => {

        const quizQuestions = [];

        for (let i = 1; i <= 10; i++) {
            var randomIndex = Math.floor((Math.random() * data.length)); // An index number is selected randomly.
            var randomObj = data.splice(randomIndex, 1).shift(); // An obj in the fetched data array is picked at random.
            // console.log(data);
            quizQuestions.push(randomObj);
        }

        // console.log(quizQuestions);

        const quiz = document.getElementById("quiz");

        quizQuestions.map((obj, index) => {
            let question = document.createElement('div');
            question.className = "question";
            quiz.appendChild(question);

            let questionLabel = document.createElement('label');
            question.appendChild(questionLabel);
            questionLabel.className = "question-label";
            questionLabel.htmlFor = `question${index + 1}`;
            questionLabel.innerHTML = `Q${index + 1}) ${obj.question}`;

            let radios = document.createElement('div');
            radios.className = "radios";
            question.appendChild(radios);

            for (let choice of obj.multiChoices) {
                let labelAnswer = document.createElement('label');
                labelAnswer.className = "radio";
                labelAnswer.htmlFor = choice;
                radios.appendChild(labelAnswer);

                let radio = document.createElement('input');
                radio.type = "radio";
                radio.name = `question${index + 1}`;
                radio.value = choice;
                labelAnswer.appendChild(radio);

                let answer = document.createTextNode(` ${choice}`);
                labelAnswer.appendChild(answer);
            }
        });

        const questions = document.getElementsByClassName("question");
        const header = document.getElementById("header");
        const buttons = document.getElementById("BTNs");
        const startButton = document.getElementById("startButton");
        const submitButton = document.getElementById("submitButton");
        const submitFinishButton = document.getElementById("submit&finishButton");
        const reviewButton = document.getElementById("reviewButton");
        const backToResultsButton = document.getElementById("backToResultsButton");
        const restartButton = document.getElementById("restartButton");
        const timerContainer = document.getElementById("timerContainer");
        const timerBar = document.getElementById("timerBar");
        const quizProgress = document.getElementById("quizProgress");
        const quizProgressBar = document.getElementById("quizProgressBar");
        const quizResults = document.getElementById("quizResults");
        const quizScore = document.getElementById("quiz-score");
        const correctAnswers = document.getElementById("correct-answers");
        const numQuestions = document.getElementById("num-questions");            
        const resultNote = document.createElement('p');
        resultNote.className = "result-note";
        quizResults.appendChild(resultNote);

        let index = 0, numCorrectAnswers = 0, quizBarWidth = 10, timerBarWidth = 100, countdown;
        
        startButton.onclick = function() {
            header.style.display = "none";
            startButton.style.display = "none";
            submitButton.style.display = "block";
            questions[index].style.display = "block";
            timerContainer.style.display = "block";
            quizProgress.style.display = "block";
            quizProgressBar.style.width = quizBarWidth + "%";

            countdown = setInterval(countDown, 6000);

            function countDown() {
                timerBarWidth -= 10;
                timerBar.style.width = timerBarWidth + "%";
                // console.log("CountdownZero!");
                if (timerBarWidth === 0) {
                    moveOn();
                }
            }     

            function moveOn() {
                questions[index].style.display = "none";    

                if (index === quizQuestions.length - 1) {
                    clearInterval(countdown);
                    submitFinishButton.style.display = "none";
                    quizProgress.style.display = "none";
                    timerContainer.style.display = "none";
                    
                    quizResults.style.display = "flex";
                    
                    for (let i = 0; i < quizQuestions.length; i++) {
                        
                        let answerInput = document.getElementsByName(`question${i + 1}`);
                        
                        for (let j = 0; j < answerInput.length; j++) {
                            // console.log(`question${i + 1}`);
                            if (answerInput[j].value === quizQuestions[i].correctAnswer) {                            
                                let correctionNote = document.createElement('p');
                                correctionNote.className = "correction-note";
                                questions[i].appendChild(correctionNote);
                                if (answerInput[j].checked) {
                                    numCorrectAnswers++;
                                    correctionNote.innerHTML = `You got that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                                    break;
                                }
                                else {
                                    correctionNote.innerHTML = `You did not get that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                                    break;
                                }
                            }
                        }
                    }
            
                    correctAnswers.value = numCorrectAnswers;
                    numQuestions.value = quizQuestions.length;
                    quizScore.value = `${numCorrectAnswers / quizQuestions.length * 100}% (${numCorrectAnswers}/${quizQuestions.length})`;
            
                    if (numCorrectAnswers === 10) {
                        resultNote.innerHTML = "You got a perfect score, congrats!";
                    }
                    else if (numCorrectAnswers >= 8 && numCorrectAnswers < 10) {
                        resultNote.innerHTML = "You did very well on the quiz, good job!";
                    }
                    else if (numCorrectAnswers === 7) {
                        resultNote.innerHTML = "You did fine on the quiz.";
                    }
                    else if (numCorrectAnswers === 6) {
                        resultNote.innerHTML = "You barely passed.";
                    }
                    else {
                        resultNote.innerHTML = "You didn't pass the quiz, better luck next time.";
                    }
                    
                    buttons.style.width = "200px";
                    buttons.style.justifyContent = "space-between";
                    reviewButton.style.display = "block";
                    restartButton.style.display = "block";
                    return;
                }

                index++;
                questions[index].style.display = "block";

                if (index === quizQuestions.length - 1) {
                    submitButton.style.display = "none";
                    submitFinishButton.style.display = "block";
                }
                
                timerBarWidth = 100;
                timerBar.style.width = timerBarWidth + "%";

                quizBarWidth += 10;
                quizProgressBar.style.width = quizBarWidth + "%";
            }
        }

        submitButton.onclick = function() {
            questions[index].style.display = "none";
            index++;
            questions[index].style.display = "block";

            if (index === quizQuestions.length - 1) {
                submitButton.style.display = "none";
                submitFinishButton.style.display = "block";
            }

            quizBarWidth += 10;
            quizProgressBar.style.width = quizBarWidth + "%";

            clearInterval(countdown);

            countdown = setInterval(countDown, 6000);
            timerBarWidth = 100;
            timerBar.style.width = timerBarWidth + "%";

            function countDown() {
                timerBarWidth -= 10;
                timerBar.style.width = timerBarWidth + "%";
                // console.log("CountdownOne!");
                if (timerBarWidth === 0) {
                    moveOn();
                }
            }     

            function moveOn() {
                questions[index].style.display = "none";    

                if (index === quizQuestions.length - 1) {
                    clearInterval(countdown);
                    submitFinishButton.style.display = "none";
                    quizProgress.style.display = "none";
                    timerContainer.style.display = "none";
                    
                    quizResults.style.display = "flex";
                    
                    for (let i = 0; i < quizQuestions.length; i++) {
                        
                        let answerInput = document.getElementsByName(`question${i + 1}`);
                        
                        for (let j = 0; j < answerInput.length; j++) {
                            // console.log(`question${i + 1}`);
                            if (answerInput[j].value === quizQuestions[i].correctAnswer) {                            
                                let correctionNote = document.createElement('p');
                                correctionNote.className = "correction-note";
                                questions[i].appendChild(correctionNote);
                                if (answerInput[j].checked) {
                                    numCorrectAnswers++;
                                    correctionNote.innerHTML = `You got that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                                    break;
                                }
                                else {
                                    correctionNote.innerHTML = `You did not get that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                                    break;
                                }
                            }
                        }
                    }
            
                    correctAnswers.value = numCorrectAnswers;
                    numQuestions.value = quizQuestions.length;
                    quizScore.value = `${numCorrectAnswers / quizQuestions.length * 100}% (${numCorrectAnswers}/${quizQuestions.length})`;
            
                    if (numCorrectAnswers === 10) {
                        resultNote.innerHTML = "You got a perfect score, congrats!";
                    }
                    else if (numCorrectAnswers >= 8 && numCorrectAnswers < 10) {
                        resultNote.innerHTML = "You did very well on the quiz, good job!";
                    }
                    else if (numCorrectAnswers === 7) {
                        resultNote.innerHTML = "You did fine on the quiz.";
                    }
                    else if (numCorrectAnswers === 6) {
                        resultNote.innerHTML = "You barely passed.";
                    }
                    else {
                        resultNote.innerHTML = "You didn't pass the quiz, better luck next time.";
                    }
                    
                    buttons.style.width = "200px";
                    buttons.style.justifyContent = "space-between";
                    reviewButton.style.display = "block";
                    restartButton.style.display = "block";
                    return;
                }

                index++;
                questions[index].style.display = "block";

                if (index === quizQuestions.length - 1) {
                    submitButton.style.display = "none";
                    submitFinishButton.style.display = "block";
                }

                timerBarWidth = 100;
                timerBar.style.width = timerBarWidth + "%";

                quizBarWidth += 10;
                quizProgressBar.style.width = quizBarWidth + "%";
            }
        }

        submitFinishButton.onclick = function() {
            questions[index].style.display = "none";
            submitFinishButton.style.display = "none";
            quizProgress.style.display = "none";
            timerContainer.style.display = "none";

            clearInterval(countdown);

            quizResults.style.display = "flex";

            for (let i = 0; i < quizQuestions.length; i++) {

                let answerInput = document.getElementsByName(`question${i + 1}`);

                for (let j = 0; j < answerInput.length; j++) {
                    // console.log(`question${i + 1}`);
                    if (answerInput[j].value === quizQuestions[i].correctAnswer) {                            
                        let correctionNote = document.createElement('p');
                        correctionNote.className = "correction-note";
                        questions[i].appendChild(correctionNote);
                        if (answerInput[j].checked) {
                            numCorrectAnswers++;
                            correctionNote.innerHTML = `You got that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                            break;
                        }
                        else {
                            correctionNote.innerHTML = `You did not get that right, the correct answer is ${quizQuestions[i].correctAnswer}.`;
                            break;
                        }
                    }
                }
            }
            
            correctAnswers.value = numCorrectAnswers;
            numQuestions.value = quizQuestions.length;
            quizScore.value = `${numCorrectAnswers / quizQuestions.length * 100}% (${numCorrectAnswers}/${quizQuestions.length})`;
            
            if (numCorrectAnswers === 10) {
                resultNote.innerHTML = "You got a perfect score, congrats!";
            }
            else if (numCorrectAnswers >= 8 && numCorrectAnswers < 10) {
                resultNote.innerHTML = "You did very well on the quiz, good job!";
            }
            else if (numCorrectAnswers === 7) {
                resultNote.innerHTML = "You did fine on the quiz.";
            }
            else if (numCorrectAnswers === 6) {
                resultNote.innerHTML = "You barely passed.";
            }
            else {
                resultNote.innerHTML = "You didn't pass the quiz, better luck next time.";
            }

            buttons.style.width = "200px";
            buttons.style.justifyContent = "space-between";
            reviewButton.style.display = "block";
            restartButton.style.display = "block";
        }

        reviewButton.onclick = function() {
            backToResultsButton.style.display = "block";
            quizResults.style.display = "none";
            reviewButton.style.display = "none";
            document.body.style.height = "100%";
            for (let i = 0; i < questions.length; i++) {
                questions[i].style.display = "block";
            }
        }

        backToResultsButton.onclick = function() {
            quizResults.style.display = "flex";
            reviewButton.style.display = "block";
            backToResultsButton.style.display = "none";
            document.body.style.height = "100vh";
            for (let i = 0; i < questions.length; i++) {
                questions[i].style.display = "none";
            }
        }
    });