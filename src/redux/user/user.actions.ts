import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
	email: string | null;
	notifications: number;
	messages: number;
}

// Define the initial state using that type
const initialState: UserState = {
	email: null,
	notifications: 0,
	messages: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		notificationsInc: (state) => {
			state.notifications += 1;
		},
		notificationsDec: (state) => {
			state.notifications -= 1;
		},
		notificationsSetAmount: (state, action: PayloadAction<number>) => {
			state.notifications = action.payload;
		},

		messagesInc: (state) => {
			state.messages += 1;
		},
		messagesDec: (state) => {
			state.messages -= 1;
		},
		messagesSetAmount: (state, action: PayloadAction<number>) => {
			state.messages = action.payload;
		},
		emailSetValue: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
	},
});

export const {
	notificationsInc,
	notificationsDec,
	notificationsSetAmount,
	messagesInc,
	messagesDec,
	messagesSetAmount,
	emailSetValue,
} = userSlice.actions;

export default userSlice.reducer;
