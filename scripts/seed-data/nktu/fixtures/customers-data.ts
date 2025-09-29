// cspell:disable

const rawData = [
  {
    "id": "087dfbde-ed94-41f4-8928-5dfbff04378c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TIAN YOU",
    "companyName": "CÔNG TY TNHH TIAN YOU",
    "address": "Lô F-2D-CN, khu công nghiệp Mỹ Phước 2, Phường Bến Cát, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trang ",
      "googleMapsUrl": "https://maps.app.goo.gl/URsauzpyHmXmXQaQ8"
    },
    "createdAt": "2025-09-18T08:24:43.681Z",
    "updatedAt": "2025-09-18T08:24:57.459Z"
  },
  {
    "id": "22b1d136-e39a-4be3-bb83-7eceac7cebe8",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HABICO",
    "companyName": "CÔNG TY TNHH SẢN XUẤT XUẤT NHẬP KHẨU HABICO",
    "contactPhone": "0946287788",
    "address": "42/49 Đường số 5, Phường Bình Hưng Hòa, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Công ",
      "googleMapsUrl": "https://maps.app.goo.gl/qruDt8FMm6PPjdxRA"
    },
    "createdAt": "2025-09-18T08:07:54.389Z",
    "updatedAt": "2025-09-18T08:08:22.247Z"
  },
  {
    "id": "d6527d3f-84e7-4475-bf00-b47e78e15a69",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NĂM HÙNG",
    "companyName": "CÔNG TY TNHH PHỤ KIỆN MỘC NĂM HÙNG",
    "contactPhone": "090 804 57 73",
    "address": "63/52/12/1 Võ Văn Hát, Tổ 3, Khu phố Phước Hiệp, Phường Long Trường, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thúy ",
      "googleMapsUrl": "https://maps.app.goo.gl/SiBKDuYzzQRs8oKp8"
    },
    "createdAt": "2025-09-18T08:06:24.835Z",
    "updatedAt": "2025-09-18T08:06:42.880Z"
  },
  {
    "id": "2b5abbad-ef4d-442f-be59-f71554332dd2",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HỢP TIẾN",
    "companyName": "CÔNG TY TNHH  THƯƠNG MẠI SẢN XUẤT NGŨ KIM HỢP TIẾN",
    "contactPhone": "0866711198",
    "address": "Số 18, khu phố Tân Long, Phường Tân Hiệp, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Hợp Tiến ",
      "googleMapsUrl": "https://maps.app.goo.gl/ZRqmK9VkbYAKwyNf9"
    },
    "createdAt": "2025-09-18T08:04:34.479Z",
    "updatedAt": "2025-09-18T08:04:55.424Z"
  },
  {
    "id": "c3f6d15d-39df-4b4c-a55b-eaa6b11c4d39",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH HẠNH",
    "companyName": "CÔNG TY TNHH MINH HẠNH",
    "address": "Lô B2-36 Đường số 2, KCN Tân Đông Hiệp B, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Vinh ",
      "googleMapsUrl": "https://maps.app.goo.gl/YGyrwuyaJ3b38Yiv8"
    },
    "createdAt": "2025-09-18T08:02:18.699Z",
    "updatedAt": "2025-09-18T08:02:28.070Z"
  },
  {
    "id": "8b06db0f-852a-4082-bd2d-f52b8eeff8b6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SAVIMEX",
    "companyName": "CÔNG TY CỔ PHẦN HỢP TÁC KINH TẾ VÀ XUẤT NHẬP KHẨU SAVIMEX",
    "contactPhone": "0932774968",
    "address": "194 Nguyễn Công Trứ, Phường Bến Thành, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Lộc ",
      "googleMapsUrl": "https://maps.app.goo.gl/7HFeJNzkqBVDbeXDA"
    },
    "createdAt": "2025-09-18T07:56:40.073Z",
    "updatedAt": "2025-09-18T08:01:23.402Z"
  },
  {
    "id": "48b775f6-1d9b-4323-9045-8e60eac27f01",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VẠN THỊNH PHÁT",
    "companyName": "CÔNG TY TNHH NỘI THẤT VẠN THỊNH PHÁT",
    "address": "tổ 13, ấp ông Hường, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/4CZ7pdc4zzvJshK18"
    },
    "createdAt": "2025-09-18T07:52:22.892Z",
    "updatedAt": "2025-09-18T07:52:22.892Z"
  },
  {
    "id": "263af847-a0e1-44cf-9449-4b3f4b539d0e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH THÀNH",
    "companyName": "CÔNG TY TNHH MINH THÀNH",
    "address": "Số 20A, đường Đồng Khởi, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/pyWDgoSmSaxW5MhJ7"
    },
    "createdAt": "2025-09-18T07:48:47.134Z",
    "updatedAt": "2025-09-18T07:48:47.134Z"
  },
  {
    "id": "ada36488-7bd5-4da5-81c0-a94f8e9002ea",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HỢP TÁC XÃ VĨNH THÀNH",
    "companyName": "HỢP TÁC XÃ VĨNH THÀNH",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/4CZ7pdc4zzvJshK18"
    },
    "createdAt": "2025-09-18T07:47:58.099Z",
    "updatedAt": "2025-09-18T07:47:58.099Z"
  },
  {
    "id": "4ea35acd-9b6d-43c3-bc6f-c9dfeb9dc5a6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGUYỄN LONG",
    "companyName": "CHI NHÁNH - CÔNG TY TNHH NỘI THẤT NGUYỄN LONG",
    "contactPhone": "0961792866",
    "address": "Số 115, đường Tân An, Khu phố Tân An, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Huệ ",
      "googleMapsUrl": "https://maps.app.goo.gl/DQYVZYj9yRdiW2Rk6"
    },
    "createdAt": "2025-09-18T07:27:17.727Z",
    "updatedAt": "2025-09-18T07:27:41.532Z"
  },
  {
    "id": "cb0b3e7d-de40-463b-acf1-0cc68114bdc5",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KIẾN AN ",
    "companyName": "CÔNG TY TNHH MTV KIẾN AN ",
    "contactPhone": "0902330419",
    "address": "4/142, Khu phố Hòa Lân 1, Phường Thuận Giao, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Tú",
      "googleMapsUrl": "https://maps.app.goo.gl/KL9Rd3enobXhGPWm7"
    },
    "createdAt": "2025-09-18T06:30:48.460Z",
    "updatedAt": "2025-09-18T06:31:05.361Z"
  },
  {
    "id": "77599077-520e-4df2-96cc-cf2911c0e4f9",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ANH TUẤN",
    "companyName": "ANH TUẤN",
    "contactPhone": "0984588935",
    "isActive": true,
    "metadata": {
      "pic": "Anh Tuấn",
      "googleMapsUrl": "https://maps.app.goo.gl/kX3QM4sZ9Dk4SpD1A"
    },
    "createdAt": "2025-09-18T06:28:17.454Z",
    "updatedAt": "2025-09-18T06:28:48.906Z"
  },
  {
    "id": "d0369fdc-e045-427f-9d54-1e9e5577cb53",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGUYỄN HOÀNG HẢI",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI NGUYỄN HOÀNG HẢI",
    "contactPhone": "0933232096",
    "address": "71 Sông Lu, Tổ 1, Ấp 5, Xã Bình Mỹ, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Kiều",
      "googleMapsUrl": "https://maps.app.goo.gl/bqFU1vd2guwuZiAL9"
    },
    "createdAt": "2025-09-18T06:25:08.129Z",
    "updatedAt": "2025-09-18T06:25:29.170Z"
  },
  {
    "id": "99aff71d-9e15-4098-81bc-bc5a70d74f0a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DƯƠNG NAM HẢI",
    "companyName": "DƯƠNG NAM HẢI",
    "contactPhone": "0904153409",
    "isActive": true,
    "metadata": {
      "pic": "Anh Hải",
      "googleMapsUrl": "https://maps.app.goo.gl/YHAAndivKhmfv8Lv9"
    },
    "createdAt": "2025-09-18T06:23:57.340Z",
    "updatedAt": "2025-09-18T06:24:20.184Z"
  },
  {
    "id": "a5263d6e-f4dd-4d4e-8066-6683bbfa4998",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ THÀNH NGHĨA",
    "companyName": "CÔNG TY TNHH GỖ THÀNH NGHĨA",
    "contactPhone": "0325758740",
    "address": "Ô 18.2, Lô B18, Đường D5, Khu A, KCN Đất Cuốc, Xã Bắc Tân Uyên, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hòa",
      "googleMapsUrl": "https://maps.app.goo.gl/PBwZ1osjuLUnZZ84A"
    },
    "createdAt": "2025-09-18T04:49:26.624Z",
    "updatedAt": "2025-09-18T04:49:45.691Z"
  },
  {
    "id": "e10cb2de-37fe-446c-bcb3-151e56327d69",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NHẤT GỖ",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN NHẤT GỖ",
    "contactPhone": "0349791146",
    "address": "Lô 18, đường số 5, Khu công nghiệp Giang Điền, Xã Trảng Bom, Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Tuyến",
      "googleMapsUrl": "https://maps.app.goo.gl/31VdWL7ta9L3j9EXA"
    },
    "createdAt": "2025-09-18T04:47:35.316Z",
    "updatedAt": "2025-09-18T04:47:53.661Z"
  },
  {
    "id": "77af5115-33c7-4566-b109-46386d273c5c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SHINO HOSPITALITY",
    "companyName": "CÔNG TY TNHH NỘI THẤT SHINO HOSPITALITY",
    "contactPhone": "0364791865",
    "address": "Lô H11, H12, đường N3, khu công nghiệp Nam Tân Uyên mở rộng, Phường Bình Cơ, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chi Tươi",
      "googleMapsUrl": "https://maps.app.goo.gl/xx8vSATb4RQrPWAH9"
    },
    "createdAt": "2025-09-18T04:44:41.636Z",
    "updatedAt": "2025-09-18T04:45:07.385Z"
  },
  {
    "id": "faf204cd-fbe1-44db-ad5c-cf93893d2f4f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐẠI VIỆT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT TẬP ĐOÀN ĐẠI VIỆT",
    "address": "Lô F1 Đường số 10, CCN Hải Sơn, Xã Mỹ Hạnh, Tây Ninh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Diễm (0365499682) / Anh Thuyền (0938898178) ",
      "googleMapsUrl": "https://maps.app.goo.gl/mGbbqDSErnG2g5uU9 / https://maps.app.goo.gl/uRfVkQVqy6CYBBrZ8"
    },
    "createdAt": "2025-09-18T04:42:49.173Z",
    "updatedAt": "2025-09-18T04:43:36.252Z"
  },
  {
    "id": "b7d5a604-0f2d-4501-bc99-ce40d0a5ff6d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SHINSUNG",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI SHINSUNG",
    "contactPhone": "0901-345-897",
    "address": "336/4  - 336 /6 đường Hồ Văng Tắng, Ấp 6, Xã Phú Hòa Đông, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hương ",
      "googleMapsUrl": "https://maps.app.goo.gl/iGPP3mnPppcEiXnm7"
    },
    "createdAt": "2025-09-18T04:38:58.452Z",
    "updatedAt": "2025-09-18T04:39:09.310Z"
  },
  {
    "id": "7d3e99a1-5a09-400e-a2dd-bf9af701255f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TLD",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI VÀ CÔNG NGHỆ KỸ THUẬT TLD VIỆT NAM",
    "isActive": true,
    "metadata": {
      "pic": "Xe tải lấy "
    },
    "createdAt": "2025-09-17T09:57:47.750Z",
    "updatedAt": "2025-09-17T09:57:58.092Z"
  },
  {
    "id": "b34461f2-62b3-4614-9a0c-91baf1bb6e24",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TIẾN TRIỂN",
    "companyName": "CÔNG TY TNHH TIẾN TRIỂN VIỆT NAM",
    "contactPhone": "0976-375-211",
    "address": "Thửa đất số 1952, tờ bản đồ số 18, khu phố Ông Đông, Phường Tân Hiệp, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Mai ",
      "googleMapsUrl": "https://maps.app.goo.gl/pKWAqLRFCcDzP71SA"
    },
    "createdAt": "2025-09-17T09:55:20.260Z",
    "updatedAt": "2025-09-17T09:55:31.404Z"
  },
  {
    "id": "ad5465f9-98b5-4b0e-b943-4333c0c12f60",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ROBOWIND",
    "companyName": "CÔNG TY TNHH TỰ ĐỘNG HÓA ROBOWIND",
    "contactPhone": "0903299911",
    "address": "60/10M Nguyễn Văn Quá, phường Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/pHBbmgtaQovoSfmk9"
    },
    "createdAt": "2025-09-17T09:51:52.328Z",
    "updatedAt": "2025-09-17T09:51:52.328Z"
  },
  {
    "id": "32e97ed0-2df0-4047-a78d-ff11b0b03aaa",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LINEN SÀI GÒN",
    "companyName": "CÔNG TY TNHH LINEN SÀI GÒN",
    "contactPhone": "0907653884",
    "address": "Số 160/62 Vườn Lài, Phường Tân Thành, Quận Tân phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/S9uDn1YcwA1GpU4K9"
    },
    "createdAt": "2025-09-17T09:51:01.771Z",
    "updatedAt": "2025-09-17T09:51:01.771Z"
  },
  {
    "id": "4727278a-96f3-43a6-ab15-ae82f62c46a6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LÂM HIỆP HƯNG",
    "companyName": "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ VÀ SẢN XUẤT LÂM HIỆP HƯNG",
    "contactPhone": "0385009965",
    "address": "Số 1/265, Khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": " https://maps.app.goo.gl/sg8a5DcFeTNax4Nk9"
    },
    "createdAt": "2025-09-17T09:50:08.758Z",
    "updatedAt": "2025-09-17T09:50:08.758Z"
  },
  {
    "id": "a2dd713d-05ce-49be-8434-7beb95500b03",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KREATIV",
    "companyName": "CÔNG TY CỔ PHẦN KREATIV FURNITURE",
    "contactPhone": "0909-706-535",
    "address": "Thửa đất số 850, Tờ bản đồ 40, Đường Khánh Bình 66, Khu phố, Phường Khánh Bình, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Loan",
      "googleMapsUrl": "https://maps.app.goo.gl/modGVPaXg5HWPLYu9"
    },
    "createdAt": "2025-09-17T09:48:32.338Z",
    "updatedAt": "2025-09-17T09:48:40.437Z"
  },
  {
    "id": "aa86a082-6c7b-4417-a40e-9fd9a3367618",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐƠN GIẢN LÀ ĐẸP",
    "companyName": "CÔNG TY TNHH TRANG TRÍ NỘI THẤT ĐƠN GIẢN LÀ ĐẸP",
    "contactPhone": "0373-214-598",
    "address": "16/14D Ấp Trung Đông, Xã Đông Thạnh, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trúc ",
      "googleMapsUrl": "https://maps.app.goo.gl/3aHzH7ahoRToHagVA"
    },
    "createdAt": "2025-09-17T09:47:52.352Z",
    "updatedAt": "2025-09-17T09:48:00.627Z"
  },
  {
    "id": "4954e9d3-d098-4d22-8866-d3ef84e8aeb0",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LGP (LÊ GIA PHÁT)",
    "companyName": "CÔNG TY TNHH LGP BLACKSMITH AND DESIGN",
    "contactPhone": "0971-360-646",
    "address": "Số 51/37 đường Châu Thới, khu phố Châu Thới, Phường Bình An, Thành phố Dĩ An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Hiệp",
      "googleMapsUrl": "https://maps.app.goo.gl/BAKogAzigQuQL6dM8"
    },
    "createdAt": "2025-09-17T09:47:41.891Z",
    "updatedAt": "2025-09-17T09:47:47.317Z"
  },
  {
    "id": "a319fc0f-8be1-4b93-9052-4c1f6cc319be",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐẠI THẮNG LỢI",
    "companyName": "CÔNG TY TNHH GỖ ĐẠI THẮNG LỢI",
    "contactPhone": "0976-129-298",
    "address": "Thửa đất số 59, tờ bản đồ số 16, Khu phố 1, Phường Hội Nghĩa, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Ngọc (0343855328) / Anh Cường",
      "googleMapsUrl": "https://maps.app.goo.gl/J8BVAbPTTjtzyob89"
    },
    "createdAt": "2025-09-17T09:30:25.946Z",
    "updatedAt": "2025-09-17T09:31:25.078Z"
  },
  {
    "id": "54bf977d-2d62-45b2-95bb-b1033c157bc3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KIM THÀNH PHÚ",
    "companyName": "CÔNG TY TNHH SẢN XUẤT KIM THÀNH PHÚ",
    "contactPhone": "0931-116-322",
    "address": "Thửa đất số 962-968, Tờ bản đồ số 45, đường Khánh Bình 72, k, Phường Khánh Bình, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Lan",
      "googleMapsUrl": "https://maps.app.goo.gl/jZkS92FmsS5U7ezH8 "
    },
    "createdAt": "2025-09-17T09:28:42.869Z",
    "updatedAt": "2025-09-17T09:28:49.688Z"
  },
  {
    "id": "6b560511-6dfc-499a-aa74-349f74def10e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "YUE FENG",
    "companyName": "CÔNG TY TNHH XUẤT NHẬP KHẨU NỘI THẤT YUE FENG",
    "address": "Số 39/1, đường Tân Phước Khánh 16, khu phố Khánh Hội, Phường Tân Khánh, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": " Anh Thái (0969101031) / Chị Vân (0976720502) ",
      "googleMapsUrl": "https://maps.app.goo.gl/x16VyQFXrQvX1TmP7"
    },
    "createdAt": "2025-09-17T09:16:11.838Z",
    "updatedAt": "2025-09-17T09:18:19.784Z"
  },
  {
    "id": "ab3fb43c-677f-4568-9cb0-7d337bbca9ec",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGHĨA PHÁT",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN ĐỒ GỖ NGHĨA PHÁT",
    "isActive": true,
    "metadata": {
      "pic": "Chành xe Bình Định ",
      "googleMapsUrl": "https://maps.app.goo.gl/buBswg1kohk5q2627"
    },
    "createdAt": "2025-09-17T09:13:55.775Z",
    "updatedAt": "2025-09-17T09:14:11.920Z"
  },
  {
    "id": "8210a1dc-ef8b-45eb-b2fb-36e33e6736c9",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ROEDERS",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN ROEDERS VIỆT NAM",
    "contactPhone": "0988-211-803",
    "address": "Lô E10-2 và Lô E11-1, đường N7B, khu công nghiệp Lê Minh Xuân 3, Xã Bình Lợi, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thị ",
      "googleMapsUrl": "https://maps.app.goo.gl/5umY3D86b9d1SwQv5 "
    },
    "createdAt": "2025-09-17T09:09:49.877Z",
    "updatedAt": "2025-09-17T09:10:12.201Z"
  },
  {
    "id": "6c2fbb4b-78ea-4dda-abdc-13d677ba9fe9",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KHANG HƯNG ĐẠT",
    "companyName": "CÔNG TY TNHH KHANG HƯNG ĐẠT",
    "contactPhone": "0964-592-472",
    "address": "tổ 2A, khu phố Long Đức 3, Phường Tam Phước, Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hòa / Anh Ngọ ( 0977580019 ) ",
      "googleMapsUrl": "\"https://maps.app.goo.gl/Yv6SeEsoVN6RHw1DA  / https://maps.app.goo.gl/y4S7ink8vvMNYC7z7 "
    },
    "createdAt": "2025-09-17T08:59:55.052Z",
    "updatedAt": "2025-09-17T09:02:18.826Z"
  },
  {
    "id": "8e0e49e9-cc01-43de-907f-70a6f6a01941",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHẠM GIA",
    "companyName": "CÔNG TY TNHH KIẾN TRÚC VÀ ĐẦU TƯ XÂY DỰNG PHẠM GIA",
    "address": "Số 680 Trương Công Định, Phường Tam Thắng, TP Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chành xe Vũng Tàu "
    },
    "createdAt": "2025-09-17T08:50:02.071Z",
    "updatedAt": "2025-09-17T08:56:30.174Z"
  },
  {
    "id": "5372e2cf-3b38-4b52-8576-9d6f9b91c3ba",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HÒA BÌNH ",
    "companyName": "CÔNG TY TNHH HÒA BÌNH ",
    "contactPhone": "0933-391-934",
    "address": "KP 8, Phường Long Bình, Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thu ",
      "googleMapsUrl": "https://maps.app.goo.gl/mhwAwN95EwngA8GWA"
    },
    "createdAt": "2025-09-17T08:27:33.264Z",
    "updatedAt": "2025-09-17T09:10:33.813Z"
  },
  {
    "id": "07a3d7ad-8e29-4ee0-adf4-a81e8f527db1",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGHIỆP PHÚ",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI NGHIỆP PHÚ",
    "contactPhone": "0343-626-032",
    "address": "hửa đất số 347 tờ bản đồ số 41, đường DH 409, Phường Vĩnh Tân, TP Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Huyền",
      "googleMapsUrl": "https://maps.app.goo.gl/SQmmzjURsP7JpjPL7"
    },
    "createdAt": "2025-09-17T03:53:21.340Z",
    "updatedAt": "2025-09-17T04:03:15.328Z"
  },
  {
    "id": "296040e5-c571-4a31-a5db-8047bfede833",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "XUXI HOME (NHẤT THIÊN NAM)",
    "companyName": "NHẤT THIÊN NAM",
    "contactPhone": "0907-561-561",
    "address": "2/3 Nguyễn Văn Quá, Khu Phố 5, Phường Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "A Quấy",
      "googleMapsUrl": "https://goo.gl/maps/Rv3iHtpNHCaDDSLn9"
    },
    "createdAt": "2025-09-17T03:52:17.966Z",
    "updatedAt": "2025-09-17T03:58:07.432Z"
  },
  {
    "id": "27c8aa95-4964-4e3f-baa3-d6c17a8fd2eb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SƠN MÀI THU HƯƠNG",
    "companyName": "SƠN MÀI THU HƯƠNG",
    "contactPhone": "0356-433-734",
    "address": "Phường Tương Bình Hiệp, Thủ Dầu Một, Bình Dương",
    "isActive": true,
    "metadata": {
      "pic": "Anh Dũng",
      "googleMapsUrl": "https://maps.app.goo.gl/4xE8iLf2knzWwzkf7"
    },
    "createdAt": "2025-09-17T03:52:17.964Z",
    "updatedAt": "2025-09-17T03:54:50.369Z"
  },
  {
    "id": "750cf10f-1b6f-4626-9914-b51f031c0fef",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HƯNG GIA PHÁT",
    "companyName": "CÔNG TY TNHH TM SX XNK HƯNG GIA PHÁT",
    "contactPhone": "0974-557-895",
    "address": "Thửa đất số 65, 80, Tờ bản đồ số 67, Ấp Bình Cơ, Phường Bình Cơ, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Mai",
      "googleMapsUrl": "https://maps.app.goo.gl/7XnXXWMtaT8mp1U16"
    },
    "createdAt": "2025-09-17T03:52:17.962Z",
    "updatedAt": "2025-09-17T03:55:05.813Z"
  },
  {
    "id": "21e59104-c360-4076-9b9c-81259dd4f6a6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "AN PHÁT CƯỜNG",
    "companyName": "CÔNG TY CỔ PHẦN AN PHÁT CƯỜNG",
    "contactPhone": "0933-970-040",
    "address": "Số 30/7 Trương Văn Vĩnh, Khu phố Tân Hiệp, Phường Tân Đông Hiệp, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hồng",
      "googleMapsUrl": "https://maps.app.goo.gl/G32VWgnkr6QeNXTV7"
    },
    "createdAt": "2025-09-17T03:52:17.961Z",
    "updatedAt": "2025-09-17T03:55:12.830Z"
  },
  {
    "id": "3274e620-9a4c-4d3b-88c8-cc69a017f3fc",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CĂN VIỄN",
    "companyName": "CÔNG TY TNHH CĂN VIỄN",
    "contactPhone": "0375-627-447",
    "address": "Thửa đất số 318, Tờ bản đồ số 22, Khu phố Ông Đông, Phường Tân Hiệp, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Vy",
      "googleMapsUrl": "https://maps.app.goo.gl/D5hFVnmW3qWvwuNU8"
    },
    "createdAt": "2025-09-17T03:52:17.959Z",
    "updatedAt": "2025-09-17T03:55:18.446Z"
  },
  {
    "id": "ed0faa39-90c3-4984-8bd1-bcadd83134be",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "FULL IN",
    "companyName": "CÔNG TY TNHH CÔNG NGHIỆP FULL IN VIỆT NAM",
    "contactPhone": "0785-823-984",
    "address": "Số 47 đường số 2, Khu công nghiệp Đồng An, Phường Bình Hòa, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Đạt",
      "googleMapsUrl": "https://maps.app.goo.gl/5wqjXZs4cCjqYove9"
    },
    "createdAt": "2025-09-17T03:52:17.956Z",
    "updatedAt": "2025-09-17T03:55:26.913Z"
  },
  {
    "id": "5357047c-0cd3-4c39-a9e9-67282a0e76f1",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOÀNG MỘC THIÊN",
    "companyName": "CÔNG TY TNHH HOÀNG MỘC THIÊN",
    "contactPhone": "0938-301-224",
    "address": "Số 17, Phan Bội Châu, Khu 6, Phường Thủ Dầu Một, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Hoàng",
      "googleMapsUrl": "https://maps.app.goo.gl/vSUCFcE1uwguhmwGA"
    },
    "createdAt": "2025-09-17T03:52:17.955Z",
    "updatedAt": "2025-09-17T03:55:36.036Z"
  },
  {
    "id": "ce4c2b3b-022f-4455-ba1a-e4d2b6af4617",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TALENTO HOUSE",
    "companyName": "CÔNG TY CỔ PHẦN TALENTO HOUSE VIỆT NAM",
    "contactPhone": "0938-013-024",
    "address": "Nhà xưởng A-17A-3-A,B,C,D, Lô A-17A, Đường NX3, Khu công nghiệp Bàu Bàng, Xã Bàu Bàng, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Tiên",
      "googleMapsUrl": "https://maps.app.goo.gl/J4LF328H3aLpyap26"
    },
    "createdAt": "2025-09-17T03:52:17.953Z",
    "updatedAt": "2025-09-17T03:55:47.141Z"
  },
  {
    "id": "887aee61-468c-4d36-bb5c-9af48fc9101b",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KHANG VY",
    "companyName": "CÔNG TY TNHH NỘI THẤT KHANG VY",
    "contactPhone": "0985-334-607",
    "address": "Đường 10A, Khu Công Nghiệp Hố Nai, Phường Hố Nai, Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Giang",
      "googleMapsUrl": "https://goo.gl/maps/zcYRhoRkogcnPHu86"
    },
    "createdAt": "2025-09-17T03:52:17.951Z",
    "updatedAt": "2025-09-17T04:28:29.036Z"
  },
  {
    "id": "96a814ed-53e9-408a-a47b-05ef5fc7457e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MAPLE",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI ĐỒ GỖ MAPLE",
    "contactPhone": "0386-877-625",
    "address": "Lô số 19, Đường D04, KCN Châu Đức, Thôn Quảng Tây, Xã Nghĩa Thành, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hiền",
      "googleMapsUrl": "https://maps.app.goo.gl/jJFPtKmQLTriF12JA"
    },
    "createdAt": "2025-09-17T03:52:17.949Z",
    "updatedAt": "2025-09-17T04:28:21.642Z"
  },
  {
    "id": "c8f2d4ad-1b4b-49a8-9c96-babec0becc53",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOÀNG VINH PHÁT",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN NỘI THẤT HOÀNG VINH PHÁT",
    "contactPhone": "0966-003-716",
    "address": "Thửa đất số 676, tờ bản đồ số  DC1_2, khu phố Bình Phú, Phường Thuận Giao, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Loan",
      "googleMapsUrl": "https://maps.app.goo.gl/21stX8jJRiZ25gHA6"
    },
    "createdAt": "2025-09-17T03:52:17.947Z",
    "updatedAt": "2025-09-18T02:49:27.265Z"
  },
  {
    "id": "5249e06c-d216-4ad0-95a3-cca1b489bc62",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐẠI HẢI",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI VÀ KỸ NGHỆ ĐẠI HẢI",
    "contactPhone": "0964-083-489",
    "address": "Thửa đất 539, Tờ bản đồ 13, Khu phố Tân Hoá, Phường Tân Khánh, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Mai",
      "googleMapsUrl": "https://maps.app.goo.gl/Qsjf5nPbaeVs4K5A6"
    },
    "createdAt": "2025-09-17T03:52:17.946Z",
    "updatedAt": "2025-09-18T02:50:39.176Z"
  },
  {
    "id": "788e44e7-c081-4e4d-8441-e2d7de233488",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOÀNG SƠN",
    "companyName": "CÔNG TY TNHH  SẢN XUẤT - THƯƠNG MẠI HOÀNG SƠN.",
    "contactPhone": "0985-074-316",
    "address": "Số 80 Đường Nguyễn Thị Minh Khai, Khu phố Tân Long, Phường Dĩ An, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nga",
      "googleMapsUrl": "https://maps.app.goo.gl/kAF2DYZYDsJ4ZKHu7"
    },
    "createdAt": "2025-09-17T03:52:17.944Z",
    "updatedAt": "2025-09-18T02:50:14.658Z"
  },
  {
    "id": "133cb7f6-63a1-4efc-956a-593fac22b717",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐẠI THUẬN",
    "companyName": "CÔNG TY TNHH FURNITURE ĐẠI THUẬN",
    "contactPhone": "0396-984-674",
    "address": "12 đường 27A, Khu phố 6, Phường Phước Long, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hồng",
      "googleMapsUrl": "https://maps.app.goo.gl/aiqRvaEQVAdXzTuC7"
    },
    "createdAt": "2025-09-17T03:52:17.943Z",
    "updatedAt": "2025-09-18T02:49:43.864Z"
  },
  {
    "id": "6ba76443-360a-429b-bf1a-ebae3655ecc4",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CHẾ BIẾN GỖ ĐÔNG HOÀ",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN CHẾ BIẾN GỖ ĐÔNG HÒA",
    "contactPhone": "0937-400-366",
    "address": "Số 502A Đường Lý Thường Kiệt, Khu phố Thống Nhất 1, Phường Dĩ An, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Toàn",
      "googleMapsUrl": "https://maps.app.goo.gl/DuU4peYopxpCUAsF6"
    },
    "createdAt": "2025-09-17T03:52:17.941Z",
    "updatedAt": "2025-09-18T02:49:50.872Z"
  },
  {
    "id": "029573f8-f55c-4e9c-9ece-1c361c814528",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "XÂY DỰNG GỖ ĐÔNG HOÀ",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN XÂY DỰNG - GỖ ĐÔNG HÒA",
    "contactPhone": "0394-855-272",
    "address": "Số 27/5, Khu phố Đông A, Phường Đông Hòa, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hường",
      "googleMapsUrl": "https://maps.app.goo.gl/NxUpJRfifnEk48vQ8"
    },
    "createdAt": "2025-09-17T03:52:17.940Z",
    "updatedAt": "2025-09-18T02:49:57.722Z"
  },
  {
    "id": "c58e9cd9-aeda-4761-9a75-c86e40353053",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "J FURNITURE",
    "companyName": "CÔNG TY TNHH J FURNITURE",
    "contactPhone": "0909-990-722",
    "address": "173 Long Thuận, Phường Long Phước, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trinh",
      "googleMapsUrl": "https://maps.app.goo.gl/4aSYbLiyQAAdB2B59"
    },
    "createdAt": "2025-09-17T03:52:17.938Z",
    "updatedAt": "2025-09-18T02:50:53.100Z"
  },
  {
    "id": "5b1ace51-9e52-4f1a-b341-08477ad8c8ca",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐÔNG PHƯƠNG (BÌNH DƯƠNG)",
    "companyName": "CÔNG TY TNHH MỸ NGHỆ ĐÔNG PHƯƠNG",
    "contactPhone": "0908-824-924",
    "isActive": true,
    "metadata": {
      "pic": "Anh Cảnh",
      "googleMapsUrl": "https://maps.app.goo.gl/9FgD9PDwFkcHQHsP9"
    },
    "createdAt": "2025-09-17T03:52:17.935Z",
    "updatedAt": "2025-09-18T02:51:18.824Z"
  },
  {
    "id": "b813150e-44f7-4621-b00e-25bcce98fd88",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐỨC LỢI 2 (XA)",
    "companyName": "CÔNG TY TNHH ĐỨC LỢI 2",
    "contactPhone": "0366-773-399",
    "address": "Số 47/4, Khu phố Bình Phước B, Phường Bình Chuẩn, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Dương",
      "googleMapsUrl": "https://maps.app.goo.gl/jhCaEV4fWHBEooB38"
    },
    "createdAt": "2025-09-17T03:52:17.934Z",
    "updatedAt": "2025-09-18T02:51:26.377Z"
  },
  {
    "id": "eb52cf44-a82b-4754-9d81-92b2315939db",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐỨC LỢI (GẦN)",
    "companyName": "CÔNG TY TNHH ĐỨC LỢI",
    "contactPhone": "0981-201-268",
    "address": "9B/11 khu phố Nội Hoá 2, Phường Đông Hòa, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nga",
      "googleMapsUrl": "https://maps.app.goo.gl/ZDoffXqFuMyUxga79"
    },
    "createdAt": "2025-09-17T03:52:17.932Z",
    "updatedAt": "2025-09-18T02:51:33.617Z"
  },
  {
    "id": "855756ea-eae9-46f7-bd96-1a3480139120",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VNET",
    "companyName": "CÔNG TY TNHH VNET MANUFACTURING",
    "contactPhone": "0978-512-631",
    "address": "Thửa đất số 10, tờ bản đồ số 44, Khu phố An Thành, Phường An Tây, Thành phố Bến Cát, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thuỳ",
      "googleMapsUrl": "https://maps.app.goo.gl/y9o2ug5WxrKwNWjK9?g_st=ic"
    },
    "createdAt": "2025-09-17T03:52:17.927Z",
    "updatedAt": "2025-09-18T02:51:51.784Z"
  },
  {
    "id": "5438021a-5388-4a23-9c02-fbc7ff68ff7c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TINH MỘC",
    "companyName": "CÔNG TY CP KIẾN TRÚC NỘI THẤT TINH MỘC",
    "contactPhone": "Gửi Chành Trọng Tấn",
    "address": "9/7/15 Võ Trường Toản, Phường Cái Khế, Thành phố Cần Thơ, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "gửi chành Trọng Tấn"
    },
    "createdAt": "2025-09-17T03:52:17.926Z",
    "updatedAt": "2025-09-18T02:52:43.744Z"
  },
  {
    "id": "71bdca18-aad4-42bc-864e-9b43a4a7a161",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH NGỌC",
    "companyName": "CÔNG TY TNHH MINH NGỌC FURNITURE",
    "contactPhone": "0989-917-781",
    "address": "39/8 Trịnh Hoài Đức, Phường Tăng Nhơn Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Phương",
      "googleMapsUrl": "https://maps.app.goo.gl/fbpeUNzvE64q6A1N9"
    },
    "createdAt": "2025-09-17T03:52:17.924Z",
    "updatedAt": "2025-09-18T02:52:51.507Z"
  },
  {
    "id": "7f0beb1b-20e2-48ac-b271-b6036c4ced0d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ÍCH HUY",
    "companyName": "CÔNG TY TNHH NGŨ KIM XÂY DỰNG ÍCH HUY",
    "contactPhone": "0898517089",
    "address": "Số 55 Nguyễn Huỳnh Đức, Phường Khánh Hậu, Thành phố Tân An, Tỉnh Long An, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/PF3yUGG6cq9FeE9h8"
    },
    "createdAt": "2025-09-17T03:52:17.922Z",
    "updatedAt": "2025-09-17T03:52:17.922Z"
  },
  {
    "id": "2755cbe2-f582-4ef5-8601-95e070da17f2",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGUYÊN KHÔI",
    "companyName": "NỘI THẤT NGUYÊN KHÔI",
    "contactPhone": "0335351623",
    "address": "46 Trần Văn Trà, Khu Văn Hải, T. Long Thành, Đồng Nai",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/hR3sHDCnGXyPTbFi8"
    },
    "createdAt": "2025-09-17T03:52:17.921Z",
    "updatedAt": "2025-09-17T03:52:17.921Z"
  },
  {
    "id": "c4fb8b52-bbd2-45ec-8b54-73c4bf808282",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGỌC LÂM PHƯỚC TÂN",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN NGỌC LÂM PHƯỚC TÂN",
    "contactPhone": "0332692469",
    "address": "Tổ 9, Khu phố Tân Cang, Phường Phước Tân, Tỉnh Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/Z1j6C1b1PfNCidWr8"
    },
    "createdAt": "2025-09-17T03:52:17.919Z",
    "updatedAt": "2025-09-17T03:52:17.919Z"
  },
  {
    "id": "3de35789-ebe2-4f87-9332-c7a6e1728636",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SAO BIỂN",
    "companyName": "CÔNG TY TNHH NỘI THẤT SAO BIỂN",
    "contactPhone": "0909227076",
    "address": "1787/7 đường Nguyễn Duy Trinh, Phường Long Phước, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/VEQXpX9r9hNV6UZZ9"
    },
    "createdAt": "2025-09-17T03:52:17.917Z",
    "updatedAt": "2025-09-17T03:52:17.917Z"
  },
  {
    "id": "f1ec8964-8e1e-4399-b579-5b2cf8ff231d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HUY PHÁT",
    "companyName": "CÔNG TY TNHH GỖ HUY PHÁT",
    "contactPhone": "0857251103",
    "address": "Số 61, đường số 4, khu trung tâm hành chính, khu phố Nhị Đồng, Phường Dĩ An, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/A7CujgvvJW9Cruay7"
    },
    "createdAt": "2025-09-17T03:52:17.915Z",
    "updatedAt": "2025-09-17T03:52:17.915Z"
  },
  {
    "id": "227add9e-d9db-4f53-b049-6e5c37d5cbe5",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ANH ĐẠT BÌNH CHÁNH",
    "companyName": "ANH ĐẠT BÌNH CHÁNH",
    "contactPhone": "0338152348",
    "address": "Vĩnh Lộc B, Bình Chánh, TP Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/P8r2AURm24sbUnHg6"
    },
    "createdAt": "2025-09-17T03:52:17.914Z",
    "updatedAt": "2025-09-17T03:52:17.914Z"
  },
  {
    "id": "b1e0950e-f840-4358-a14b-c427703cc39b",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MARVELOUS LAND",
    "companyName": "CÔNG TY TNHH MARVELOUS LAND INT’L VIỆT NAM",
    "contactPhone": "0982560950",
    "address": "KCN Nhơn Trạch I, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/e44LHtaxTqrFRbnT8"
    },
    "createdAt": "2025-09-17T03:52:17.911Z",
    "updatedAt": "2025-09-17T03:52:17.911Z"
  },
  {
    "id": "3831bdc2-e1e4-479b-b414-0340576ff4b8",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ASAI",
    "companyName": "CÔNG TY TNHH ASAI",
    "contactPhone": "0369576195",
    "address": "Lô 38-4, 38-5, Đường D14, KCN Phước Đông, Phường Gia Lộc, Tỉnh Tây Ninh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/nt4nut8Fy3G6ygCL8"
    },
    "createdAt": "2025-09-17T03:52:17.908Z",
    "updatedAt": "2025-09-17T03:52:17.908Z"
  },
  {
    "id": "f3bc19eb-96f5-4527-b3d6-d595e8675f09",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VFM",
    "companyName": "CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI VFM",
    "contactPhone": "0762365734",
    "address": "Số 54/1, KP 2, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/17SUC5PxvTY6EwgU8"
    },
    "createdAt": "2025-09-17T03:52:17.906Z",
    "updatedAt": "2025-09-17T03:52:17.906Z"
  },
  {
    "id": "d00228c5-2654-46cc-935b-cb431f63d8f0",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐI BI",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI ĐI BI",
    "contactPhone": "0976968050",
    "address": "Số 10/244, KP Tân Cang, Phường Phước Tân, Tỉnh Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/kXeejeqBPGfnFdZ19"
    },
    "createdAt": "2025-09-17T03:52:17.904Z",
    "updatedAt": "2025-09-17T03:52:17.904Z"
  },
  {
    "id": "183ad3ce-c297-49b2-8fc3-75fd04742eca",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "FINE SCANDINIVIA",
    "companyName": "CÔNG TY TNHH FINE SCANDINAVIA",
    "contactPhone": "0903115030",
    "address": "Ô 1, Lô A12, đường D2, khu B, Khu công nghiệp Đất Cuốc, Xã Bắc Tân Uyên, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/1jFYkWRtjTtdWiWdA"
    },
    "createdAt": "2025-09-17T03:52:17.903Z",
    "updatedAt": "2025-09-17T03:52:17.903Z"
  },
  {
    "id": "d5f76ab4-5340-4684-afdf-e44f6ad3e978",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOTOSU",
    "companyName": "CÔNG TY TNHH HOTOSU",
    "contactPhone": "0778989768",
    "address": "170 Quốc lộ 1A, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/cUq2KVHRVHqYqmFx8"
    },
    "createdAt": "2025-09-17T03:52:17.900Z",
    "updatedAt": "2025-09-17T03:52:17.900Z"
  },
  {
    "id": "ea84fa20-9774-4f1d-82e2-c948b1c27c75",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VINH THẮNG",
    "companyName": "CÔNG TY TNHH SX VÀ TM XNK VINH THẮNG",
    "contactPhone": "0967073813",
    "address": "Số 196/22, Khu Phố Bình Phước B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://goo.gl/maps/epjnpSydxDRmnmQA6"
    },
    "createdAt": "2025-09-17T03:52:17.899Z",
    "updatedAt": "2025-09-17T03:52:17.899Z"
  },
  {
    "id": "0168c8df-5eb5-46ac-a72e-fb1938aec4cb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚC THẮNG",
    "companyName": "CÔNG TY CỔ PHẦN ĐỒ GỖ PHÚC THẮNG",
    "contactPhone": "Giao kho anh Phước",
    "address": "Số 8, Đường số 22, Khu công nghiệp Sóng Thần 2, Phường Dĩ An, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/MTrcKmXGWKCoWKo17"
    },
    "createdAt": "2025-09-17T03:52:17.897Z",
    "updatedAt": "2025-09-17T03:52:17.897Z"
  },
  {
    "id": "337f65f2-c24a-41ba-bf03-d604c0853e86",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SKS",
    "companyName": "CÔNG TY TNHH SKS FURNITURE",
    "contactPhone": "0368104300",
    "address": "P3-26.01 Tòa Nhà Park 3, Số 720A Đường Điện Biên Phủ, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/q8VUrcQvg5sT74xD7"
    },
    "createdAt": "2025-09-17T03:52:17.895Z",
    "updatedAt": "2025-09-17T03:52:17.895Z"
  },
  {
    "id": "4b2d20ad-2f3b-42f1-934a-a1f4014a8aba",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TƯỜNG AN",
    "companyName": "CÔNG TY TNHH SẢN XUẤT GỖ TƯỜNG AN",
    "contactPhone": "0938928616",
    "address": "Lô H5-1( Khu B1 ), đường D9, KCN Rạch Bắp, Phường Long Nguyên, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/JTyCFwfBeL7N7ePJ8"
    },
    "createdAt": "2025-09-17T03:52:17.893Z",
    "updatedAt": "2025-09-17T03:52:17.893Z"
  },
  {
    "id": "7eb6f0c9-088e-42aa-8a8a-256dc9d41a9d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THIÊN MINH",
    "companyName": "CÔNG TY TNHH SX-TM & XNK THIÊN MINH",
    "contactPhone": "0342452681",
    "address": "Ấp Bàu Sen, Xã Đức Lập, Tỉnh Tây Ninh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/eFr9Kutdi49dXntC9"
    },
    "createdAt": "2025-09-17T03:52:17.889Z",
    "updatedAt": "2025-09-17T03:52:17.889Z"
  },
  {
    "id": "8029fab3-b21d-45ae-8a57-95ca41160784",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BÌNH AN THỊNH (XƯỞNG TIỀN GIANG)",
    "companyName": "CÔNG TY TNHH XUẤT NHẬP KHẨU BÌNH AN THỊNH",
    "contactPhone": "0963411039",
    "address": "Tỉnh lộ 865, Ấp 5, Xã Tân Phước 1, Tỉnh Đồng Tháp, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/TtSk7PBTmsBRV4qQ7"
    },
    "createdAt": "2025-09-17T03:52:17.885Z",
    "updatedAt": "2025-09-17T03:52:17.887Z"
  },
  {
    "id": "3a8b6ed3-6fd9-4a6d-a9a4-c802a7fd29f9",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH XIN",
    "companyName": "CÔNG TY TNHH MINH XIN",
    "contactPhone": "0977999715",
    "address": "Thửa đất số 322, tờ bản đồ số 4, Khu phố Khánh Lộc, Phường Tân Phước Khánh, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/SLHVBq7f6BpeN33M8"
    },
    "createdAt": "2025-09-17T03:52:17.883Z",
    "updatedAt": "2025-09-17T03:52:17.883Z"
  },
  {
    "id": "8680164b-827d-488a-9b95-4ed7814158ce",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THỊNH PHÚ PHÁT II",
    "companyName": "CÔNG TY CỔ PHẦN THỊNH PHÚ PHÁT FURNITURE II",
    "contactPhone": "0937241227",
    "address": "Thửa đất số 12, Tờ bản đồ số 68, Ấp Bình Cơ, Phường Bình Cơ, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/6eSekNEagwT2idEs8"
    },
    "createdAt": "2025-09-17T03:52:17.882Z",
    "updatedAt": "2025-09-17T03:52:17.882Z"
  },
  {
    "id": "1ed2b83d-0fed-484e-b29a-0afc6aeca65a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THỊNH PHÚ PHÁT",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI SẢN XUẤT THỊNH PHÚ PHÁT FURNITURE",
    "address": "Thửa đất 642, Tờ bản đồ số 8, Khu phố Khánh Hội, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/Aum4aoeQhPxyBH9J6"
    },
    "createdAt": "2025-09-17T03:52:17.880Z",
    "updatedAt": "2025-09-17T03:52:17.880Z"
  },
  {
    "id": "5a2090c7-d47f-4f09-ab7e-ddad1cba2a75",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚ THÀNH PHÁT _ XƯỞNG 1",
    "companyName": "CÔNG TY TNHH SẢN XUẤT VÀ XUẤT NHẬP KHẨU PHÚ THÀNH PHÁT",
    "contactPhone": "0907802538",
    "address": "Số 1C/7, Tổ 28, Khu phố 4, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/DLg6fRfcLzUdXduS9"
    },
    "createdAt": "2025-09-17T03:52:17.878Z",
    "updatedAt": "2025-09-17T03:52:17.878Z"
  },
  {
    "id": "46afe6bb-b90d-434f-b679-c47a169cac75",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MỸ KHANG",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI SẢN XUẤT MỸ KHANG",
    "contactPhone": "0382-406-500",
    "address": "393/11 Bình Quới, Phường 28, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Thịnh",
      "googleMapsUrl": "https://maps.app.goo.gl/G8gDAUnUYCfmfCDG7"
    },
    "createdAt": "2025-09-17T03:49:44.966Z",
    "updatedAt": "2025-09-17T03:49:53.184Z"
  },
  {
    "id": "b175d2a8-bd34-4938-a88c-da5efe6a9910",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ZOE",
    "companyName": "CÔNG TY TNHH ZOE FURNITURE",
    "contactPhone": "0939-929-920",
    "address": "602 ấp Bình Tiền 2, Xã Đức Hòa Hạ, Huyện Đức Hoà, Tỉnh Long An, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Phụng",
      "googleMapsUrl": "https://maps.app.goo.gl/SmmqrPad3BFArhSeA"
    },
    "createdAt": "2025-09-17T03:48:18.084Z",
    "updatedAt": "2025-09-17T03:48:24.165Z"
  },
  {
    "id": "3d92da0b-f20a-443f-8fb7-2d0f940bebd7",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HỐ NAI",
    "companyName": "CÔNG TY TNHH HỐ NAI",
    "contactPhone": "0938-023-085",
    "address": "Số 56/8, Điểu Xiển, KP 8, Phường Long Bình, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nguyệt",
      "googleMapsUrl": "https://maps.app.goo.gl/pT6ZM1iBWBihivpt6"
    },
    "createdAt": "2025-09-17T03:20:33.355Z",
    "updatedAt": "2025-09-17T03:20:44.227Z"
  },
  {
    "id": "59a471f4-f5a7-466f-913e-f2a0508c791c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SÁU PHÁT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT & THƯƠNG MẠI SÁU PHÁT",
    "contactPhone": "0384-677-919",
    "address": "37/9B, ấp 7, Xã Xuân Thới Thượng, Huyện Hóc Môn, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Sáu",
      "googleMapsUrl": "https://maps.app.goo.gl/9FUJe7yLPAMSdwQd6"
    },
    "createdAt": "2025-09-17T03:16:50.968Z",
    "updatedAt": "2025-09-17T03:16:57.544Z"
  },
  {
    "id": "77ea1272-1687-4e39-8d77-f87fc0dedbae",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐỨC MINH",
    "companyName": "CÔNG TY TNHH NGŨ KIM ĐỨC MINH",
    "contactPhone": "0358-934-933",
    "address": "Thửa đất số 1265, tờ bản đồ số 16, Khu phố Khánh Long, Phường Tân Phước Khánh, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trang",
      "googleMapsUrl": "https://maps.app.goo.gl/8BYb25VWQvTm2RsJ9"
    },
    "createdAt": "2025-09-17T03:15:30.482Z",
    "updatedAt": "2025-09-17T03:15:35.924Z"
  },
  {
    "id": "eb06d66a-8217-4d9c-a813-2ce704dfc8ec",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐÔNG NGÔ MANUFACTURER",
    "companyName": "CÔNG TY CỔ PHẦN ĐÔNG NGÔ MANUFACTURER",
    "contactPhone": "0355-628-301",
    "address": "218/12 Quốc Lộ 22, ấp Hậu 1, Xã Củ Chi, TP Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Đông Anh",
      "googleMapsUrl": "https://maps.app.goo.gl/spUtsP4mfYfUoCvd7"
    },
    "createdAt": "2025-09-17T03:14:06.396Z",
    "updatedAt": "2025-09-17T03:14:11.776Z"
  },
  {
    "id": "a0cc0468-79b1-4c7c-a1e7-40ee8cbed2b3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ LONG VIỆT",
    "companyName": "CÔNG TY CỔ PHẦN  KỸ NGHỆ GỖ LONG VIỆT",
    "contactPhone": "0902-366-715",
    "address": "Thửa đất số 3012, tờ bản đồ số 7(2TDH.B), Khu phố Chiêu Liêu, Phường Tân Đông Hiệp, Thành phố Dĩ An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Vũ",
      "googleMapsUrl": "https://maps.app.goo.gl/4FfDGv8PaR7ad3hF8"
    },
    "createdAt": "2025-09-17T03:12:49.267Z",
    "updatedAt": "2025-09-17T03:15:07.020Z"
  },
  {
    "id": "0b25a8a1-e582-4529-b11e-b350073dffaa",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "COMQ",
    "companyName": "CÔNG TY CỔ PHẦN CÔNG NGHỆ COMQ",
    "contactPhone": "0818-876-969",
    "address": "27/14 Đường Số 8, Phường Linh Xuân, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Linh",
      "googleMapsUrl": "https://maps.app.goo.gl/vnFQhGpYiZCmks2E8"
    },
    "createdAt": "2025-09-17T03:06:09.688Z",
    "updatedAt": "2025-09-17T03:06:21.913Z"
  },
  {
    "id": "f509f648-d23a-43bb-8168-2c31f4b91ccb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CƠ ĐIỆN MEE",
    "companyName": "CÔNG TY CỔ PHẦN KỸ THUẬT CƠ ĐIỆN MEE",
    "contactPhone": "0908-619-864",
    "address": "Lô HT-E10-6-9, Đường số 19 Khu Công Nghiệp Hiệp Phước, Xã Hiệp Phước, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Linh",
      "googleMapsUrl": "https://maps.app.goo.gl/auDwXaPwux9PztRT6"
    },
    "createdAt": "2025-09-17T03:05:12.754Z",
    "updatedAt": "2025-09-17T03:05:24.696Z"
  },
  {
    "id": "f94429a8-f4a7-41fe-bac7-55fcc6e79c60",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "Hố Nai M&M",
    "companyName": "CÔNG TY TNHH ĐỒ GỖ HỐ NAI M&M",
    "contactPhone": "03343-059-94",
    "taxCode": "3603288827",
    "address": "Cụm công nghiệp Tân An, Xã Tân An, Tỉnh Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thuý",
      "googleMapsUrl": "https://maps.app.goo.gl/rEi7LoPwaQ6tgnD77"
    },
    "createdAt": "2025-09-17T03:01:24.535Z",
    "updatedAt": "2025-09-17T03:01:57.714Z"
  },
  {
    "id": "b7aa8a2b-da20-49af-9e08-35c8cf167bcd",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CAU XANH",
    "companyName": "CÔNG TY TNHH TRANG TRÍ NỘI THẤT CAU XANH",
    "contactPhone": "0906-902-765",
    "address": "47/30A Ao Đôi, Khu phố 6, Phường Bình Trị Đông A, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Thịnh",
      "googleMapsUrl": "https://maps.app.goo.gl/Ygyc8fhVkhEd7ZnN9"
    },
    "createdAt": "2025-09-17T03:01:24.164Z",
    "updatedAt": "2025-09-17T03:01:31.647Z"
  },
  {
    "id": "ae1c04ad-68d4-42ad-8c56-37934ef3afb8",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KIM LOẠI CHÂU Á",
    "companyName": "CÔNG TY TNHH CÔNG NGHỆ KIM LOẠI CHÂU Á",
    "contactPhone": "0777167600",
    "address": "Thửa đất số 12, Tờ bản đồ số 110, Khu phố Bình Thuận 2, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Lan",
      "googleMapsUrl": "https://maps.app.goo.gl/TFaKYguAYS8zHhSn8"
    },
    "createdAt": "2025-09-17T02:59:52.907Z",
    "updatedAt": "2025-09-17T03:00:12.916Z"
  },
  {
    "id": "85dab94d-7803-4ad9-bbba-9054295e1e34",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TÂN VĨNH NGHĨA",
    "companyName": "CÔNG TY TNHH NỘI THẤT GỖ TÂN VĨNH NGHĨA",
    "contactPhone": "0979-517-589",
    "address": "Nhà xưởng 1, Một phần lô E, đường N5, N6 và D3, Khu công nghiệp Nam Tân Uyên, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thuỷ",
      "googleMapsUrl": "https://maps.app.goo.gl/zYb5aRxmBUJkHh8R6"
    },
    "createdAt": "2025-09-17T02:58:48.758Z",
    "updatedAt": "2025-09-17T02:58:55.893Z"
  },
  {
    "id": "46b4d5a5-8214-40d8-9da2-5e825cbe7ed3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOÀNG THIÊN LỘC",
    "companyName": "CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI HOÀNG THIÊN LỘC",
    "contactPhone": "0934-133-222",
    "address": "87 ấp 3A, Xã Phước Lợi, Huyện Bến Lức, Tỉnh Long An, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nguyên",
      "googleMapsUrl": "https://maps.app.goo.gl/DTDYMagryfnN8yth9"
    },
    "createdAt": "2025-09-17T02:58:45.168Z",
    "updatedAt": "2025-09-17T02:58:57.913Z"
  },
  {
    "id": "e81f8303-45d7-4ee6-9277-1ea9555cb1d7",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HẰNG NGHĨA",
    "companyName": "CÔNG TY TNHH GỖ HẰNG NGHĨA",
    "contactPhone": "0825-470-867- 0359030162",
    "address": "Thửa đất số 390, Tờ bản đồ số 16, Khu phố Tân Bình, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị My / Chị Loan",
      "googleMapsUrl": "https://maps.app.goo.gl/Une7VRAmTFq22xHd8"
    },
    "createdAt": "2025-09-17T02:56:42.958Z",
    "updatedAt": "2025-09-17T02:57:35.543Z"
  },
  {
    "id": "b3e567d0-2838-4509-8aa3-5be2906bec32",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TURA",
    "companyName": "CÔNG TY TNHH NỘI THẤT TURA BÌNH DƯƠNG",
    "contactPhone": "0964983927",
    "address": "Số 40/03, đường Đại lộ Bình Dương, Tổ 3, khu phố Bình Giao, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/xwTUYhtZTcjbj4LD6"
    },
    "createdAt": "2025-09-17T02:54:04.019Z",
    "updatedAt": "2025-09-17T02:54:04.019Z"
  },
  {
    "id": "1b1a83c5-d9f9-43e1-ac92-a671174ec6dc",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MODERN INS (Chành)",
    "companyName": "CÔNG TY CỔ PHẦN MODERN INS",
    "address": "50 Bãi Sậy, P1, Quận 6, TP Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "pic": "Chành Anh Hưng ",
      "googleMapsUrl": "https://maps.app.goo.gl/BMZ24GkKDrnTZ49g8"
    },
    "createdAt": "2025-09-17T01:54:33.747Z",
    "updatedAt": "2025-09-17T01:59:40.477Z"
  },
  {
    "id": "5379f6f1-30f7-4fec-b8af-f0d213f34822",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ THANH THANH ĐỒNG NAI",
    "companyName": "CÔNG TY TNHH KỸ NGHỆ GỖ THANH THANH (Đồng Nai)",
    "contactPhone": "0987-017-014",
    "address": "Anh Minh",
    "isActive": true,
    "metadata": {
      "pic": "Anh Minh",
      "googleMapsUrl": "https://maps.app.goo.gl/bEZcCxVoyFY1fAx68"
    },
    "createdAt": "2025-09-17T01:47:38.811Z",
    "updatedAt": "2025-09-17T02:59:02.744Z"
  },
  {
    "id": "4f540e26-1f47-40f3-a591-300cecdf7380",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "FALCON",
    "companyName": "CÔNG TY TNHH FALCON VIỆT NAM",
    "contactPhone": "0904927097",
    "address": "TỪ MINH, HÀ NỘI",
    "isActive": true,
    "metadata": {},
    "createdAt": "2025-09-16T10:01:34.908Z",
    "updatedAt": "2025-09-16T10:01:34.908Z"
  },
  {
    "id": "475afac6-affe-488c-8858-e90a6c55e2de",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GIA VINH",
    "companyName": "CÔNG TY TNHH GIA VINH",
    "address": "Thôn Vĩnh Thành, Xã Đề Gi, Gia Lai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/ppE8svSycpJDsAJf6"
    },
    "createdAt": "2025-09-16T09:01:48.946Z",
    "updatedAt": "2025-09-16T09:01:48.946Z"
  },
  {
    "id": "2c6a319f-094c-4e21-8639-99ad178114e7",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HỐ NAI D&D",
    "companyName": "CÔNG TY TNHH GỖ HỐ NAI D&D",
    "contactPhone": "0939-695-799",
    "address": "Cụm Công nghiệp dốc 47, Phường Tam Phước, Đồng Nai, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Diệp",
      "googleMapsUrl": "https://maps.app.goo.gl/4FfDGv8PaR7ad3hF8"
    },
    "createdAt": "2025-09-16T08:23:49.970Z",
    "updatedAt": "2025-09-17T03:14:42.932Z"
  },
  {
    "id": "ef02f034-29ab-4887-8eaa-ec9305248027",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DTC",
    "companyName": "CÔNG TY TNHH DƯƠNG THÀNH DTC",
    "contactPhone": "0937-172-211",
    "address": "415F Nguyễn Văn Bá, Phường Thủ Đức, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Anh Đình Nhiệm",
      "googleMapsUrl": "https://maps.app.goo.gl/NQaLEGFysW53hWQe8"
    },
    "createdAt": "2025-09-16T08:21:14.147Z",
    "updatedAt": "2025-09-16T08:24:45.319Z"
  },
  {
    "id": "50fbd706-f13d-40da-9248-408edd3cff2d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TRƯỜNG THÀNH",
    "companyName": "CÔNG TY CỔ PHẦN TẬP ĐOÀN KỸ NGHỆ GỖ TRƯỜNG THÀNH",
    "contactPhone": "0908-403-620",
    "address": "Đường ĐT 747, khu phố 7, Phường Tân Uyên, TP Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trân",
      "googleMapsUrl": "https://maps.app.goo.gl/K7TF5JAzig8TSkDq8"
    },
    "createdAt": "2025-09-16T08:15:12.989Z",
    "updatedAt": "2025-09-16T08:25:09.522Z"
  },
  {
    "id": "938d74fb-11bf-43d3-b2d4-589a9df78c5e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HAMMER",
    "companyName": "CÔNG TY CỔ PHẦN NỘI THẤT HAMMER",
    "address": "Tổ 3, Thôn Thanh Tam Đông, Phường Hội An Đông, TP Đà Nẵng, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/bSmM3p8grds9KEi7A"
    },
    "createdAt": "2025-09-16T08:07:26.863Z",
    "updatedAt": "2025-09-16T08:07:26.863Z"
  },
  {
    "id": "1ec74b1a-55b4-4079-b740-9a0d2da93564",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DAT MOI",
    "companyName": "CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ ĐẤT MỚI",
    "contactPhone": "0395163229",
    "address": "Lô B2, Đường C2, KCN Cát Lái- Cụm II, Phường Cát Lái, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/JtwPc4EceMzNovp57"
    },
    "createdAt": "2025-09-16T04:54:19.427Z",
    "updatedAt": "2025-09-16T04:54:19.427Z"
  },
  {
    "id": "05d65c2e-ab25-4991-9fc3-d15c5ab21a4a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THANH DUONG",
    "companyName": "CÔNG TY CỔ PHẦN THÀNH DƯƠNG",
    "contactPhone": "   0934 935 288",
    "address": "Thửa đất số 295, tờ bản đồ số 18, khu phố ông Đông, PhườngTân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/sgxuwNsSHmg7sDsL9"
    },
    "createdAt": "2025-09-16T04:53:06.507Z",
    "updatedAt": "2025-09-16T04:53:06.507Z"
  },
  {
    "id": "ee12f49c-47b5-40a3-aa75-b15e8adbab6a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGỌC NGA",
    "companyName": "CÔNG TY CỔ PHẦN THƯƠNG MẠI - CHẾ BIẾN GỖ XUẤT NHẬP KHẨU NGỌC NGA",
    "contactPhone": "0971-602-399",
    "address": "Thửa đất số 436 - 457, tờ bản đồ số 8, tổ 2, khu phố Phước Hải, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Son",
      "googleMapsUrl": "https://maps.app.goo.gl/scDYdZitekKuQ2nG9"
    },
    "createdAt": "2025-09-16T04:29:37.073Z",
    "updatedAt": "2025-09-16T04:29:44.460Z"
  },
  {
    "id": "f2cae479-833d-4e39-9f4f-485b9387fbc4",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HAPPY HOME",
    "companyName": "CÔNG TY TNHH HAPPY HOME FURNITURE",
    "contactPhone": "0798-825-471",
    "address": "30 Đường 10, Khu phố 4, Phường Linh Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thảo ",
      "googleMapsUrl": "https://maps.app.goo.gl/tsDH7Mv322k6F2tQ8"
    },
    "createdAt": "2025-09-16T04:21:05.495Z",
    "updatedAt": "2025-09-16T04:21:19.405Z"
  },
  {
    "id": "e5199cf4-88af-42f0-975c-2cb8e967912f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TIẾN THÀNH SƠN",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN TIẾN THÀNH SƠN",
    "contactPhone": "0334017715",
    "address": "Thửa đất số 1373, Tờ bản đồ số 24, Khu phố Tân Bình, PhườngTân Hiệp, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/jJH5PeFkfWF4qH3k8"
    },
    "createdAt": "2025-09-16T04:14:51.426Z",
    "updatedAt": "2025-09-16T04:14:51.426Z"
  },
  {
    "id": "06b64466-f455-4844-8669-a0a32234cd69",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SEN VIỆT",
    "companyName": "SEN VIỆT",
    "contactPhone": "0969-791-791",
    "address": "263 Đ. Tân Kỳ Tân Quý, Tân Sơn Nhì, Tân Phú, Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hiền",
      "googleMapsUrl": "https://maps.app.goo.gl/5Hw4kFJt8QDiLcSi7"
    },
    "createdAt": "2025-09-16T04:07:11.581Z",
    "updatedAt": "2025-09-16T04:07:21.702Z"
  },
  {
    "id": "92d9f2db-36c9-4caf-9929-272999777424",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ISSEIKI",
    "companyName": "CÔNG TY TNHH ISSEIKI FURNITURE (VIỆT NAM)",
    "contactPhone": "0985-741-145",
    "address": "Lô K-1-CN, KCN Mỹ Phước 2, Phường Bến Cát, Thành Phố Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hậu",
      "googleMapsUrl": "https://maps.app.goo.gl/D9eaEBTZ2Zhg9ynZ9"
    },
    "createdAt": "2025-09-16T04:05:57.175Z",
    "updatedAt": "2025-09-16T04:06:03.640Z"
  },
  {
    "id": "73e0ab71-5654-4b47-b373-422fd97eacc8",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TUAN LINH",
    "companyName": "CÔNG TY TNHH XUẤT NHẬP KHẨU ĐỒ GỖ TUẤN LINH",
    "contactPhone": "393337058",
    "address": "Số 4/28D, Đường Bùi Hữu Nghĩa, Khu phố Bình Đức 2, Phường Bình Hòa, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/XkDX9R5Bya6wkNjL9"
    },
    "createdAt": "2025-09-16T04:02:20.227Z",
    "updatedAt": "2025-09-16T04:02:20.227Z"
  },
  {
    "id": "97ec2ef5-dfdb-483c-bc48-fceff1b9a14a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ANH EM",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI VÀ SẢN XUẤT ANH EM",
    "contactPhone": "0977 8841 95",
    "address": "Thửa đất số 37, tờ bản đồ số 27, Khu phố Long Bình, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/raCeoEMpSfsopetk8"
    },
    "createdAt": "2025-09-16T04:00:46.343Z",
    "updatedAt": "2025-09-16T04:00:46.343Z"
  },
  {
    "id": "1dbe982c-854a-466a-978b-b4cdfdfdfed1",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BILY",
    "companyName": "CHI NHÁNH CÔNG TY TNHH B.I.L.Y",
    "contactPhone": "0903199727",
    "address": "ấp 6, Quốc lộ 1A, Xã Nhị Thành, Huyện Thủ Thừa, Tỉnh Long An, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/kw2tLMN4ARq3rpSi6"
    },
    "createdAt": "2025-09-16T03:59:25.646Z",
    "updatedAt": "2025-09-16T03:59:25.646Z"
  },
  {
    "id": "2be0a20d-0241-4e65-b40e-b27ad10a3d4d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHONG CACH VIET",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THỦ CÔNG MỸ NGHỆ PHONG CÁCH VIỆT",
    "contactPhone": "0914 136 748 ",
    "address": "Sô 236, âp 4, Đương Liên âp, Xã An Viễn, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/sk9GdeJFvYnqMvSc6"
    },
    "createdAt": "2025-09-16T03:56:53.776Z",
    "updatedAt": "2025-09-16T03:56:53.776Z"
  },
  {
    "id": "d5c874a6-8fbc-492e-a891-022621348455",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "A.P VINA",
    "companyName": "CÔNG TY CỔ PHẦN THƯƠNG MẠI XNK A.P VINA",
    "contactPhone": "906915906",
    "address": "11/7 Thoại Ngọc Hầu, Phường Hoà Thạnh, Quận Tân phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/5UWZf8EDQM2veoDx9"
    },
    "createdAt": "2025-09-16T03:54:41.600Z",
    "updatedAt": "2025-09-16T03:54:41.600Z"
  },
  {
    "id": "ba5dee7b-2eaf-4b1f-a7ef-dcf68abc9be3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "FURSY",
    "companyName": "CÔNG TY TNHH FURSYS VN",
    "contactPhone": "0359637553",
    "address": "Đường số 6, Phân KCN Nhơn Trạch 6B, KCN Nhơn Trạch VI, Xã Long Thọ, Huyện Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/cupWq644yapVJ8Zv7"
    },
    "createdAt": "2025-09-16T03:47:23.200Z",
    "updatedAt": "2025-09-16T03:47:23.200Z"
  },
  {
    "id": "be30df29-1f90-4143-925c-68a92787128b",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DUY TÂN",
    "companyName": "CÔNG TY CỔ PHẦN  SẢN XUẤT NHỰA DUY TÂN",
    "contactPhone": "835847741",
    "address": "298 Hồ Học Lãm, Phường An Lạc, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/hU8QN9SVB5iwkcNZ8"
    },
    "createdAt": "2025-09-16T03:44:08.289Z",
    "updatedAt": "2025-09-16T03:44:08.289Z"
  },
  {
    "id": "041cbd0d-1ef7-4c78-a5e9-502d172c0843",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "AN HÒA PHÁT",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ AN HÒA PHÁT",
    "contactPhone": "0974-765-948",
    "address": "39 đường N22, KDC DV Tân Bình, Khu phố Tân Thắng, Phường Tân Bình, Thành phố Dĩ An, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thảo",
      "googleMapsUrl": "https://maps.app.goo.gl/G78GYryeWbnYJWva9"
    },
    "createdAt": "2025-09-16T03:38:07.749Z",
    "updatedAt": "2025-09-16T03:38:38.451Z"
  },
  {
    "id": "64c85ab0-470d-4ea0-a0d8-df38a717696d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HƯNG DŨNG PHÁT",
    "companyName": "CÔNG TY TNHH HƯNG DŨNG PHÁT",
    "contactPhone": "0978-219-128",
    "address": "Km 2, đường Nguyễn Hoàng, ấp 4, Xã Sông Trầu, Huyện Trảng Bom, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Huy",
      "googleMapsUrl": "https://maps.app.goo.gl/xrPabzBb6suMvrKGA"
    },
    "createdAt": "2025-09-16T03:27:20.815Z",
    "updatedAt": "2025-09-16T03:27:32.150Z"
  },
  {
    "id": "758b6c8f-7746-4939-a701-0cecdc935862",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NHÀ SÀNH",
    "companyName": "CÔNG TY TNHH NỘI THẤT NHÀ SÀNH",
    "contactPhone": "0931234121",
    "address": "13/9 Tân Thới Nhất 1B, P. Tân Thới Nhất, Q.12",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/4dKbhvzzcAC8ginK7"
    },
    "createdAt": "2025-09-16T03:25:32.673Z",
    "updatedAt": "2025-09-16T03:25:32.673Z"
  },
  {
    "id": "0de9bd77-fc15-4d0b-a8c9-ceaf69bb015b",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHƯỚC PHONG",
    "companyName": "CÔNG TY TNHH  SẢN XUẤT - THƯƠNG MẠI PHƯỚC PHONG",
    "contactPhone": "0908-551-180",
    "address": "Thửa đất số 420, Tờ bản đồ số 11, Tổ 1, ấp 1, Xã Thường Tân, Huyện Bắc Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Mai",
      "googleMapsUrl": "https://maps.app.goo.gl/8JbChuGQieaicy2o9"
    },
    "createdAt": "2025-09-16T03:23:22.655Z",
    "updatedAt": "2025-09-16T03:23:30.044Z"
  },
  {
    "id": "c19bfc8e-7a39-4295-9bc0-936012f989a3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MOC KIM PHUC",
    "companyName": "CÔNG TY TNHH MỘC KIM PHÚC",
    "contactPhone": "0903863823",
    "address": " Thửa Đất Số 825, Tờ Bản Đồ Số 6, Tổ 1, Khu Phố Bà Tri, Phường Tân Hiệp, Thành Phố Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/T5HowkdixPm6RdSU8"
    },
    "createdAt": "2025-09-16T03:22:40.445Z",
    "updatedAt": "2025-09-16T03:22:40.445Z"
  },
  {
    "id": "46de1c19-5e8b-4292-8828-063f062c24bb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THÀNH PHÚ PHÁT",
    "companyName": "CÔNG TY TNHH THÀNH PHÚ PHÁT",
    "contactPhone": "0376-183-897",
    "address": "Lô G1 và một phần lô G2, Cụm Công nghiệp Thạnh Phú - Thiện Tân, Xã Thiện Tân, Huyện Vĩnh Cửu, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Diệp",
      "googleMapsUrl": "https://maps.app.goo.gl/2VLrADNa8WPxJix38",
      "memo": "Kho nhận , thanh toán sau "
    },
    "createdAt": "2025-09-16T03:18:48.700Z",
    "updatedAt": "2025-09-16T03:20:10.671Z"
  },
  {
    "id": "b4742980-7c8b-462d-8fb1-3a4e842ec0a6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NAM SONG TIEN",
    "companyName": "CÔNG TY NAM SÔNG TIỀN",
    "contactPhone": " 0909 766 256",
    "address": "106 Quốc Lộ 1K, Linh Xuân, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/k8FEwThdgYYuA1za6"
    },
    "createdAt": "2025-09-16T03:18:20.736Z",
    "updatedAt": "2025-09-16T03:18:20.736Z"
  },
  {
    "id": "83000c10-2d25-4d53-8d30-7a7aa331f2c5",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BUU CHI",
    "companyName": "CÔNG TY TNHH CÔNG NGHIỆP BỬU CHI",
    "contactPhone": " 0989 756 517",
    "address": "Lô B2-60, KCN Tân Đông Hiệp B, Phường Tân Đông Hiệp, Thành Phố Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/nZJnXLDiQotL2ujr9"
    },
    "createdAt": "2025-09-16T03:03:16.994Z",
    "updatedAt": "2025-09-16T03:03:16.994Z"
  },
  {
    "id": "5d975136-0d1f-4b25-8ee1-722304ec3aee",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TRAN GIA",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ VĂN PHÒNG TRẦN GIA",
    "contactPhone": "  0948 004466",
    "address": "165/26 Đường Tây Thạnh, Phường Tây Thạnh, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/Vv2cubPd1GKS141NA"
    },
    "createdAt": "2025-09-16T02:59:19.892Z",
    "updatedAt": "2025-09-16T02:59:19.892Z"
  },
  {
    "id": "b2820cfe-d34a-48c8-8c20-aca96890f2f1",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ANH THUAN PHAT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT XUẤT NHẬP KHẨU ANH THUẤN PHÁT",
    "contactPhone": "  0352 527 889",
    "address": "Thửa Đất Số 266, Tờ Bản Đồ Số 43, Khu Phố Khánh Vân, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/Q8SZA6rZCjm6geWr6"
    },
    "createdAt": "2025-09-15T06:52:13.093Z",
    "updatedAt": "2025-09-15T06:52:13.093Z"
  },
  {
    "id": "87f3bdfb-a972-4914-8422-e96e31a69dc0",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BAO BI CUOC SONG MOI",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ BAO BÌ CUỘC SỐNG MỚI",
    "contactPhone": "0818317777",
    "address": "68 Trần Văn Chẩm, Xã Phước Vĩnh An, Huyện Củ Chi, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/UFsHDEAAtKgjYrFX9"
    },
    "createdAt": "2025-09-15T06:42:34.104Z",
    "updatedAt": "2025-09-15T06:42:34.104Z"
  },
  {
    "id": "b67f6cb9-5435-45b2-b8dc-ad58a414f6fb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HANH PHUC",
    "companyName": "CÔNG TY TNHH GỖ HẠNH PHÚC",
    "contactPhone": "968944302",
    "address": "Đường Số 9, Khu Công Nghiệp Tam Phước, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/i9k13Ze31TCJwo8D8"
    },
    "createdAt": "2025-09-15T06:38:33.100Z",
    "updatedAt": "2025-09-15T06:38:33.100Z"
  },
  {
    "id": "e7493fed-2364-4312-accc-7f9843be9e93",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "KHANOM",
    "companyName": "KHANOM",
    "address": "Thửa đất số 1970, Tờ bản đồ số 44, Đường Khánh Bình 05, Khu phố Khánh Vân, Phường Khánh Bình, Thành phố Tân Uyên, Tỉnh Bình Dương, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/dKaRPnZzBgxVNHXs9"
    },
    "createdAt": "2025-09-13T04:51:25.596Z",
    "updatedAt": "2025-09-13T04:52:23.875Z"
  },
  {
    "id": "54901cfe-32e3-4843-aeb9-446198c3212e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VĨNH THÀNH",
    "companyName": "HỢP TÁC XÃ VĨNH THÀNH",
    "address": "Ấp Ông Hường, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.695Z",
    "updatedAt": "2025-09-12T10:27:57.695Z"
  },
  {
    "id": "e005dc43-b0be-475e-a65e-9ade29fe8758",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "WOODWORTH WOODEN",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN WOODWORTH WOODEN (VIỆT NAM)",
    "contactPhone": "0938007353",
    "address": "Ấp 12, Xã Phú Hòa Đông, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nhung",
      "googleMapsUrl": "https://maps.app.goo.gl/7YkuMemD2V7Wx5zD8"
    },
    "createdAt": "2025-09-12T10:27:57.634Z",
    "updatedAt": "2025-09-16T03:10:25.438Z"
  },
  {
    "id": "d31b8009-13d3-424d-941f-2418ab002532",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VŨ TFC",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN VŨ TFC",
    "address": "17C/25, Đường Bình Chuẩn 15, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.578Z",
    "updatedAt": "2025-09-12T10:27:57.578Z"
  },
  {
    "id": "c7dc530a-030f-42a1-98dc-46b40c9b14f5",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚC GIA HUY",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN THƯƠNG MẠI XUẤT NHẬP KHẨU PHÚC GIA HUY",
    "address": "94/10/8 Nguyễn An Ninh, Khu phố Nhị Đồng 2, Phường Dĩ An, Thành phố Hồ Chí MInh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.517Z",
    "updatedAt": "2025-09-12T10:27:57.517Z"
  },
  {
    "id": "b38f2b52-d35e-4afe-9878-2bb5eeb338b6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "QUỐC TẾ KHẢI TÍN VIỆT",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ KHẢI TÍN VIỆT",
    "contactPhone": "0939191922",
    "address": "B6/257 ấp 2, Xã Bình Lợi, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Nhung",
      "googleMapsUrl": "https://maps.app.goo.gl/HGC7PA4HsMyB7J9C7"
    },
    "createdAt": "2025-09-12T10:27:57.461Z",
    "updatedAt": "2025-09-16T03:11:52.722Z"
  },
  {
    "id": "ae0ad858-83b6-4541-a832-d331923fa7ad",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "JANG IN FURNITURE VIỆT NAM",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN JANG IN FURNITURE VIỆT NAM",
    "address": "KCN Nhơn Trạch 5, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.401Z",
    "updatedAt": "2025-09-12T10:27:57.401Z"
  },
  {
    "id": "425494bc-657e-4907-814a-8d9fb25ad213",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "FANNWOOD",
    "companyName": "CÔNG TY TRÁCH NHIỆM HỮU HẠN FANNWOOD",
    "address": "Thửa đất số 1032, tờ bản đồ số 40, khu phố Bình Khánh, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.338Z",
    "updatedAt": "2025-09-12T10:27:57.338Z"
  },
  {
    "id": "0f190c4f-07de-4dec-9e54-bc633b05bade",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TÂN ANH KIỆT",
    "companyName": "CÔNG TY TNHH ĐỒ GỖ TÂN ANH KIỆT BÌNH DƯƠNG",
    "address": "thửa đất số 209, tờ bản đồ số 22, khu phố Long Bình, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.278Z",
    "updatedAt": "2025-09-12T10:27:57.278Z"
  },
  {
    "id": "35a541fc-39a3-43b8-badf-726c1668c29f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ĐẠT THÀNH",
    "companyName": "CÔNG TY TNHH ĐẠT THÀNH",
    "address": "Khu phố Bình Khánh, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.220Z",
    "updatedAt": "2025-09-12T10:27:57.220Z"
  },
  {
    "id": "26e413ce-64ab-4cdd-a5a5-49a0d53c86c4",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ALLIANCE",
    "companyName": "CÔNG TY TNHH XÂY DỰNG VÀ NỘI THẤT CAO CẤP ALLIANCE",
    "address": "56-58 Đường Võ Oanh, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.164Z",
    "updatedAt": "2025-09-12T10:27:57.164Z"
  },
  {
    "id": "7b005dad-1fd2-4aaf-9694-0eb0418a3336",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOÀNG THỊNH",
    "companyName": "CÔNG TY TNHH XÂY DỰNG TRANG TRÍ NỘI THẤT HOÀNG THỊNH",
    "contactPhone": "0963349886",
    "address": "223 đường 28, Phường An Nhơn, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Tân",
      "googleMapsUrl": "https://maps.app.goo.gl/3GUnJBc6LT9YiZyv5"
    },
    "createdAt": "2025-09-12T10:27:57.107Z",
    "updatedAt": "2025-09-16T03:14:12.267Z"
  },
  {
    "id": "9c6f6c01-82ab-40c3-a8a5-460868ea9b2f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "WEST COUNTRY FURNITURE",
    "companyName": "CÔNG TY TNHH WEST COUNTRY FURNITURE VIỆT NAM",
    "address": "Lô Q1-Q2, Đường Số D4, Khu Công Nghiệp Nam Tân Uyên, Phường Tân Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:57.047Z",
    "updatedAt": "2025-09-12T10:27:57.047Z"
  },
  {
    "id": "733db5ae-eeaa-482e-9cd7-8a406d426a71",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚ KIM HƯNG",
    "companyName": "CÔNG TY TNHH VẬT TƯ NGÀNH GỖ PHÚ KIM HƯNG",
    "contactPhone": "0938039658",
    "address": "53/3, Đường DX058 , Khu Phố 8, Phường Bình Dương, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Cường",
      "googleMapsUrl": "https://maps.app.goo.gl/G4U3FsJFKdpkrBraA"
    },
    "createdAt": "2025-09-12T10:27:56.992Z",
    "updatedAt": "2025-09-16T03:59:35.514Z"
  },
  {
    "id": "f379d98a-0f21-431b-a711-1158d0a4e11b",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "V-MARBLE",
    "companyName": "CÔNG TY TNHH V-MARBLE",
    "contactPhone": "0985189260",
    "address": "423 Đường Trường Chinh, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Hoàng",
      "googleMapsUrl": "https://maps.app.goo.gl/VnmWpaaU1TG4hGdU6"
    },
    "createdAt": "2025-09-12T10:27:56.930Z",
    "updatedAt": "2025-09-16T03:42:50.317Z"
  },
  {
    "id": "4516a75f-3acb-4b9e-b242-d03563c57665",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TRANSFORMER ROBOTICS PTE",
    "companyName": "CÔNG TY TNHH TRANSFORMER ROBOTICS PTE",
    "address": "48B Đặng Dung, Phường Tân Định, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.871Z",
    "updatedAt": "2025-09-12T10:27:56.871Z"
  },
  {
    "id": "4f8477e4-6242-424e-a4c8-d69e29dc5319",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TOÀN THÀNH PHÚ",
    "companyName": "CÔNG TY TNHH TOÀN THÀNH PHÚ",
    "address": "89B Đường Nguyễn Thị Tươi, Khu Phố Tân Phước, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.804Z",
    "updatedAt": "2025-09-12T10:27:56.804Z"
  },
  {
    "id": "efbce9de-f1c0-44fb-8fe4-bd4972619d57",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TM XNK LTC VIỆT NAM",
    "companyName": "CÔNG TY TNHH TM XNK LTC VIỆT NAM",
    "contactPhone": "0906892319",
    "address": "81A Đường số 2, Khu phố 5, Phường Bình Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Tiến",
      "googleMapsUrl": "https://maps.app.goo.gl/5FbFax43NFuFaa7z6"
    },
    "createdAt": "2025-09-12T10:27:56.742Z",
    "updatedAt": "2025-09-17T01:21:28.707Z"
  },
  {
    "id": "24df242d-2cc0-4863-92f8-828a863826f3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TIẾN TRIỂN VIỆT NAM",
    "companyName": "CÔNG TY TNHH TIẾN TRIỂN VIỆT NAM",
    "address": "Thửa đất số 150, 159, 160, Tờ bản đồ số 18, Khu phố Ông Đông, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.681Z",
    "updatedAt": "2025-09-12T10:27:56.681Z"
  },
  {
    "id": "1f112ed4-d848-4bb4-bc8a-9129a0ac76fb",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BẢO QUYÊN",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU VÀ VẬN TẢI BẢO QUYÊN",
    "address": "Số 2/55 An Đà Nội, Phường Gia Viên, Thành phố Hải Phòng, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.623Z",
    "updatedAt": "2025-09-12T10:27:56.623Z"
  },
  {
    "id": "93d0c8d1-b019-458b-bf3c-85ee161a8fc1",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH ĐẠT",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU MINH ĐẠT",
    "address": "Lầu 1, 1244 Lạc Long Quân, Phường Tân Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.560Z",
    "updatedAt": "2025-09-12T10:27:56.560Z"
  },
  {
    "id": "4d24350f-8539-437d-9ea6-348703714606",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "XNK HIỀN KIỆM",
    "companyName": "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP KHẨU HIỀN KIỆM",
    "contactPhone": "0388331381",
    "address": "Số 35 KDC Đại Quang, Khu phố Tân Phú 1, Phường Tân Đông Hiệp, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/LweYJqEygRZheeMa9"
    },
    "createdAt": "2025-09-12T10:27:56.502Z",
    "updatedAt": "2025-09-16T04:00:00.597Z"
  },
  {
    "id": "a41a5c37-59c7-43d8-98c5-2a78f2e67829",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DƯƠNG BẢN",
    "companyName": "CÔNG TY TNHH THIẾT KẾ DƯƠNG BẢN",
    "address": "Số 31 VSIP II  Đường số 7,  Khu Công Nghiệp Việt Nam – Singapore II, Phường Bình Dương, Thành phố Hồ Chí Minh.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.384Z",
    "updatedAt": "2025-09-12T10:27:56.384Z"
  },
  {
    "id": "94447261-c872-45ff-9000-04fe37b8f143",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THE MAKER FURNITURE",
    "companyName": "CÔNG TY TNHH THE MAKER FURNITURE",
    "address": "5/215 Tổ 4A, khu phố Hòa Lân 1, Phường Thuận Giao, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.334Z",
    "updatedAt": "2025-09-12T10:27:56.334Z"
  },
  {
    "id": "d38f6565-58c0-4486-ab07-c705b9a06b17",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TELLBE VIỆT NAM",
    "companyName": "CÔNG TY TNHH TELLBE VIỆT NAM",
    "address": "Khu phố Hòa Lân 1, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.273Z",
    "updatedAt": "2025-09-12T10:27:56.273Z"
  },
  {
    "id": "b4d990a7-8710-446c-b80f-45a15c0e8594",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOA ĐẠT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT XUẤT NHẬP KHẨU HOA ĐẠT",
    "address": "55/1 Khu phố Bình Hòa 1, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:56.212Z",
    "updatedAt": "2025-09-12T10:27:56.212Z"
  },
  {
    "id": "fa12e2e9-96e7-4ef8-9265-401daf7f5dae",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HƯNG PHÁT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI VÀ THIẾT KẾ NỘI THẤT HƯNG PHÁT",
    "contactPhone": "0903164384",
    "address": "Số 2, Đường số 9, KP 4, Phường Tam Bình, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Lan",
      "googleMapsUrl": "https://maps.app.goo.gl/QeJuY7vfiaZjLpL59"
    },
    "createdAt": "2025-09-12T10:27:56.148Z",
    "updatedAt": "2025-09-16T03:56:37.476Z"
  },
  {
    "id": "59ce7271-ff74-4854-b2ec-5141db024980",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THANH MINH",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI THANH MINH",
    "contactPhone": "0367-530-662",
    "address": "Thửa đất số 37.38, tờ bản đồ số B1(DC8), đường Cao Tốc Mỹ Phước - Tân Vạn, khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Dừng",
      "googleMapsUrl": "https://maps.app.goo.gl/cpBpKsCJrPt1eqoY9",
      "memo": "Kho nhận, thanh toán sau"
    },
    "createdAt": "2025-09-12T10:27:56.087Z",
    "updatedAt": "2025-09-16T03:18:17.976Z"
  },
  {
    "id": "f38756b7-32d1-4ed4-9206-de6adf985205",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚ CƯỜNG FURNITURE",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI PHÚ CƯỜNG FURNITURE",
    "contactPhone": "0847400447",
    "address": "Số 99, KP Cây Chàm, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hiền",
      "googleMapsUrl": "https://maps.app.goo.gl/bjkqFBRx3jDcrb518"
    },
    "createdAt": "2025-09-12T10:27:56.023Z",
    "updatedAt": "2025-09-17T01:23:11.083Z"
  },
  {
    "id": "b4e5f53d-46c2-45d5-a0a1-338b9b76fe98",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LONG ĐẠT",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI LONG ĐẠT",
    "contactPhone": "0332832193",
    "address": "thửa đất số 456,487,  tờ bản đồ số 29, đường CPH006, Khu phố 1B, Phường Chánh Phú Hòa, Thành phố Hồ Chí Minh, Việt Nam.",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": "https://maps.app.goo.gl/BaLQDr3nbkJhd82N6"
    },
    "createdAt": "2025-09-12T10:27:55.957Z",
    "updatedAt": "2025-09-17T03:52:17.910Z"
  },
  {
    "id": "eefe5b57-ea85-4b14-b2df-a6b3b314d8a2",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BẢO ĐỆ HÂN",
    "companyName": "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI BẢO ĐỆ HÂN",
    "contactPhone": "0344025557",
    "address": "Số 713, đường Khánh Bình 03, Tổ 5, Khu phố Khánh Tân, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Cội",
      "googleMapsUrl": "https://maps.app.goo.gl/3TfL6ZrXRvn9o2m47"
    },
    "createdAt": "2025-09-12T10:27:55.897Z",
    "updatedAt": "2025-09-16T04:00:23.070Z"
  },
  {
    "id": "db38f984-b03c-49ee-9603-d759b1d78df6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SXTM GỖ ĐẠI VIỆT",
    "companyName": "CÔNG TY TNHH SXTM GỖ ĐẠI VIỆT",
    "address": "Số 276/19/13 Đường Trần Hưng Đạo, Khu Phố Đông B, Phường Đông Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.835Z",
    "updatedAt": "2025-09-12T10:27:55.835Z"
  },
  {
    "id": "a46501e9-665d-485a-ab14-41cd89a3f9df",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SX TM XD THỊNH PHÁT",
    "companyName": "CÔNG TY TNHH SX TM XD THỊNH PHÁT",
    "address": "Số 13X1/2 Đường số 8, Tổ 24, Khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.678Z",
    "updatedAt": "2025-09-12T10:27:55.678Z"
  },
  {
    "id": "37f128f5-2665-445f-a181-2a4ef5821bfe",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "RESPONSE VIỆT NAM",
    "companyName": "CÔNG TY TNHH RESPONSE VIỆT NAM",
    "contactPhone": "0972343336",
    "address": "Lô A13-A14 đường số 1, Cụm Công nghiệp thị trấn Uyên Hưng, Phường Tân Uyên, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hoa",
      "googleMapsUrl": "https://maps.app.goo.gl/3eFXi5CUFiyt1qRk8"
    },
    "createdAt": "2025-09-12T10:27:55.605Z",
    "updatedAt": "2025-09-17T01:28:52.022Z"
  },
  {
    "id": "accdb47b-304c-49af-bb0c-fc4b173275fa",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "QUỐC TẾ DI HƯNG",
    "companyName": "CÔNG TY TNHH QUỐC TẾ DI HƯNG",
    "address": "Khu sản xuất Bình Chuẩn, Phường Thuận Giao, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.551Z",
    "updatedAt": "2025-09-12T10:27:55.551Z"
  },
  {
    "id": "138c1bf1-8357-4dbc-82e9-6510d304fb92",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "PHÚ THÀNH PHÁT (Xưởng 2)",
    "companyName": "CÔNG TY TNHH PHÚ THÀNH PHÁT DESIGN FURNITURE",
    "contactPhone": "0348-930-962",
    "address": "Số 202/85/6/38, Khu phố 4A, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hường",
      "googleMapsUrl": "https://maps.app.goo.gl/uXTj6BQ8diy5mVPu7"
    },
    "createdAt": "2025-09-12T10:27:55.494Z",
    "updatedAt": "2025-09-17T03:03:43.479Z"
  },
  {
    "id": "60ded790-e2e7-42dc-8a01-26b9929fffe2",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VIỆT TRUNG",
    "companyName": "CÔNG TY TNHH NỘI THẤT VIỆT TRUNG",
    "address": "Thửa đất số 331, tờ bản đồ số 15, khu phố Khánh Long, Phường Tân Khánh, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.434Z",
    "updatedAt": "2025-09-12T10:27:55.434Z"
  },
  {
    "id": "2fda6d84-568a-4edd-929a-6825d8efde70",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "TỦ BẾP OWEN VIỆT NAM",
    "companyName": "CÔNG TY TNHH NỘI THẤT TỦ BẾP OWEN VIỆT NAM",
    "address": "Lô A-3B-CN, đường D3, Khu công nghiệp Bàu Bàng, Xã Bàu Bàng, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.375Z",
    "updatedAt": "2025-09-12T10:27:55.375Z"
  },
  {
    "id": "41a163c1-8108-45d4-b84c-0a3d28ef409f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NỘI THẤT PHÚC MỸ GIA",
    "companyName": "CÔNG TY TNHH NỘI THẤT TÙY CHỈNH PHÚC MỸ GIA",
    "address": "Số 39, Quốc lộ 1A, khu phố 1, Phường Hiệp Bình, Thành phố Hồ Chí Minh",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.315Z",
    "updatedAt": "2025-09-13T04:01:55.859Z"
  },
  {
    "id": "8b8bad37-4cd3-49d8-b428-7ff39124100a",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THẦN ĐÈN",
    "companyName": "CÔNG TY TNHH NỘI THẤT THẦN ĐÈN",
    "address": "90/4C, Ấp Thanh Hóa, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.257Z",
    "updatedAt": "2025-09-12T10:27:55.257Z"
  },
  {
    "id": "dd14f632-1c3d-4c0e-96f3-84e2022a9c35",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MÊ KÔNG",
    "companyName": "CÔNG TY TNHH NỘI THẤT MÊ KÔNG",
    "address": "đường 2B khu 2, Phường Bình Dương, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.196Z",
    "updatedAt": "2025-09-12T10:27:55.196Z"
  },
  {
    "id": "79369182-4b07-451e-9336-46f0ec885b18",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LỘC PHÁT VIỆT",
    "companyName": "CÔNG TY TNHH NỘI THẤT LỘC PHÁT VIỆT",
    "address": "Số 09, hẻm 394, đường Võ Nguyên Giáp, tổ 7, khu phố Tân Cang, Phường Phước Tân, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:55.136Z",
    "updatedAt": "2025-09-12T10:27:55.136Z"
  },
  {
    "id": "7713f0bb-ca50-4d3a-b120-81eb73d187fc",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NAM AN LIVING",
    "companyName": "CÔNG TY TNHH NAM AN LIVING",
    "contactPhone": "0389033269",
    "address": "57 Nguyễn Du, Phường Sài Gòn, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hồng (kho)",
      "googleMapsUrl": "https://maps.app.goo.gl/u6J43yvycGnYYpFCA",
      "memo": "Đối diện nhà văn hóa có hẻm, chạy vào hẻm 20m. Xưởng đầu tiên ngay bên tay phải\n"
    },
    "createdAt": "2025-09-12T10:27:55.082Z",
    "updatedAt": "2025-09-17T01:40:49.147Z"
  },
  {
    "id": "b93b87d2-12cb-475f-ad78-db84fc4d6387",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VÂN ANH PHÁT",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN VÂN ANH PHÁT",
    "contactPhone": "0933706709",
    "address": "Số 90/10/51, tổ 11, KP 9, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thuý",
      "googleMapsUrl": "https://maps.app.goo.gl/mTDsja7jniwc6Am69"
    },
    "createdAt": "2025-09-12T10:27:55.023Z",
    "updatedAt": "2025-09-16T03:24:36.490Z"
  },
  {
    "id": "d181c69d-a4be-4c53-9912-f2547e471503",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VẠN PHÁT PHÁT",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ VẠN PHÁT PHÁT",
    "address": "Thửa đất số 41- 64, Tờ bản đồ số 34, Đường Tân Phước Khánh 02, Tổ 4, Khu phố Khánh Hòa, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.967Z",
    "updatedAt": "2025-09-12T10:27:54.967Z"
  },
  {
    "id": "b962bbed-97eb-4b2f-b54b-b4df7e9e8258",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BAO BÌ CUỘC SỐNG MỚI",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THƯƠNG MẠI DỊCH VỤ IN BAO BÌ CUỘC SỐNG MỚI",
    "address": "68 Trần Văn Chẩm,Ấp 3B, Xã Củ Chi, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.909Z",
    "updatedAt": "2025-09-12T10:27:54.909Z"
  },
  {
    "id": "be3883e1-ca50-4eb9-8bb7-47061f2edd27",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGŨ KIM VẠN HÂM",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN THIẾT BỊ CƠ ĐIỆN NGŨ KIM VẠN HÂM",
    "address": "Thửa đất số 430, Tờ bản đồ 38, khu phố Khánh Lộc , Phường Tân Hiệp, Thành phố Hồ Chí Minh , Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.850Z",
    "updatedAt": "2025-09-12T10:27:54.850Z"
  },
  {
    "id": "310313a4-1602-4f25-b54c-9258465f0f6c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "RAPEXCO - ĐẠI NAM",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN RAPEXCO - ĐẠI NAM",
    "address": "Lô số N1 - N8, P1 - P16, Khu công nghiệp Suối Dầu, Xã Cam Lâm, Tỉnh Khánh Hòa, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.792Z",
    "updatedAt": "2025-09-12T10:27:54.792Z"
  },
  {
    "id": "98ceab79-1f27-4fba-bada-93f1f5f6ed1e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NGŨ KIM MIỀN NAM",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN NGŨ KIM MIỀN NAM",
    "address": "131/1 Đường Hiệp Bình, Phường Hiệp Bình, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.677Z",
    "updatedAt": "2025-09-12T10:27:54.677Z"
  },
  {
    "id": "30d06f81-cf0f-403a-98af-f332be37f1fd",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ VIỆT",
    "companyName": "CÔNG TY TNHH MỘT THÀNH VIÊN GỖ VIỆT",
    "contactPhone": "0985486608",
    "address": "Văn phòng giao dịch: P506, C4, Khu dân cư An Bình, Phường Trấn Biên,Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Vi",
      "googleMapsUrl": "https://maps.app.goo.gl/NzYea6p5XXHQ1opv5"
    },
    "createdAt": "2025-09-12T10:27:54.622Z",
    "updatedAt": "2025-09-16T03:25:54.146Z"
  },
  {
    "id": "4da53ffe-59fa-4610-91e7-0a291bcc28a9",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NỘI THẤT HỒ GIA",
    "companyName": "CÔNG TY TNHH MTV NỘI THẤT HỒ GIA",
    "contactPhone": "0336901971",
    "address": "Số 5/9A Đường Chiêu Liêu, Khu phố Đông Chiêu, Phường Dĩ An, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Hồ Gia",
      "googleMapsUrl": "https://maps.app.goo.gl/Dwd2s9vaw8vmy2xC9"
    },
    "createdAt": "2025-09-12T10:27:54.569Z",
    "updatedAt": "2025-09-17T01:42:48.308Z"
  },
  {
    "id": "2aaa7a9b-d9a9-43a6-81d0-2039f8e5fd37",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH PHÁT 2",
    "companyName": "CÔNG TY TNHH MINH PHÁT 2",
    "contactPhone": "0383863484",
    "address": "Số 57/16, Khu phố Bình Phước A, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Liên",
      "googleMapsUrl": "https://maps.app.goo.gl/TegLzisYvZ8DpRo9A"
    },
    "createdAt": "2025-09-12T10:27:54.515Z",
    "updatedAt": "2025-09-16T04:01:01.663Z"
  },
  {
    "id": "73bb6178-99bf-4dbb-8eb2-4e27fb315596",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MECHANICAL TC",
    "companyName": "CÔNG TY TNHH MECHANICAL TC GROUP",
    "address": "Cụm công nghiệp Cao An, Phường Việt Hòa, Thành phố Hải Phòng, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.460Z",
    "updatedAt": "2025-09-12T10:27:54.460Z"
  },
  {
    "id": "e882cbbb-4bb2-4a39-9f05-a4a56fbdbdd3",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LIFESTYLE FURNITURE",
    "companyName": "CÔNG TY TNHH LIFESTYLE FURNITURE",
    "contactPhone": "  0909 638 077",
    "address": "304/9 Huỳnh Văn Bánh, Phường Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "ANH ĐẠT",
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.400Z",
    "updatedAt": "2025-09-16T03:38:21.359Z"
  },
  {
    "id": "a9b392d6-6626-496c-9fc1-d7653d3f96ea",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CƠ KHÍ Á CHÂU",
    "companyName": "CÔNG TY TNHH KỸ THUẬT CƠ KHÍ Á CHÂU",
    "address": "32/6/11 Đường số 9, Khu phố 5, Phường Linh Xuân, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.339Z",
    "updatedAt": "2025-09-12T10:27:54.339Z"
  },
  {
    "id": "8d7cd192-17d0-4839-9a4d-daf4c29af048",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ THANH THANH CỦ CHI",
    "companyName": "CÔNG TY TNHH KỸ NGHỆ GỖ THANH THANH (Củ Chi)",
    "contactPhone": "0987017014",
    "address": "50C Khu phố 5, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Minh",
      "googleMapsUrl": "https://maps.app.goo.gl/UJfUR3BAWo1fvGvG8"
    },
    "createdAt": "2025-09-12T10:27:54.269Z",
    "updatedAt": "2025-09-17T01:45:05.458Z"
  },
  {
    "id": "dc60d825-41b8-4b3f-ae92-0b5d66c8c453",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "INNOCRAFT",
    "companyName": "CÔNG TY TNHH KỸ NGHỆ GỖ INNOCRAFT VIỆT NAM",
    "contactPhone": "0356190846",
    "address": "Số 12 VSIP II-A, Đường số 14, Khu Công nghiệp Việt Nam-Singapore II-A, Phường Vĩnh Tân, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Linh",
      "googleMapsUrl": "https://maps.app.goo.gl/ypi9pS8xvmYcnN4x5"
    },
    "createdAt": "2025-09-12T10:27:54.207Z",
    "updatedAt": "2025-09-16T03:32:34.060Z"
  },
  {
    "id": "b52963e3-3259-447c-b3d0-787b31f7d30c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "INTERWOOD",
    "companyName": "CÔNG TY TNHH INTERWOOD VIỆT NAM",
    "contactPhone": "0364580179",
    "address": "Thửa đất số 185, Tờ bản đồ số 39, Đường Vĩnh Lợi, Phường Tân Uyên, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Tuyền",
      "googleMapsUrl": "https://maps.app.goo.gl/5JcLG9cofU1C5x3t5"
    },
    "createdAt": "2025-09-12T10:27:54.092Z",
    "updatedAt": "2025-09-16T04:01:48.297Z"
  },
  {
    "id": "39d4d38f-59e4-411c-8262-41eb4584839e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "INNI HOME",
    "companyName": "CÔNG TY TNHH INNI HOME",
    "address": "Đường ĐH 423, khu phố Bà Tri, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:54.031Z",
    "updatedAt": "2025-09-12T10:27:54.031Z"
  },
  {
    "id": "67c3be63-a5fd-4e10-9ac4-ce60dce45204",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "IN HOME",
    "companyName": "CÔNG TY TNHH IN HOME",
    "contactPhone": "0377-186-979",
    "address": "1A, Đường Nguyễn Thị Kiểu, phường Tân Thới Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Linh",
      "googleMapsUrl": "https://maps.app.goo.gl/iTrZYg4KUxNkoXe67"
    },
    "createdAt": "2025-09-12T10:27:53.972Z",
    "updatedAt": "2025-09-17T04:02:25.936Z"
  },
  {
    "id": "7894a5a1-bf73-4126-8ebd-bf8f326f925f",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HARDWARE K&K",
    "companyName": "CÔNG TY TNHH HARDWARE K&K",
    "address": "Thửa đất số 695, Tờ bản đồ số 2, Đường Tô Vĩnh Diện, Tổ 4, Khu phố Khánh Lộc, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.918Z",
    "updatedAt": "2025-09-12T10:27:53.918Z"
  },
  {
    "id": "071049c4-5141-48a9-9f58-1183cf0dfa60",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "EBEN INTERIOR",
    "companyName": "CÔNG TY TNHH EBEN INTERIOR",
    "address": "Thửa đất số 2079, tờ bản đồ số 44, Đường Khánh Bình 09, khu phố Khánh Vân, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.807Z",
    "updatedAt": "2025-09-12T10:27:53.807Z"
  },
  {
    "id": "52d84ecb-d110-4352-b59f-8812253d2019",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DŨNG KHANH",
    "companyName": "CÔNG TY TNHH DŨNG KHANH",
    "contactPhone": "0938235956",
    "address": "Cụm công nghiệp Thạnh Phú, Phường Trảng Dài, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "CHỊ CHUYÊN",
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.750Z",
    "updatedAt": "2025-09-17T03:41:12.344Z"
  },
  {
    "id": "2b53bba0-e06c-4555-bdca-032c68e22334",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "DOANH ĐỨC",
    "companyName": "CÔNG TY TNHH DOANH ĐỨC",
    "address": "Thửa đất số 104, 106, 107A, 164, 165, 166, 169, 170, 173, 174, 183, 184, 185 và thửa 186, đường số 6, Phường Dĩ An, Thành Phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.687Z",
    "updatedAt": "2025-09-12T10:27:53.687Z"
  },
  {
    "id": "778efae0-1826-475f-9ab9-186bfdfa2baf",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "CRAFTSMAN KITCHEN",
    "companyName": "CÔNG TY TNHH CRAFTSMAN KITCHEN COMPONENTS VIỆT NAM",
    "contactPhone": "037 574 1718",
    "address": "Lô số 3, đường số 5A, KCN Nhơn Trạch 2, Xã Nhơn Trạch, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "CHỊ HỒNG ",
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.628Z",
    "updatedAt": "2025-09-17T03:41:42.117Z"
  },
  {
    "id": "3fe43acf-6375-42c3-98d2-0489018cf80c",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HIỂU ĐỨC",
    "companyName": "CÔNG TY TNHH CHẾ BIẾN LÂM SẢN VÀ THƯƠNG MẠI HIỂU ĐỨC",
    "contactPhone": "0976170369",
    "address": "Thửa đất 1488, Tờ bản đồ 16, Khu Phố 6, Phường Thới Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Điệp",
      "googleMapsUrl": "https://maps.app.goo.gl/X6NEf8ZwypCLchVq8"
    },
    "createdAt": "2025-09-12T10:27:53.564Z",
    "updatedAt": "2025-09-16T04:02:14.197Z"
  },
  {
    "id": "3458273d-431a-489d-b7b9-4d0c3a0b0159",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "BẢO HƯNG",
    "companyName": "CÔNG TY TNHH BẢO HƯNG",
    "contactPhone": "0907784079",
    "address": "Thửa đất số 157, Tờ bản đồ số 15, Khu phố Khánh Long, Phường Tân Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Vũ",
      "googleMapsUrl": "https://maps.app.goo.gl/AZTbt48SLgRcMei59"
    },
    "createdAt": "2025-09-12T10:27:53.505Z",
    "updatedAt": "2025-09-16T03:35:09.737Z"
  },
  {
    "id": "6829492b-47dd-4f62-aef0-8a46f7014420",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "THỊNH VIỆT",
    "companyName": "CÔNG TY TNHH  SẢN XUẤT THỊNH VIỆT",
    "contactPhone": "0961793324",
    "address": "Số 54A/2 Đường ĐT 743, Khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Giáp",
      "googleMapsUrl": "https://maps.app.goo.gl/N8xfpJNPdFgdr14Z9"
    },
    "createdAt": "2025-09-12T10:27:53.435Z",
    "updatedAt": "2025-09-16T04:02:48.100Z"
  },
  {
    "id": "414100e0-db38-46dc-a655-1df7dd1a836e",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "AMAVI",
    "companyName": "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ NỘI THẤT AMAVI",
    "contactPhone": "0971016793",
    "address": "Số 61 - 63 Quốc Hương, Phường An Khánh, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Trân",
      "googleMapsUrl": "https://maps.app.goo.gl/RvuvCcmp3cGJQysv7"
    },
    "createdAt": "2025-09-12T10:27:53.319Z",
    "updatedAt": "2025-09-16T03:35:52.077Z"
  },
  {
    "id": "5df8ff9d-4bef-4d16-a90c-3b5c5664d313",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "VI NA G7",
    "companyName": "CÔNG TY CỔ PHẦN VI NA G7",
    "address": "Cụm Công Nghiệp Tam Phước 1, Khu Phố Long Khánh 3, Phường Tam Phước, Tỉnh Đồng Nai",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.252Z",
    "updatedAt": "2025-09-12T10:27:53.252Z"
  },
  {
    "id": "1b9b2e79-8e36-4eef-98a7-df7cad684760",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "SIBA",
    "companyName": "CÔNG TY CỔ PHẦN TẬP ĐOÀN CƠ KHÍ CÔNG NGHỆ CAO SIBA",
    "address": "99A1 Cộng Hòa, Phường Tân Sơn Nhất, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.190Z",
    "updatedAt": "2025-09-12T10:27:53.190Z"
  },
  {
    "id": "284fb7cd-f9f9-45c0-a0d5-c71e06efd70d",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NỘI THẤT SEN",
    "companyName": "CÔNG TY CỔ PHẦN TRANG TRÍ NỘI THẤT SEN",
    "contactPhone": "0362 594 920",
    "address": "2.01 Chung cư Orient Apartment số 331, Bến Vân Đồn, Phường Vĩnh Hội, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Tân",
      "googleMapsUrl": "https://maps.app.goo.gl/6ffsyU4bB8ZziNMo8"
    },
    "createdAt": "2025-09-12T10:27:53.131Z",
    "updatedAt": "2025-09-17T01:50:27.249Z"
  },
  {
    "id": "4d6e777d-d1a2-439a-a4bb-0b08125a7ad7",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "ARTIUS",
    "companyName": "CÔNG TY CỔ PHẦN THIẾT KẾ VÀ XÂY DỰNG ARTIUS",
    "address": "215 Nam Kỳ Khởi Nghĩa, Phường Xuân Hòa, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:53.023Z",
    "updatedAt": "2025-09-12T10:27:53.023Z"
  },
  {
    "id": "3a0375e8-c8a6-45af-ac21-886963640e15",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "AN PHÚC KHANG",
    "companyName": "CÔNG TY CỔ PHẦN NỘI THẤT AN PHÚC KHANG",
    "contactPhone": "0935 858 753",
    "address": "124/10 Đường HT45, Khu phố 1,  Phường Tân Thới Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "CHỊ NƯƠNG",
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:52.966Z",
    "updatedAt": "2025-09-16T04:02:56.656Z"
  },
  {
    "id": "7f135dd5-27c8-4e47-9e08-dff46d1a8670",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MODERN INS (kho Long An)",
    "companyName": "CÔNG TY CỔ PHẦN MODERN INS",
    "contactPhone": "0968-007-169",
    "address": "78, đường XTT20, tổ 1, ấp 5, Xã Bà Điểm, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Hạnh",
      "googleMapsUrl": "https://maps.app.goo.gl/QJBYJyauWzKefxSg7"
    },
    "createdAt": "2025-09-12T10:27:52.908Z",
    "updatedAt": "2025-09-17T01:53:14.499Z"
  },
  {
    "id": "1ddfa57c-58d4-4925-b98d-c0bd1f310a09",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "LÂM VIỆT",
    "companyName": "CÔNG TY CỔ PHẦN LÂM VIỆT",
    "address": "Thửa đất số 602, tờ bản đồ số 39, khu phố Khánh Lộc, Phường Tân Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:52.846Z",
    "updatedAt": "2025-09-12T10:27:52.846Z"
  },
  {
    "id": "9f16ef82-d691-48d8-8507-367deee7de83",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "HOMEMAS",
    "companyName": "CÔNG TY CỔ PHẦN HOMEMAS",
    "contactPhone": "0962962571",
    "address": "Số 181 Đường Nguyễn Hữu Cảnh, Phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Ngân",
      "googleMapsUrl": "https://maps.app.goo.gl/WT7umaLvmhTZ23SC6"
    },
    "createdAt": "2025-09-12T10:27:52.787Z",
    "updatedAt": "2025-09-16T04:03:58.675Z"
  },
  {
    "id": "d835acf7-c6dc-401e-b764-e5163edaf843",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ MINH DƯƠNG",
    "companyName": "CÔNG TY CỔ PHẦN GỖ MINH DƯƠNG",
    "address": "Số 93T/2, đường Phan Đình Giót, tổ 9, khu phố 1B, Phường An Phú, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Dễ",
      "googleMapsUrl": "https://maps.app.goo.gl/iJnEQMDnETmDYcdV9",
      "memo": "Giao vào kho ký nhận"
    },
    "createdAt": "2025-09-12T10:27:52.728Z",
    "updatedAt": "2025-09-17T01:51:19.429Z"
  },
  {
    "id": "e1bd872e-86f2-49dc-b7e3-09ed4d964570",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "GỖ ĐẠI THÀNH",
    "companyName": "CÔNG TY CỔ PHẦN CÔNG NGHỆ GỖ ĐẠI THÀNH",
    "address": "Quốc lộ 1A, Tổ 1, Khu vực 8, Phường Quy Nhơn Tây, Tỉnh Gia Lai, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:52.673Z",
    "updatedAt": "2025-09-12T10:27:52.673Z"
  },
  {
    "id": "bb5ea7cf-8fd6-4f78-a9d1-b00176fcbff5",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "MINH DƯƠNG CHU LAI",
    "companyName": "CÔNG TY CP GỖ MINH DƯƠNG CHU LAI",
    "address": "Lô số 10, đường số 4, KCN Bắc Chu Lai, Xã Núi Thành, Thành phố Đà Nẵng, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Anh Hiếu",
      "memo": "Giao xe tải"
    },
    "createdAt": "2025-09-12T10:27:52.605Z",
    "updatedAt": "2025-09-17T01:51:56.247Z"
  },
  {
    "id": "4ed485ab-da97-4097-aabd-11fd9be4d4a6",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "C.R.M.G",
    "companyName": "CHI NHÁNH CÔNG TY TNHH THƯƠNG MẠI XUẤT NHẬP KHẨU C.R.M.G",
    "contactPhone": "0901356256",
    "address": "Cụm công nghiệp Hố Nai 3, Phường Hố Nai, Tỉnh Đồng Nai, Việt Nam",
    "isActive": true,
    "metadata": {
      "pic": "Chị Thương",
      "googleMapsUrl": "https://maps.app.goo.gl/juohGYRoyfYKV84d8",
      "memo": "Kho nhận "
    },
    "createdAt": "2025-09-12T10:27:52.533Z",
    "updatedAt": "2025-09-16T03:19:58.266Z"
  },
  {
    "id": "83d42f84-ff43-4eb5-b134-b8850dacbe21",
    "clientId": "3096053f-9327-4c40-bf91-066d0edd7c7c",
    "name": "NỘI THẤT NGUYỄN LONG",
    "companyName": "CHI NHÁNH - CÔNG TY TNHH NỘI THẤT NGUYỄN LONG",
    "address": "Số 115, đường Tân An, Khu phố Tân An, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh, Việt Nam",
    "isActive": true,
    "metadata": {
      "googleMapsUrl": ""
    },
    "createdAt": "2025-09-12T10:27:52.478Z",
    "updatedAt": "2025-09-12T10:27:52.478Z"
  }
]
const count: Record<string, number> = {}
export const data = rawData.map(el => {
  let name = el.name.trim()
  count[name] = 1 + (count[name] || 0)
  if (count[name] > 1) {
    name = `${name} (${count[name]})`
    console.log('Dupplicated ' + name)
  }

  return {
    name: name.trim(),
    metadata: {
      companyName: el.companyName.trim(),
      googleMapsUrl: el.metadata.googleMapsUrl?.trim(),
      contactPhone: el?.contactPhone?.trim(),
      pic: el?.metadata?.pic?.trim(),
      memo: el?.metadata?.memo?.trim(),
      address: el?.address?.trim(),
    },
  }
})

// if (error) {
//   throw new Error('Dupplicated')
// }
