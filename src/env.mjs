import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod" 

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    ANILIST_ID: z.string(),
    ANILIST_SECRET: z.string(),
    NEXT_AUTH_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    ANILIST_ID: process.env.ANILIST_ID,
    ANILIST_SECRET: process.env.ANILIST_SECRET,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
});