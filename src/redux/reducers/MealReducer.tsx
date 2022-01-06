import { MealReduxAction, MEAL_ACTIONS_TYPES } from "../actions/MealAction";

export interface MealRedux {
	name: string;
}

export interface MealStateRedux {
	userMeals: MealRedux[];
}

const mealStateRedux: MealStateRedux = {
	userMeals: [],
};

export default (state = mealStateRedux, action: MealReduxAction) => {
	switch (action.type) {
		case MEAL_ACTIONS_TYPES.ADD:
			return {
				...state,
				userMeals: [...state.userMeals, action.payload]
			}
		default:
			return state;
	}
};