import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="home-page">
        <h1>Создавайте пользовательские формы с нужными Вам полями</h1>
        <Link to="/form" className="btn btn-form">
          FORM
        </Link>
      </div>
    </div>
  );
};

export default HomePage;