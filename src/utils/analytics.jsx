// src/utils/analytics.js
import ReactGA from 'react-ga';

export const trackButtonClick = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};