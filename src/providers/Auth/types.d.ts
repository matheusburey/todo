export interface IAuthContext {
	user: IUser;
	signIn: (data: IDataSignIn) => Promise<boolean>;
	signOut: (data: IDataSignIn) => Promise<void>;
}

export interface IUser {
	id: number;
	email: string;
	accessToken: string;
	name: string;
}
