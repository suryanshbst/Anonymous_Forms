import { z } from 'zod'

export const signInSchema = z.object({
  identifier: z.string(),     // identifier can be username or email .... #production name convention
  password: z.string(),
});
