import { createTRPCMsw } from "msw-trpc";
import { getUrl, transformer } from "./shared";
import type { AppRouter } from "~/server/api/root";

export const trpcMsw = createTRPCMsw<AppRouter>({
  baseUrl: getUrl(),
  transformer: { input: transformer, output: transformer },
});
