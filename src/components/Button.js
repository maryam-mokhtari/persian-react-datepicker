import React from 'react';

const Button = () => ({
  text, icon, loading, onClick, children, errorMessage,
}) =>
    <>
      {errorMessage &&
        <div className="error-message">
          {errorMessage}.
        </div>
      }

      <button
        className={`button ${loading ? 'loading' :''}`}
        onClick={!loading? onClick : undefined}
      >
        {icon &&
          <img
            className="icon"
            alt={text} 
            src={icon}
          />
        }
        {text}
        {loading &&
          <img
            className="loading"
            alt={text} 
            src={icon}
          />
        }
        {children}
      </button>
    </>

export default Button