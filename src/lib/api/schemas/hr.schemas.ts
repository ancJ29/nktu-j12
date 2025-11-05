import * as z from 'zod/v4';

import {
  backendPhoneNumberSchema,
  emailSchema,
  idSchema,
  optionalNumberSchema,
  optionalStringSchema,
  phoneNumberSchema,
  // phoneNumberSchema,
  stringSchema,
  timestampSchema,
} from './common.schemas';

const employeeTypeSchema = z.enum(['FULL_TIME', 'PART_TIME']).optional();

const EmployeeMetadataSchema = z.object({
  contact: z.looseObject({
    personalPhoneNumber: backendPhoneNumberSchema.optional(),
    companyPhoneNumber: backendPhoneNumberSchema.optional(),
  }),
  displayOrder: optionalNumberSchema,
  hourRate: optionalNumberSchema,
  monthlySalary: optionalNumberSchema,
  positionName: optionalStringSchema,
});

// Employee schema
export const EmployeeSchema = z.object({
  id: stringSchema,
  userId: idSchema,
  loginIdentifier: optionalStringSchema,
  firstName: stringSchema,
  lastName: stringSchema,
  employeeCode: stringSchema,
  employmentType: employeeTypeSchema.transform((val) => val ?? 'FULL_TIME'),
  departmentId: idSchema.optional(),
  isActive: z.boolean(),
  metadata: z
    .looseObject({
      contact: z
        .object({
          personalPhoneNumber: phoneNumberSchema.optional(),
          companyPhoneNumber: phoneNumberSchema.optional(),
        })
        .optional(),
      displayOrder: optionalNumberSchema,
      hourRate: optionalNumberSchema,
      monthlySalary: optionalNumberSchema,
      positionName: optionalStringSchema,
    })
    .optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Request schemas
export const CreateEmployeeSchema = z.object({
  firstName: stringSchema,
  lastName: stringSchema,
  departmentId: optionalStringSchema,
  email: emailSchema.optional(),
  employmentType: employeeTypeSchema.transform((val) => val ?? 'FULL_TIME'),
  metadata: EmployeeMetadataSchema.optional(),
});

export const CreateEmployeesRequestSchema = CreateEmployeeSchema;
export const CreateBulkEmployeesRequestSchema = z.object({
  employees: CreateEmployeeSchema.array(),
});

export const UpdateEmployeeRequestSchema = z.object({
  firstName: stringSchema,
  lastName: stringSchema,
  departmentId: optionalStringSchema,
  employmentType: employeeTypeSchema,
  email: emailSchema.optional(),
  metadata: EmployeeMetadataSchema.optional(),
});

// Response schemas
export const GetEmployeesResponseSchema = z.object({
  employees: z.array(EmployeeSchema),
});

export const CreateEmployeesResponseSchema = EmployeeSchema;

export const UpdateEmployeeResponseSchema = EmployeeSchema;

// Type exports
export type CreateEmployeesRequest = z.infer<typeof CreateEmployeesRequestSchema>;
export type CreateBulkEmployeesRequest = z.infer<typeof CreateBulkEmployeesRequestSchema>;
export type UpdateEmployeeRequest = z.infer<typeof UpdateEmployeeRequestSchema>;
export type GetEmployeesResponse = z.infer<typeof GetEmployeesResponseSchema>;
export type CreateEmployeesResponse = z.infer<typeof CreateEmployeesResponseSchema>;
export type UpdateEmployeeResponse = z.infer<typeof UpdateEmployeeResponseSchema>;
