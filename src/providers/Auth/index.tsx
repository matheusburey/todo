import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useMemo,
	useState,
} from "react";

import { sigInApi } from "../../api/user";
import type { IDataSignIn } from "../../api/user/types";
import type { IAuthContext, IUser } from "./types";

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<IUser>(
		JSON.parse(localStorage.getItem("@Doit:user") || "{}") as IUser,
	);

	const signIn = useCallback(async (data: IDataSignIn) => {
		const res = await sigInApi(data);
		if (res?.detail.status === "ok") {
			localStorage.setItem("@Doit:user", JSON.stringify(res.data));
			setUser(res.data as IUser);
			return true;
		}
		return false;
	}, []);

	const signOut = useCallback(async () => {
		localStorage.removeItem("@Doit:user");
		setUser({} as IUser);
	}, []);

	const value = useMemo(
		() => ({ user, signIn, signOut }),
		[user, signIn, signOut],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
