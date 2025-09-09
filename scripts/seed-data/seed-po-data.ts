// RUN: node scripts/seed-data/seed-po-data.ts
// cspell:words nktu

global.host = 'http://localhost:3000';
global.host = 'https://credo-api-aztuk.consocia.in';

import { clearCache, login, _call } from "./helpers/index.ts";
import type { ClientCode } from './helpers/index.ts';

// Cspell:disable

// Helper function to get customers
async function getCustomers(clientCode: ClientCode) {
  const response = await _call<{ customers: any[] }>(
    `/api/sales/customers?limit=1000`,
    { method: 'GET' },
    { clientCode }
  );
  return response?.customers || [];
}

// Helper function to get products
async function getProducts(clientCode: ClientCode) {
  const response = await _call<{ products: any[] }>(
    `/api/sales/products?limit=1000`,
    { method: 'GET' },
    { clientCode }
  );
  return response?.products || [];
}

// Helper function to add purchase orders
async function addPurchaseOrders(clientCode: ClientCode, purchaseOrders: unknown[]) {
  for (const order of purchaseOrders) {
    await _call(
      `/api/sales/purchase-orders`,
      {
        method: 'POST',
        body: JSON.stringify(order),
      },
      { clientCode },
    );
  }
}

// Generate dummy purchase orders
function generatePurchaseOrders(customers: any[], products: any[], targetOrderCount: number = 500) {
  const purchaseOrders: any[] = [];

  // Get current date and date helpers
  const today = new Date();
  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString();
  };

  // If no products available, return empty array
  if (products.length === 0) {
    return purchaseOrders;
  }

  // Generate dynamic product combinations from actual products
  const generateProductCombination = (size: 'small' | 'medium' | 'large') => {
    const itemCount = size === 'small' ? 2 : size === 'medium' ? 3 : 5;
    const combination = [];
    const usedIndices = new Set<number>();

    for (let i = 0; i < Math.min(itemCount, products.length); i++) {
      let productIndex;
      do {
        productIndex = Math.floor(Math.random() * products.length);
      } while (usedIndices.has(productIndex) && usedIndices.size < products.length);

      usedIndices.add(productIndex);
      const product = products[productIndex];

      // Generate quantity based on order size
      let quantity;
      if (size === 'small') {
        quantity = Math.floor(Math.random() * 10) + 1; // 1-10
      } else if (size === 'medium') {
        quantity = Math.floor(Math.random() * 40) + 10; // 10-50
      } else {
        quantity = Math.floor(Math.random() * 100) + 50; // 50-150
      }

      combination.push({
        productCode: product.productCode,
        quantity,
      });
    }

    return combination;
  };

  // Notes pool for orders
  const notesPool = [
    'Giao hàng trong giờ hành chính',
    'Hàng cần đóng gói cẩn thận',
    'Liên hệ trước khi giao',
    'Giao hàng khẩn cấp',
    'Thanh toán khi nhận hàng',
    'Giao hàng buổi sáng',
    'Giao hàng buổi chiều',
    'Cần xuất hóa đơn VAT',
    'Hàng dễ vỡ, vận chuyển cẩn thận',
    'Ưu tiên giao hàng',
    'Giao tại kho của khách hàng',
    'Kiểm tra hàng trước khi giao',
    'Giao hàng cuối tuần',
    'Liên hệ kế toán trước khi giao',
    'Đóng gói theo yêu cầu đặc biệt',
  ];

  // Generate orders
  let orderIndex = 0;
  while (purchaseOrders.length < targetOrderCount) {
    // Cycle through customers
    const customer = customers[orderIndex % customers.length];

    // Determine order size randomly
    const sizeRandom = Math.random();
    const orderSize = sizeRandom < 0.5 ? 'small' : sizeRandom < 0.8 ? 'medium' : 'large';

    // Generate product combination based on actual products
    const selectedProducts = generateProductCombination(orderSize);

    // Map product codes to full items with descriptions
    const items = selectedProducts.map(item => {
      const product = products.find(p => p.productCode === item.productCode);
      return {
        productCode: item.productCode,
        description: product?.name || `Product ${item.productCode}`,
        quantity: item.quantity,
        category: product?.category || 'Hardware',
        color: product?.color || ['Đen', 'Trắng', 'Xám', 'Inox', 'Đỏ', 'Xanh', 'Vàng'][Math.floor(Math.random() * 7)],
      };
    });

    // Generate dates spread over the last 60 days
    const daysAgo = Math.floor(Math.random() * 60);
    const orderDate = addDays(today, -daysAgo);
    const deliveryDays = Math.floor(Math.random() * 14) + 3; // 3-17 days for delivery
    const deliveryDate = addDays(new Date(orderDate), deliveryDays);

    // Select random note
    const noteIndex = Math.floor(Math.random() * notesPool.length);

    const order = {
      customerId: customer.id,
      orderDate,
      deliveryDate,
      items,
      notes: notesPool[noteIndex],
      metadata: {
        shippingAddress: {
          oneLineAddress: customer.address,
          googleMapsUrl: customer.googleMapsUrl || 'https://www.google.com/maps/place/10.776906,106.706111',
        },
      },
    };

    purchaseOrders.push(order);
    orderIndex++;
  }

  return purchaseOrders;
}

async function seedPoData(clientCode: ClientCode) {
  await clearCache();
  await login(clientCode);

  console.log('Fetching customers...');
  const customers = await getCustomers(clientCode);
  console.log(`Found ${customers.length} customers`);

  console.log('Fetching products...');
  const products = await getProducts(clientCode);
  console.log(`Found ${products.length} products`);

  if (customers.length === 0) {
    console.error('No customers found. Please run seed-for-nktu.ts first to create customers.');
    return;
  }

  if (products.length === 0) {
    console.error('No products found. Please run seed-for-nktu.ts first to create products.');
    return;
  }

  console.log('Generating purchase orders...');
  const purchaseOrders = generatePurchaseOrders(customers, products, 200);
  console.log(`Generated ${purchaseOrders.length} purchase orders`);

  console.log('Creating purchase orders...');
  await addPurchaseOrders(clientCode, purchaseOrders);
  console.log('Purchase orders created successfully!');
}
// Cspell:enable

async function run() {
  await seedPoData('ACME');
  await seedPoData('NKTU');
}

run();
