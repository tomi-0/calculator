let calculation = localStorage.getItem('calculation') || '';

            dispayOutput();

            function updateCalculation(data) {
                calculation += data;
                dispayOutput();
                localStorage.setItem('calculation',calculation)
            }

            function dispayOutput(){
                document.querySelector('.js-output')
                .innerHTML = calculation;
            }