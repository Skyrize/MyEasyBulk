import { MealRedux } from "../reducers/MealReducer";

export const MEAL_ACTIONS_TYPES = {
	ADD: 'ADD',
	DELETE: 'DELETE',
	UPDATE: 'UPDATE',
}

export type MealAction = (payloard: MealRedux) => MealReduxAction;

export interface MealReduxAction {
	type: string;
	payload: MealRedux;
}

export const addMeal: MealAction = (payload: MealRedux) => ({
	type: MEAL_ACTIONS_TYPES.ADD,
	payload,
});
