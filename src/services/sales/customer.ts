import { salesApi } from '@/lib/api';
import {
  type BulkUpsertCustomersRequest,
  type BulkUpsertCustomersResponse,
} from '@/lib/api/schemas/sales.schemas';

// Re-export Customer type for compatibility
export type {
  CreateCustomerRequest,
  UpdateCustomerRequest,
  BulkUpsertCustomersRequest,
  BulkUpsertCustomersResponse,
} from '@/lib/api/schemas/sales.schemas';

export type Customer = {
  id: string;
  clientId: string;
  name: string;
  companyName?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  googleMapsUrl?: string;
  memo?: string;
  taxCode?: string;
  isActive: boolean;
  metadata: {
    googleMapsUrl?: string;
    memo?: string;
  };
};

export const customerService = {
  customers: [] as Customer[],

  async getAllCustomers(): Promise<Customer[]> {
    if (this.customers.length > 0) {
      return this.customers;
    }
    const response = await salesApi.getCustomers({
      limit: 1000, // Get all customers
    });
    this.customers = response.customers.map(transformCustomer);
    return this.customers;
  },

  async getCustomer(id: string): Promise<Customer | undefined> {
    const customers = await this.getAllCustomers();
    return customers.find((customer) => customer.id === id);
  },

  async getActiveCustomers(): Promise<Customer[]> {
    const response = await salesApi.getCustomers({
      isActive: true,
      limit: 1000,
    });
    return response.customers.map(transformCustomer);
  },

  async createCustomer({
    googleMapsUrl,
    memo,
    ...data
  }: Omit<Customer, 'metadata' | 'id' | 'clientId'>): Promise<Customer> {
    const customer = await salesApi.createCustomer({
      ...data,
      metadata: {
        googleMapsUrl: googleMapsUrl || undefined,
        memo: memo || undefined,
      },
    });
    // Clear cache to ensure fresh data on next fetch
    this.customers = [];
    return transformCustomer(customer);
  },

  async updateCustomer(
    id: string,
    { googleMapsUrl, memo, ...data }: Omit<Customer, 'metadata' | 'id' | 'clientId'>,
  ): Promise<Customer> {
    const customer = await salesApi.updateCustomer(id, {
      ...data,
      metadata: {
        googleMapsUrl: googleMapsUrl || undefined,
        memo: memo || undefined,
      },
    });
    // Clear cache to ensure fresh data on next fetch
    this.customers = [];
    return transformCustomer(customer);
  },

  async deleteCustomer(id: string): Promise<void> {
    await salesApi.deleteCustomer(id);
    // Clear cache to ensure fresh data on next fetch
    this.customers = [];
  },

  async bulkUpsertCustomers(
    data: BulkUpsertCustomersRequest,
  ): Promise<BulkUpsertCustomersResponse> {
    const result = await salesApi.bulkUpsertCustomers(data);
    // Clear cache to ensure fresh data on next fetch
    this.customers = [];
    return result;
  },

  async searchCustomers(searchTerm: string): Promise<Customer[]> {
    const response = await salesApi.getCustomers({
      search: searchTerm,
      limit: 1000,
    });
    return response.customers.map(transformCustomer);
  },
};

function transformCustomer(customer: Customer): Customer {
  return {
    ...customer,
    googleMapsUrl: customer.metadata.googleMapsUrl,
    memo: customer.metadata.memo,
  };
}
