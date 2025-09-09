// RUN: node scripts/seed-data/seed-for-nktu.ts
// cspell:words nktu

global.host = 'http://localhost:3000';
global.host = 'https://credo-api-aztuk.consocia.in';

import { IconIdentifiers } from '../../src/utils/iconRegistry.ts';
import { RouteIdentifiers } from '../../src/config/routeConfig.ts';
import {configs, data, clearCache, fetchClients, addClients, addDepartments, getDepartments, getPositions, addPositions, addEmployees, addCustomers, addProducts } from "./helpers/index.ts";
import type {ClientCode} from './helpers/index.ts';

// Cspell:disable

configs.registerData.ACME.clientConfig.translations = {
  en: {},
  vi: {
    common: {
      pages: {
        employeeConfig: 'Nhân Viên',
        productConfig: 'Sản Phẩm',
        roleConfig: 'Phân Quyền',
        customerConfig: 'Khách Hàng',
      },
    },
    employee: {
      unit: 'Bộ phận',
      allUnit: 'Tất cả các Bộ phận',
    },
  },
}
configs.registerData.ACME.clientConfig.navigation = [
  {
    id: 'nav-home',
    translationKey: 'common.pages.home',
    icon: IconIdentifiers.DASHBOARD,
    path: RouteIdentifiers.HOME,
    order: 1,
  },
  {
    id: 'nav-employee-management',
    translationKey: 'common.pages.employeeManagement',
    icon: IconIdentifiers.USERS,
    path: RouteIdentifiers.EMPLOYEE_MANAGEMENT,
    order: 2,
    roles: ['manager'],
    activePaths: [
      RouteIdentifiers.EMPLOYEE_MANAGEMENT,
      RouteIdentifiers.EMPLOYEES_ADD,
      RouteIdentifiers.EMPLOYEE_EDIT,
      RouteIdentifiers.EMPLOYEE_DETAIL,
    ],
  },
  {
    id: 'nav-sales-po-management',
    translationKey: 'common.pages.salesPoManagement',
    icon: IconIdentifiers.SHOPPING_CART,
    path: RouteIdentifiers.PO_MANAGEMENT,
    order: 3,
    roles: [
      'manager',
      'sales',
      'accounting',
      'warehouse',
      // 'delivery',
    ],
    activePaths: [
      RouteIdentifiers.PO_MANAGEMENT,
      RouteIdentifiers.PO_ADD,
      RouteIdentifiers.PO_DETAIL,
      RouteIdentifiers.PO_EDIT,
    ],
  },
  {
    id: 'nav-delivery-management',
    translationKey: 'common.pages.deliveryManagement',
    icon: IconIdentifiers.TRUCK,
    path: RouteIdentifiers.DELIVERY_MANAGEMENT,
    order: 5,
    roles: [
      'manager',
      'sales',
      'accounting',
      // 'warehouse',
      'delivery',
    ],
    activePaths: [
      RouteIdentifiers.DELIVERY_MANAGEMENT,
      RouteIdentifiers.DELIVERY_DETAIL,
    ],
  },
  {
    id: 'nav-master-data',
    translationKey: 'common.pages.masterData',
    icon: IconIdentifiers.DATABASE_COG,
    order: 6,
    roles: ['admin', 'manager', 'sales', 'accounting'],
    subs: [
      {
        id: 'nav-product-config',
        translationKey: 'common.pages.productConfig',
        icon: IconIdentifiers.BOX,
        path: RouteIdentifiers.PRODUCT_CONFIG,
        order: 1,
        roles: [
          'manager',
          // 'sales',
          'accounting',
          // 'warehouse',
          // 'delivery',
        ],
        activePaths: [
          RouteIdentifiers.PRODUCT_CONFIG,
        ],
      },
      {
        id: 'nav-customer-config',
        translationKey: 'common.pages.customerConfig',
        icon: IconIdentifiers.ADDRESS_BOOK,
        path: RouteIdentifiers.CUSTOMER_CONFIG,
        order: 2,
        roles: [
          'manager',
          // 'sales',
          'accounting',
          // 'warehouse',
          // 'delivery',
        ],
        activePaths: [
          RouteIdentifiers.CUSTOMER_CONFIG,
        ],
      },
    ],
  },
  {
    id: 'nav-profile',
    translationKey: 'common.pages.profile',
    icon: IconIdentifiers.USER_CIRCLE,
    path: RouteIdentifiers.PROFILE,
    order: 99,
  },
]

configs.registerData.ACME.clientConfig.mobileNavigation = [
  {
    id: 'mobile-nav-home',
    translationKey: 'common.pages.home',
    icon: IconIdentifiers.HOME,
    path: RouteIdentifiers.HOME,
    order: 1,
  },
  {
    id: 'mobile-nav-po',
    translationKey: 'common.pages.poManagementMobile',
    icon: IconIdentifiers.SHOPPING_CART,
    path: RouteIdentifiers.PO_MANAGEMENT,
    order: 2,
  },
  {
    id: 'mobile-nav-delivery',
    translationKey: 'common.pages.deliveryManagementMobile',
    icon: IconIdentifiers.TRUCK,
    path: RouteIdentifiers.DELIVERY_MANAGEMENT,
    order: 3,
  },
  {
    id: 'mobile-nav-more',
    translationKey: 'common.pages.more',
    icon: IconIdentifiers.DOTS,
    path: RouteIdentifiers.MORE,
    order: 4,
  },
]

configs.registerData.ACME.clientConfig.features = {
  apiCall: {
    delay: 1000,
  },
  employee: {
    workType: false,
  },
  customer: {
    noEmail: true,
    noTaxCode: true,
  },
}

configs.registerData.NKTU = {
  clientName: `NGŨ KIM TÂN UYÊN`,
  rootUserEmail: 'congtytanuyen@gmail.com',
  rootUserFirstName: 'Duy Tân',
  rootUserLastName: 'Lê',
  clientConfig: {
    clientName: `NGŨ KIM TÂN UYÊN`,
    logoUrl: '/clients/NKTU/NKTU.png',
    ...configs.registerData.ACME.clientConfig,
  }
}

async function updateForNKTU(clientCode: ClientCode) {
  await clearCache();
  const customerData = [
    "NỘI THẤT NGUYỄN LONG|CHI NHÁNH - CÔNG TY TNHH NỘI THẤT NGUYỄN LONG|Số 115, đường Tân An, Khu phố Tân An, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "C.R.M.G|CHI NHÁNH CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU C.R.M.G|Cụm công nghiệp Hố Nai 3, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "MINH DƯƠNG CHU LAI|CÔNG TY CP GỖ MINH DƯƠNG CHU LAI|Lô số 10, đường số 4, KCN Bắc Chu Lai, Xã Núi Thành, Thành phố Đà Nẵng, Việt Nam",
    "GỖ ĐẠI THÀNH|CÔNG TY CỔ PHẦN CÔNG NGHỆ GỖ ĐẠI THÀNH|Quốc lộ 1A, Tổ 1, Khu vực 8, Phường Quy Nhơn Tây, Tỉnh Gia Lai, Việt Nam",
    "GỖ MINH DƯƠNG|CÔNG TY CỔ PHẦN GỖ MINH DƯƠNG|Số 93T/2, đường Phan Đình Giót, tổ 9, khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "HOMEMAS|CÔNG TY CỔ PHẦN HOMEMAS|Số 181 Đường Nguyễn Hữu Cảnh, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "LÂM VIỆT|CÔNG TY CỔ PHẦN LÂM VIỆT|Thửa đất số 602, tờ bản đồ số 39, khu phố Khánh Lộc, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "MODERN INS|CÔNG TY CỔ PHẦN MODERN INS|78, đường XTT20, tổ 1, ấp 5, Xã Bà Điểm, Thành phố Hồ Chí Minh, Việt Nam",
    "AN PHÚC KHANG|CÔNG TY CỔ PHẦN NỘI THẤT AN PHÚC KHANG|124/10 Đường HT45, Khu phố 1,  Phường Tân Thới Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "ARTIUS|CÔNG TY CỔ PHẦN THIẾT KẾ VÀ XÂY DỰNG ARTIUS|215 Nam Kỳ Khởi Nghĩa, Phường Xuân Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "A.P VINA|CÔNG TY CỔ PHẦN THƯƠNG MẠI XNK A.P VINA|11/7 Thoại Ngọc Hầu, Phường Tân Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "NỘI THẤT SEN|CÔNG TY CỔ PHẦN TRANG TRÍ NỘI THẤT SEN|2.01 Chung cư Orient Apartment số 331, Bến Vân Đồn, Phường Vĩnh Hội, Thành phố Hồ Chí Minh, Việt Nam",
    "SIBA|CÔNG TY CỔ PHẦN TẬP ĐOÀN CƠ KHÍ CÔNG NGHỆ CAO SIBA|99A1 Cộng Hòa, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh, Việt Nam",
    "VI NA G7|CÔNG TY CỔ PHẦN VI NA G7|Cụm Công Nghiệp Tam Phước 1, Khu Phố Long Khánh 3, Phường Tam Phước, Tỉnh Đồng Nai",
    "AMAVI|CÔNG TY CỔ PHẦN XÂY DỰNG VÀ NỘI THẤT AMAVI|Số 61 - 63 Quốc Hương, Phường An Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "MINH HẠNH|CÔNG TY TNHH  MINH HẠNH|Lô B2-36 Đường số 2, KCN Tân Đông Hiệp B, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "THỊNH VIỆT|CÔNG TY TNHH  SẢN XUẤT THỊNH VIỆT|Số 54A/2 Đường ĐT 743, Khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "BẢO HƯNG|CÔNG TY TNHH BẢO HƯNG|Thửa đất số 157, Tờ bản đồ số 15, Khu phố Khánh Long, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "HIỂU ĐỨC|CÔNG TY TNHH CHẾ BIẾN LÂM SẢN VÀ THƯƠNG MẠI HIỂU ĐỨC|Thửa đất 1488, Tờ bản đồ 16, Khu Phố 6, Phường Thới Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "CRAFTSMAN KITCHEN|CÔNG TY TNHH CRAFTSMAN KITCHEN COMPONENTS VIỆT NAM|Lô số 3, đường số 5A, KCN Nhơn Trạch 2, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "DOANH ĐỨC|CÔNG TY TNHH DOANH ĐỨC|Thửa đất số 104, 106, 107A, 164, 165, 166, 169, 170, 173, 174, 183, 184, 185 và thửa 186, đường số 6, Phường Dĩ An, Thành Phố Hồ Chí Minh, Việt Nam",
    "DŨNG KHANH|CÔNG TY TNHH DŨNG KHANH|Cụm công nghiệp Thạnh Phú, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "EBEN INTERIOR|CÔNG TY TNHH EBEN INTERIOR|Thửa đất số 2079, tờ bản đồ số 44, Đường Khánh Bình 09, khu phố Khánh Vân, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "GIA VINH|CÔNG TY TNHH GIA VINH|Thôn Vĩnh Thành, Xã Cát Tài, Huyện Phù Cát, Tỉnh Bình Định, Việt Nam",
    "HARDWARE K&K|CÔNG TY TNHH HARDWARE K&K|Thửa đất số 695, Tờ bản đồ số 2, Đường Tô Vĩnh Diện, Tổ 4, Khu phố Khánh Lộc, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "IN HOME|CÔNG TY TNHH IN HOME|1A, Đường Nguyễn Thị Kiểu, phường Tân Thới Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "INNI HOME|CÔNG TY TNHH INNI HOME|Đường ĐH 423, khu phố Bà Tri, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "INTERWOOD|CÔNG TY TNHH INTERWOOD VIỆT NAM|Thửa đất số 185, Tờ bản đồ số 39, Đường Vĩnh Lợi, Phường Tân Uyên, Thành Phố Hồ Chí Minh, Việt Nam",
    "KHANG HƯNG ĐẠT|CÔNG TY TNHH KHANG HƯNG ĐẠT|Tổ 2A, khu phố Long Đức 3, Phường Tam Phước, Tỉnh Đồng Nai",
    "INNOCRAFT|CÔNG TY TNHH KỸ NGHỆ GỖ INNOCRAFT VIỆT NAM|Số 12 VSIP II-A, Đường số 14, Khu Công nghiệp Việt Nam-Singapore II-A, Phường Vĩnh Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "GỖ THANH THANH|CÔNG TY TNHH KỸ NGHỆ GỖ THANH THANH|50C Khu phố 5, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "CƠ KHÍ Á CHÂU|CÔNG TY TNHH KỸ THUẬT CƠ KHÍ Á CHÂU|32/6/11 Đường số 9, Khu phố 5, Phường Linh Xuân, Thành phố Hồ Chí Minh, Việt Nam",
    "LIFESTYLE FURNITURE|CÔNG TY TNHH LIFESTYLE FURNITURE|304/9 Huỳnh Văn Bánh, Phường Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam",
    "MECHANICAL TC|CÔNG TY TNHH MECHANICAL TC GROUP|Cụm công nghiệp Cao An, Phường Việt Hòa, Thành phố Hải Phòng, Việt Nam",
    "MINH PHÁT 2|CÔNG TY TNHH MINH PHÁT 2|Số 57/16, Khu phố Bình Phước A, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "NỘI THẤT HỒ GIA|CÔNG TY TNHH MTV NỘI THẤT HỒ GIA|Số 5/9A Đường Chiêu Liêu, Khu phố Đông Chiêu, Phường Dĩ An, Thành phố Hồ Chí Minh, Việt Nam",
    "GỖ VIỆT|CÔNG TY TNHH MỘT THÀNH VIÊN GỖ VIỆT|Văn phòng giao dịch: P506, C4, Khu dân cư An Bình, Phường Trấn Biên,Tỉnh Đồng Nai, Việt Nam",
    "NGŨ KIM MIỀN NAM|CÔNG TY TNHH MỘT THÀNH VIÊN NGŨ KIM MIỀN NAM|131/1 Đường Hiệp Bình, Phường Hiệp Bình, Thành phố Hồ Chí Minh, Việt Nam",
    "NHẤT GỖ|CÔNG TY TNHH MỘT THÀNH VIÊN NHẤT GỖ|Lô 18, đường số 5, KCN Giang Điền, Xã Trảng Bom, Tỉnh Đồng Nai, Việt Nam",
    "RAPEXCO - ĐẠI NAM|CÔNG TY TNHH MỘT THÀNH VIÊN RAPEXCO - ĐẠI NAM|Lô số N1 - N8, P1 - P16, Khu công nghiệp Suối Dầu, Xã Cam Lâm, Tỉnh Khánh Hòa, Việt Nam",
    "NGŨ KIM VẠN HÂM|CÔNG TY TNHH MỘT THÀNH VIÊN THIẾT BỊ CƠ ĐIỆN NGŨ KIM VẠN HÂM|Thửa đất số 430, Tờ bản đồ 38, khu phố Khánh Lộc , Phường Tân Hiệp, Thành phố Hồ Chí Minh , Việt Nam",
    "BAO BÌ CUỘC SỐNG MỚI|CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ IN BAO BÌ CUỘC SỐNG MỚI|68 Trần Văn Chẩm,Ấp 3B, Xã Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    "VẠN PHÁT PHÁT|CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ VẠN PHÁT PHÁT|Thửa đất số 41- 64, Tờ bản đồ số 34, Đường Tân Phước Khánh 02, Tổ 4, Khu phố Khánh Hòa, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "VÂN ANH PHÁT|CÔNG TY TNHH MỘT THÀNH VIÊN VÂN ANH PHÁT|Số 90/10/51, tổ 11, KP 9, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "NAM AN LIVING|CÔNG TY TNHH NAM AN LIVING|57 Nguyễn Du, Phường Sài Gòn, Thành phố Hồ Chí Minh, Việt Nam",
    "LỘC PHÁT VIỆT|CÔNG TY TNHH NỘI THẤT LỘC PHÁT VIỆT|Số 09, hẻm 394, đường Võ Nguyên Giáp, tổ 7, khu phố Tân Cang, Phường Phước Tân, Tỉnh Đồng Nai, Việt Nam",
    "MÊ KÔNG|CÔNG TY TNHH NỘI THẤT MÊ KÔNG|đường 2B khu 2, Phường Bình Dương, Thành phố Hồ Chí Minh, Việt Nam",
    "THẦN ĐÈN|CÔNG TY TNHH NỘI THẤT THẦN ĐÈN|90/4C, Ấp Thanh Hóa, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "TÙY CHỈNH PHÚC MỸ GIA|CÔNG TY TNHH NỘI THẤT TÙY CHỈNH PHÚC MỸ GIA|Số 39, Quốc lộ 1A, khu phố 1, Phường Hiệp Bình, Thành phố Hồ Chí Minh",
    "TỦ BẾP OWEN VIỆT NAM|CÔNG TY TNHH NỘI THẤT TỦ BẾP OWEN VIỆT NAM|Lô A-3B-CN, đường D3, Khu công nghiệp Bàu Bàng, Xã Bàu Bàng, Thành phố Hồ Chí Minh, Việt Nam",
    "VIỆT TRUNG|CÔNG TY TNHH NỘI THẤT VIỆT TRUNG|Thửa đất số 331, tờ bản đồ số 15, khu phố Khánh Long, Phường Tân Khánh, Thành Phố Hồ Chí Minh, Việt Nam",
    "PHÚ THÀNH PHÁT|CÔNG TY TNHH PHÚ THÀNH PHÁT DESIGN FURNITURE|Số 202/85/6/38, Khu phố 4A, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "QUỐC TẾ DI HƯNG|CÔNG TY TNHH QUỐC TẾ DI HƯNG|Khu sản xuất Bình Chuẩn, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "RESPONSE VIỆT NAM|CÔNG TY TNHH RESPONSE VIỆT NAM|Lô A13-A14 đường số 1, Cụm Công nghiệp thị trấn Uyên Hưng, Phường Tân Uyên, Thành phố Hồ Chí Minh, Việt Nam",
    "SX TM XD THỊNH PHÁT|CÔNG TY TNHH SX TM XD THỊNH PHÁT|Số 13X1/2 Đường số 8, Tổ 24, Khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "SXTM GỖ ĐẠI VIỆT|CÔNG TY TNHH SXTM GỖ ĐẠI VIỆT|Số 276/19/13 Đường Trần Hưng Đạo, Khu Phố Đông B, Phường Đông Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "BẢO ĐỆ HÂN|CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI BẢO ĐỆ HÂN|Số 713, đường Khánh Bình 03, Tổ 5, Khu phố Khánh Tân, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "LONG ĐẠT|CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI LONG ĐẠT|thửa đất số 456,487,  tờ bản đồ số 29, đường CPH006, Khu phố 1B, Phường Chánh Phú Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "PHÚ CƯỜNG FURNITURE|CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI PHÚ CƯỜNG FURNITURE|Số 99, KP Cây Chàm, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "THANH MINH|CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI THANH MINH|Thửa đất số 37.38, tờ bản đồ số B1(DC8), đường Cao Tốc Mỹ Phước - Tân Vạn, khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "HƯNG PHÁT|CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI VÀ THIẾT KẾ NỘI THẤT HƯNG PHÁT|Số 2, Đường số 9, KP 4, Phường Tam Bình, Thành phố Hồ Chí Minh, Việt Nam",
    "HOA ĐẠT|CÔNG TY TNHH SẢN XUẤT XUẤT NHẬP KHẨU HOA ĐẠT|55/1 Khu phố Bình Hòa 1, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "TELLBE VIỆT NAM|CÔNG TY TNHH TELLBE VIỆT NAM|Khu phố Hòa Lân 1, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "THE MAKER FURNITURE|CÔNG TY TNHH THE MAKER FURNITURE|5/215 Tổ 4A, khu phố Hòa Lân 1, Phường Thuận Giao, Thành Phố Hồ Chí Minh, Việt Nam",
    "DƯƠNG BẢN|CÔNG TY TNHH THIẾT KẾ DƯƠNG BẢN|Số 31 VSIP II  Đường số 7,  Khu Công Nghiệp Việt Nam – Singapore II, Phường Bình Dương, Thành phố Hồ Chí Minh.",
    "THÀNH PHÚ PHÁT|CÔNG TY TNHH THÀNH PHÚ PHÁT|Lô G1 - G2, Cụm CN Thạnh Phú - Thiện Tân, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "XNK HIỀN KIỆM|CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU HIỀN KIỆM|Số 35 KDC Đại Quang, Khu phố Tân Phú 1, Phường Tân Đông Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "MINH ĐẠT|CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU MINH ĐẠT|Lầu 1, 1244 Lạc Long Quân, Phường Tân Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "BẢO QUYÊN|CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU VÀ VẬN TẢI BẢO QUYÊN|Số 2/55 An Đà Nội, Phường Gia Viên, Thành phố Hải Phòng, Việt Nam",
    "TIẾN TRIỂN VIỆT NAM|CÔNG TY TNHH TIẾN TRIỂN VIỆT NAM|Thửa đất số 150, 159, 160, Tờ bản đồ số 18, Khu phố Ông Đông, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "TM XNK LTC VIỆT NAM|CÔNG TY TNHH TM XNK LTC VIỆT NAM|81A Đường số 2, Khu phố 5, Phường Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "TOÀN THÀNH PHÚ|CÔNG TY TNHH TOÀN THÀNH PHÚ|89B Đường Nguyễn Thị Tươi, Khu Phố Tân Phước, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "TRANSFORMER ROBOTICS PTE|CÔNG TY TNHH TRANSFORMER ROBOTICS PTE|48B Đặng Dung, Phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam",
    "V-MARBLE|CÔNG TY TNHH V-MARBLE|423 Đường Trường Chinh, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh, Việt Nam",
    "PHÚ KIM HƯNG|CÔNG TY TNHH VẬT TƯ NGÀNH GỖ PHÚ KIM HƯNG|53/3, Đường DX058 , Khu Phố 8, Phường Bình Dương, Thành Phố Hồ Chí Minh, Việt Nam",
    "WEST COUNTRY FURNITURE|CÔNG TY TNHH WEST COUNTRY FURNITURE VIỆT NAM|Lô Q1-Q2, Đường Số D4, Khu Công Nghiệp Nam Tân Uyên, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "HOÀNG THỊNH|CÔNG TY TNHH XÂY DỰNG TRANG TRÍ NỘI THẤT HOÀNG THỊNH|223 đường 28, Phường An Nhơn, Thành phố Hồ Chí Minh, Việt Nam",
    "ALLIANCE|CÔNG TY TNHH XÂY DỰNG VÀ NỘI THẤT CAO CẤP ALLIANCE|56-58 Đường Võ Oanh, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "ĐẠT THÀNH|CÔNG TY TNHH ĐẠT THÀNH|Khu phố Bình Khánh, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "TÂN ANH KIỆT|CÔNG TY TNHH ĐỒ GỖ TÂN ANH KIỆT BÌNH DƯƠNG|thửa đất số 209, tờ bản đồ số 22, khu phố Long Bình, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "FANNWOOD|CÔNG TY TRÁCH NHIỆM HỮU HẠN FANNWOOD|Thửa đất số 1032, tờ bản đồ số 40, khu phố Bình Khánh, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "JANG IN FURNITURE VIỆT NAM|CÔNG TY TRÁCH NHIỆM HỮU HẠN JANG IN FURNITURE VIỆT NAM|KCN Nhơn Trạch 5, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "QUỐC TẾ KHẢI TÍN VIỆT|CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ KHẢI TÍN VIỆT|B6/257 ấp 2, Xã Bình Lợi, Thành phố Hồ Chí Minh, Việt Nam",
    "PHÚC GIA HUY|CÔNG TY TRÁCH NHIỆM HỮU HẠN THƯƠNG MẠI XUẤT NHẬP KHẨU PHÚC GIA HUY|94/10/8 Nguyễn An Ninh, Khu phố Nhị Đồng 2, Phường Dĩ An, Thành phố Hồ Chí MInh, Việt Nam",
    "VŨ TFC|CÔNG TY TRÁCH NHIỆM HỮU HẠN VŨ TFC|17C/25, Đường Bình Chuẩn 15, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "WOODWORTH WOODEN|CÔNG TY TRÁCH NHIỆM HỮU HẠN WOODWORTH WOODEN (VIỆT NAM)|Ấp 12, Xã Phú Hòa Đông, Thành phố Hồ Chí Minh, Việt Nam",
    "VĨNH THÀNH|HỢP TÁC XÃ VĨNH THÀNH|Ấp Ông Hường, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
  ].map(el => {
    const [name, companyName, address] = el.split('|');
    return {
      name: name.trim(),
      companyName: companyName.trim(),
      address: address.trim(),
      metadata: {
        googleMapsUrl: 'https://maps.app.goo.gl/JxLDhTFMjtKLjd6d8',
      }
    }
  })
  await addCustomers(clientCode, customerData)

  const productData = [
    "ART|Ổ cắm adapter|Cái",
    "BAKE|Bake đầu lục giác chìm 650mm|Vỉ",
    "BANLE|Bản lề lá|Cặp",
    "BAOLO|Bao lô|Cái",
    "BAOTAY|Bao tay sợi muối tiêu 60g|Đôi",
    "BAS INOX|Bas treo inox 201 32x19.7x61.5mm|Cái",
    "BASNEO|Pát neo bán nguyệt|Cái",
    "Basoto|Bas ô tô|Cái",
    "BDCL|Bộ dây chống lật|Bộ",
    "BL|Bản lề|Cái",
    "BL.8x15|Bulong M8x15|Con",
    "BL.METALL|Bản lề Metall A giảm chấn lọt lòng Hafe/493.03.025|Gói",
    "BL.PIANO|Bản lề lá piano inox 201|Cây",
    "BL.SHACB|Bản lề tủ bằng sắt mạ, nhãn hiệu SH- ABC|Chiếc",
    "BLCC|Bản lề cùi chỏ|Cặp",
    "BLCT|Bản lề chữ thập inox 13x60mm|Cái",
    "BLD|Mực lông dầu Thiên Long|Hộp",
    "BNGXG|Bộ nâng giường xếp gọn|Bộ",
    "BONANGHA|Bộ nâng hạ|Bộ",
    "BOTYHOI|Bộ ty hơi ghế|Bộ",
    "BT|BAO TAY|Cặp",
    "BTKB|Bas treo kệ bếp|Bộ",
    "BUATA|Búa tạ|Cái",
    "BULONG LGN M10x70|Bulong lục giác ngoài M10x70|Con",
    "BULONG.KG|Bulong|kg",
    "BULONGLG|Bu long lục giác|Cái",
    "BUTLONG|Bút lông dầu|Cái",
    "BX JL-08|Bánh xe JL-08|Pcs",
    "BX PHI 40|Bánh xe phi 40 mm (CK)|Cái",
    "BX.40|Bánh xe nhựa phi 40 bass sắt cố định cao 50mm|Cái",
    "BX.ĐC50|Bánh xe địa cầu phi 50 có khóa|Cái",
    "BX1.5|Bánh xe 1.5mm|Cái",
    "BXCL|Bộ bánh xe cửa lùa 326|Bộ",
    "BXPHI75|Bánh xe càng sắt phi 75|Cái",
    "BXPVC|Bánh xe PVC|Cái",
    "Cam PZ|Cam liên kết PZ|Con",
    "CAMSAT|Cam sắt|Con",
    "CAMTUC|Cam liên kết TUC|Con",
    "CĐK.8MM|Chốt đỡ kệ 8mm|Con",
    "CG|Chốt gỗ 8x30|kg",
    "CHANDINH|Chân đế đinh|Cái",
    "CHANGHE|Bộ chân ghế nhôm|Bộ",
    "CHANGHE1|Chân ghế|Cái",
    "CHEN|Chén nhôm|Cặp",
    "CHENNHOM|Chén nhôm|Cái",
    "CHIDONG|Chỉ đồng màu rêu|Mét",
    "CHONGAM|Chống ẩm bột Super Dry 10g|kg",
    "CHONGDO|Chống đỗ|Bộ",
    "CHONGNANGHA|Tay chống nâng hạ|Cái",
    "CHOT|CHỐT|Bịch",
    "Chốt kệ|Chốt kệ|Cái",
    "CHOT.U|Chốt U xanh|Cái",
    "CHOTAM|Chốt âm M6|Con",
    "CHOTBI|Chốt bi đồng thau|Cái",
    "CHOTDD|Chốt di động|Con",
    "CHOTDUONG|Chốt dương M6|Con",
    "CHOTGAI522|Thanh chốt gài inox  513/522|Cái",
    "CHOTGO8x40|Chốt gỗ 8x40|kg",
    "CHOTKE|Chốt kệ|Con",
    "CHOTKEP|Chốt kẹp 2 bánh chân thấp trắng|Bộ",
    "CK|Chốt kệ|Cái",
    "CKAT|Chốt khóa an toàn|Bộ",
    "CN.10x10|Cục nhựa 10x10|Con",
    "CNTB.1T|Chân nhựa tủ bếp 1T|Cái",
    "CNTB.800|Chân nhựa tủ bếp 80mm|Cái",
    "COLE|Cờ lê chữ Y|Bộ",
    // "CPMH|Chi phí mua hàng|X",
    "CTC.INOX|Chân tăng chỉnh inox 60|Cái",
    "CTD|Chân tăng đơ|Cái",
    "CTĐ|Chân tăng đưa|Cái",
    // "CTĐ|Chân tăng đưa|Cái",
    "CTĐ.19|Chân tăng đưa phi 19 M6*15mm|Cái",
    "CTĐ.S|Chân tăng đưa và sò|Bộ",
    "CUCHIT|Cục hít|Bộ",
    "CUCTA|Cục tạ sắt 11 x 25 x 20 ( sơn tĩnh điện đen )|Cục",
    "CUCTA.70|Cục tạ sắt 70 gram|Cái",
    "CUICHO|Cùi chỏ|Cái",
    "CUMXIET|Cùm xiết|Cái",
    "DA|ĐÁ CẮT|Viên",
    "DAIOC.M8|Đai ốc M8|Con",
    "DAUBAKE|Bake lục giác|Cái",
    "DAYBO.120|Dây bố 120m|Cuộn",
    "DAYCAM|Dây cắm điện|Cái",
    "DAYCAP|Dây cáp bọc nhựa|Mét",
    "DAYMOI|Dây mồi màu đen|Mét",
    "DAYNHO|Dây nhợ|Cuộn",
    "DAYQUAI|Dây quai|Cái",
    "DAYRUT|Dây rút|Sợi",
    "DAYRUT4*200|Dây rút nhựa 4x200mm|Bịch",
    "DCCL|Dây cáp 1.5mm chấn bas 2 đầu|Sợi",
    "DEN|Đèn|Cái",
    "DENHUA|Đế nhựa|Cái",
    "DENLED|Đèn led|Bộ",
    "DHA|Dây hút ẩm|Dây",
    "DINH|Đinh cọp F15|Hộp",
    "ĐINH 18x5|Đinh nhựa 18x5 bằng đen|Cái",
    "Đinh F|Đinh F|Thùng",
    "DINHCUON|Đinh cuộn F50|Cuộn",
    "DINHNHUA|Đinh Nhựa trắng 4.5x17.5|Con",
    "DINHTAN|Đinh tán lệch tâm 10x8x4x25|Cái",
    "DTĐ|Dây treo đen 180mm|Cái",
    "GC|Gia công|Bộ",
    "GHE|Ghế nhựa|Cái",
    // "GHICHU|Ghi chú|X",
    // "GHICHU1|GHI CHÚ|X",
    "GIA|Giá|Cái",
    "GIAYROM|Giấy rơm|kg",
    "HITCUA|Hít cửa|Cái",
    "HỘP QUÀ|Hộp Quà Đoàn Viên 2025 (Rượu K5 + Dịch + Trà15)|Hộp",
    "HOPDIEN|Hộp điện|Cái",
    "HOPEPVI|Hộp ép vỉ nhựa|Bộ",
    "Hút ẩm 100g|Gói hút ẩm|kg",
    "HUTAM|Gói hút ẩm SD 10gram|Gói",
    "KE|Kệ|Cái",
    "KEO|Keo sữa ATM|Gói",
    "Keo.01|Keo|Chai",
    "KEO.X66|Keo dog X66|Thùng",
    "KEOCHAI|KEO ATM|Chai",
    "KGV|Pat (Bas) nhựa ke góc vuông|Cái",
    "KHOALG|Khóa lục giác|Cái",
    "KHOAMOCLX|Khóa móc lò xo|Cái",
    "KHOAMOVIT|Khóa mỏ vịt|Cái",
    "KHOENMATCA|Khoen mắt cá đen|Cái",
    "KMV|Khóa mỏ vịt|Cái",
    "KS|Keo sữa ATM|Bịch",
    "KSV|Ke sắt vuông 35mm (1 sâu = 50 cái)|Sâu",
    "LG|Lục giác|Cái",
    "LOA.NT|Loa nội thất|Cái",
    "LONGDEN|Long đền inox|Cái",
    "LOXO|Lò xo|Cái",
    // "LPXD|Lệ phí xăng dầu|X",
    "LUOIDAO|Lưỡi dao cắt giấy|Tép",
    // "MIẾNG|NHÁM|X",
    // "MIẾNG1|MIẾNG|Miếng",
    "MK|Mũi khoan|Cái",
    "MOCAO|Móc áo|Cái",
    "MOCXICH|Móc sắt xích đen|Cái",
    "MX,NHOM|Mâm xoay nhôm|Cái",
    "MX.ĐEN1|Mâm xoay đen 245x245|Cái",
    "Namcham|Nam châm chặn cửa màu inox|Bộ",
    "NANGGHE|Phụ kiện nâng ghế sofa|Bộ",
    "NAPCHUP|Nắp chụp inox phi 60|Cái",
    "NC|Nam châm|Cái",
    "NC.10x10|Nam châm trắng 10x10|Cái",
    "NCMK|Nam châm chặn cửa|Bộ",
    // "nd|nội dung|X",
    "NEPDIEN|Nẹp giữ dây điện|Cái",
    "Nhám|Nhám Nhật|Tờ",
    "NHAMCUON|Nhám cuộn|Cuộn",
    "NHANMO|Nút nhấn mỡ|Bộ",
    "NIDAN|Nỉ dán|Cái",
    "NUT3M|Nút dán 3M|Cái",
    "nutnhanmo|Nút nhấn mở inox|Cái",
    "NUTNHUA|Nút nhựa|Cái",
    "NUTTH|Nút thông gió|Cái",
    "OCAM|Ổ cắm|Cái",
    "OD.USB|Ổ điện USB|Cái",
    "OKHOA|Ổ khóa cửa ivan 18xL30|Cái",
    "OKHOA1|Bộ ổ khóa|Bộ",
    "OLK|Ốc cam liên kết|Bộ",
    "ONGDIEU|Ống điếu|Cái",
    "ỐNGTIỆN|Ống tiện|Cái",
    // "oto|Xe ô tô|Chiếc",
    "PAT|Pát|Bộ",
    "Pát|Pát|Cái",
    "PHECAI|Phe cài|Cái",
    "PU 118-2F01|PU 118-2F01|Mét",
    "PVC|Phí vận chuyển|Lần",
    "QUẠT|Quạt HF - 125P 115 V / 60 HZ. Dây quạt 600mm|Cái",
    "Ray UV|Thanh ray lùa UV|Mét",
    "RAY.U|Ray nhôm 326 - U - 3m dày|Cây",
    "RAYBI.TP|Ray bi toàn phần màu sáng 45/450mm-DIY/494.02.464|Gói",
    "RAYNHOM.MD|Thanh ray nhôm LC , đóng 600mm, 3 nấc, mở 1180mm|Cái",
    "RAYTRUOT|Ray trượt ngăn kéo 3 tầng 42*10 *300mm|Cặp",
    "RB35.250|Ray bi 3 tầng bản 35 dài 250mm|Bộ",
    "RB42.500|Ray bi 3 tầng bản 42 dài 500mm|Bộ",
    "RB45.300|Ray bi 3 tầng bản 45 dài 300mm|Bộ",
    "RCB48.1230|Ray cáp 48/1230/710/250|Bộ",
    "RONCUA|Ron cửa chữ T|Cuộn",
    "RUYBANG|Ruy băng|Cuộn",
    "SBK|Súng bắn keo|Cái",
    "SCCV|Sò cấy có vành|Con",
    "Sò cấy|Cấy có vành 6x10|Con",
    "TACKE|Tắc kê nhựa Emerson|Con",
    "TACKE.1|Tắc kê|Bộ",
    "TAN|TÁN M12|Con",
    "TANDU|Tán dù|Cái",
    "TANKEO|Tán keo xi mạ kẽm 1/4-20|Cái",
    "TAYNAM|Tay nắm|Pcs",
    "TAYVAN|Tay vặn|Cái",
    "TC.4x10|Tán chấu 4x10 mm|Con",
    "TH|Ty hơi|Cái",
    "TH.120N|Ty hơi 120N 2 đầu sắt|Cái",
    "TH.250N|Ty dầu đen 250N 273/141 tay cầm nhựa tròn, dây 750mm|Cái",
    "THANH.OVAN|Thanh nhôm ovan|Cây",
    "THANHCHONG|Thanh chống|Cặp",
    "THANHNHOM|Thanh nhôm 326|thanh",
    "THANHTRUOT|Thanh trượt 45mm/4515H-250mm|Bộ",
    "THD.250N|Ty dầu đen 250N 273/141 tay cầm nhựa tròn, dây 750mm|Bộ",
    "THUNGRAC|Thùng rác|Bộ",
    "TN.INOX|Tay nắm đũa inox 150mm|Cái",
    "TNGO|Tay nắm gỗ|Cái",
    "TOINOX|Tô inox|Cái",
    "TT3T|Thanh trượt bi 3 tầng|Bộ",
    "TUAVIT|Tua vít 5x54|Cái",
    "TUI|Túi chống đổ|Túi",
    "ty.44|Ty 44|Con",
    "TY35.BT|Ty 35 bầu ren thưa|Con",
    "TY68|Ty hai đầu 68mm|Con",
    "VAILAU|Vải lau|kg",
    "VIT|Vít răng thưa đầu bằng|kg",
    "VIT.INOX|Vít inox|Cái",
    "VIT.TB.4*15|Vít răng thưa đầu bằn 4*15mm|kg",
    "VIT.TB.4*25|Vít răng thưa đầu bằng 4*25mm|kg",
    "VITDEN4x12|Vít thép màu đen 4x12|Cái",
    "VITKHUNGBAO|Vít khung bao|Cái",
    "VITLG|Vít lục giác|Cái",
    "VITXOAN7x50|Vít xoắn 7x50|Con",
    "VONGNHUA|Vòng nhựa bạc đạn 23cm|Cái",
    "xbond|Keo dán X'bond|Ống",
  ].map((el) => {
    const [code, name, unit] = el.split('|');
    return {
      name: name.trim(),
      productCode: code.trim(),
      unit: unit.trim(),
    };
  });

  await addProducts(clientCode, productData)

  const debug = false;
  if (debug) {
    return;
  }

  await addDepartments(clientCode, [

    {
      name: 'Quản lý',
      code: 'manager',
      metadata: {},
    },
    {
      name: 'Kinh doanh',
      code: 'sales',
      metadata: {},
    },
    {
      name: 'Kho',
      code: 'warehouse',
      metadata: {},
    },
    {
      name: 'Kế Toán',
      code: 'accounting',
      metadata: {},
    },
    {
      name: 'Giao hàng',
      code: 'delivery',
      metadata: {},
    },
  ]);

  await clearCache();

  await getDepartments(clientCode);
  await addPositions(clientCode, [
    {
      title: 'Giám Đốc',
      code: 'director',
      departmentCode: 'manager',
    },
    {
      title: 'Phó Giám Đốc',
      code: 'vice-director',
      departmentCode: 'manager',
    },
  ]);

  await clearCache();
  await getDepartments(clientCode);
  await getPositions(clientCode);
  await clearCache();
  await addEmployees(
    clientCode,
    [
      {
        name: 'Lê Duy Tân',
        userId: data.rootUserIds[clientCode],
        departmentCode: 'manager',
        positionCode: 'director',
        metadata: {
          displayOrder: 1,
        },
      },
      {
        name: 'Nguyễn Ngọc Tùng',
        positionCode: 'vice-director',
        departmentCode: 'manager',
        metadata: {
          displayOrder: 2,
        },
      },
      {name: 'Trần Thị Loan', departmentCode: 'sales'},
      {name: 'Trần Thị Oanh', departmentCode: 'sales'},
      {name: 'Trương Thị Thanh Thủy', departmentCode: 'sales'},
      {name: 'Nguyễn Tấn Lợi', departmentCode: 'warehouse'},
      {name: 'Cao Hùng', departmentCode: 'warehouse'},
      {name: 'Trần Văn Tuấn', departmentCode: 'delivery'},
      {name: 'Phan Thanh Hùng', departmentCode: 'delivery'},
      {name: 'Nguyễn Anh Tuấn', departmentCode: 'delivery'},
      {name: 'Phạm Anh Thư', departmentCode: 'accounting'},
      {name: 'Đặng Thị Tuyết Mai ', departmentCode: 'accounting'},
    ].map(({name, ...el}) => {
      const [lastName, ...firstName] = name.split(' ');
      return {
        ...el,
        lastName,
        firstName: firstName.join(' '),
      };
    }),
  );
}
// Cspell:enable

async function run() {
  await clearCache();
  await fetchClients();
  // await addClients(['ACME']);
  await addClients(['ACME', 'NKTU']);
  await updateForNKTU('ACME');
  await updateForNKTU('NKTU');
}

run();
