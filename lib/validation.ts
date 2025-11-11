import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  business: z.string().min(2, 'Business name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  monthlyLeads: z.string().min(1, 'Please select a target'),
});

export type SignupFormData = z.infer<typeof signupSchema>;
