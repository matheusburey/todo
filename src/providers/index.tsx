import type { PropsWithChildren } from "react";

import { AuthProvider } from "./Auth";

export function Providers({ children }: PropsWithChildren) {
	return <AuthProvider>{children}</AuthProvider>;
}
