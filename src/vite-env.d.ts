/// <reference types="vite/client" />

import { ReactNode } from "react";

declare module "*.svg" {
  const content: ReactNode;
  export default content;
}
