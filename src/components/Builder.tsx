import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormCounts {
  input: number;
  textarea: number;
  checkbox: number;
}


interface FormConfig extends FormCounts {}

const Builder: React.FC = () => {
  
  const [counts, setCounts] = useState<FormCounts>({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });


  const [formConfig, setFormConfig] = useState<FormConfig | null>(null);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.max(0, parseInt(value, 10) || 0);

    setCounts((prevCounts) => ({
      ...prevCounts,
      [name]: numValue,
    }));
  };

  const handleBuildClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormConfig(counts);
  };
  
  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCounts({ input: 0, textarea: 0, checkbox: 0 });
    setFormConfig(null);
  }

  const renderForm = () => {
    if (!formConfig) {
      return null;
    }
    
    if (formConfig.input === 0 && formConfig.textarea === 0 && formConfig.checkbox === 0) {
        return <p>Пожалуйста, выберите хотя бы одно поле для формы.</p>;
    }

    return (
      <>
        <h3>Ваша форма:</h3>
        {Array.from({ length: formConfig.input }).map((_, i) => (
          <div className="form-field" key={`input-${i}`}>
            <label htmlFor={`input-field-${i}`}>Текстовое поле {i + 1}:</label>
            <input type="text" id={`input-field-${i}`} placeholder={`Введите текст для поля ${i + 1}`} />
          </div>
        ))}

        {Array.from({ length: formConfig.textarea }).map((_, i) => (
          <div className="form-field" key={`textarea-${i}`}>
            <label htmlFor={`textarea-field-${i}`}>Многострочное текстовое поле {i + 1}:</label>
            <textarea id={`textarea-field-${i}`} placeholder={`Введите текст для поля ${i + 1}`}></textarea>
          </div>
        ))}

        {Array.from({ length: formConfig.checkbox }).map((_, i) => (
          <div className="form-field" key={`checkbox-${i}`}>
            <label htmlFor={`checkbox-field-${i}`}>
              <input type="checkbox" id={`checkbox-field-${i}`} />
              <span> Флажок {i + 1}</span>
            </label>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="page-content">
      <h2>Конструктор</h2>
      <div className="form-group">
        <h3>Выберите количество полей:</h3>
        
        <div className="field-config">
          <label htmlFor="inputCount">Текстовые поля (input):</label>
          <input
            type="number"
            id="inputCount"
            name="input"
            min="0"
            value={counts.input}
            onChange={handleCountChange}
          />
        </div>
        
        <div className="field-config">
          <label htmlFor="textareaCount">Многострочные текстовые поля (textarea):</label>
          <input
            type="number"
            id="textareaCount"
            name="textarea"
            min="0"
            value={counts.textarea}
            onChange={handleCountChange}
          />
        </div>
        
        <div className="field-config">
          <label htmlFor="checkboxCount">Флажки (checkbox):</label>
          <input
            type="number"
            id="checkboxCount"
            name="checkbox"
            min="0"
            value={counts.checkbox}
            onChange={handleCountChange}
          />
        </div>
      </div>
      
      <button onClick={handleBuildClick} className="btn btn-success">
        Build
      </button>

      <div className="actions">
         <button onClick={handleResetClick} className="btn btn-reset">Сбросить форму</button>
         <Link to="/" className="btn">На главную</Link>
      </div>

      <div id="generatedForm" className="generated-form">
        {renderForm()}
      </div>
    </div>
  );
};

export default Builder;