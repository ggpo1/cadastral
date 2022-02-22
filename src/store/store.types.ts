import { factory } from "./factory";

declare global {
  type IStoreContext = ReturnType<typeof factory> | null;
}
