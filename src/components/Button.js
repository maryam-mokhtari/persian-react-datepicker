import React from 'react';
import loadingIcon from '../assets/images/loading.svg';
import '../assets/css/button.css';
import locale from '../locale.js'

const Button = ({
  text = locale.SUBMIT, icon, loading, onClick, errorMessage, color = "cyan"
}) =>
    <div className="button-wrapper">
      {errorMessage &&
        <div className="error-message">
          {errorMessage}
        </div>
      }

      <button
        className={`
          button 
          ${loading ? 'button--loading' :''}
          ${color ? `button--${color}` :''}
        `}
        disabled={loading}
        onClick={!loading? onClick : undefined}
      >
        {text}
        {loading &&
          <img
            className="icon"
            alt={text} 
            src={loadingIcon}
          />
        }
        {icon && !loading &&
          <img
            className="icon"
            alt={text} 
            src={icon}
          />
        }
      </button>
    </div>

export default Button