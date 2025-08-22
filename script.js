
   document.addEventListener('DOMContentLoaded', function() {
    const homePage = document.getElementById('homePage');
    const formBuilderPage = document.getElementById('formBuilderPage');
    
    const formButton = document.getElementById('formButton');
    const backButton = document.getElementById('backButton');
    
    const inputCount = document.getElementById('inputCount');
    const textareaCount = document.getElementById('textareaCount');
    const checkboxCount = document.getElementById('checkboxCount');
    const buildButton = document.getElementById('buildButton');
    const resetButton = document.getElementById('resetButton');
    const generatedForm = document.getElementById('generatedForm');
    
    formButton.addEventListener('click', function() {
        homePage.classList.remove('active');
        formBuilderPage.classList.add('active');
    });
    
    backButton.addEventListener('click', function() {
        formBuilderPage.classList.remove('active');
        homePage.classList.add('active');
    });
    
    buildButton.addEventListener('click', function() {
        const config = {
            input: parseInt(inputCount.value) || 0,
            textarea: parseInt(textareaCount.value) || 0,
            checkbox: parseInt(checkboxCount.value) || 0
        };
        
        generatedForm.innerHTML = '';
        
       
        if (config.input < 0 || config.textarea < 0 || config.checkbox < 0) {
                generatedForm.innerHTML = '<p>Пожалуйста, введите числа больше нуля.</p>';
                return;
        }
        if (config.input === 0 && config.textarea === 0 && config.checkbox === 0) {
            generatedForm.innerHTML = '<p>Пожалуйста, выберите хотя бы одно поле для формы.</p>';
            return;
        }

        const formTitle = document.createElement('h3');
        formTitle.textContent = 'Ваша форма:';
        generatedForm.appendChild(formTitle);
        
        for (let i = 1; i <= config.input; i++) {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'form-field';
            
            const label = document.createElement('label');
            label.textContent = `Текстовое поле ${i}:`;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Введите текст для поля ${i}`;
            
            fieldDiv.appendChild(label);
            fieldDiv.appendChild(input);
            generatedForm.appendChild(fieldDiv);
        }
        
        for (let i = 1; i <= config.textarea; i++) {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'form-field';
            
            const label = document.createElement('label');
            label.textContent = `Многострочное текстовое поле ${i}:`;
            
            const textarea = document.createElement('textarea');
            textarea.placeholder = `Введите текст для поля ${i}`;
            
            fieldDiv.appendChild(label);
            fieldDiv.appendChild(textarea);
            generatedForm.appendChild(fieldDiv);
        }
        
        for (let i = 1; i <= config.checkbox; i++) {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'form-field';
            
            const label = document.createElement('label');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox-${i}`;
            
            const span = document.createElement('span');
            span.textContent = ` Флажок ${i}`;
            
            label.appendChild(checkbox);
            label.appendChild(span);
            fieldDiv.appendChild(label);
            generatedForm.appendChild(fieldDiv);
        }
    });
    
    resetButton.addEventListener('click', function() {
        inputCount.value = '';
        textareaCount.value = '';
        checkboxCount.value = '';
        generatedForm.innerHTML = '';
    });
});
