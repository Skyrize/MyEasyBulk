import { combineReducers } from 'redux';
import MealReducer from './MealReducer';

export default combineReducers({
	mealReducer: MealReducer,
});
