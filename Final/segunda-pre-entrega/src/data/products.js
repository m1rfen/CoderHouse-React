const data = [
  {
    id: 1,
    title: "Nike Revolution 6 Next Nature",
    price: "3990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/e043c3/www.lacancha.uy/lcanuy/bd49/webp/catalogo/DC3728_006_1/1920-1200/nike-revolution-6-next-nature-nike-revolution-6.jpg",
    discipline: "Running",
    model: "Revolution",
    Color: "Grey",
  },
  {
    id: 2,
    title: "Nike Revolution 6 Next Nature",
    price: "4190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5b2aea/www.lacancha.uy/lcanuy/8dc5/webp/catalogo/DC3728_401_1/800x800/nike-revolution-6-next-nature-nike-revolution-6.jpg",
    discipline: "Running",
    model: "Revolution",
    Color: "Blue",
  },
  {
    id: 3,
    title: "Nike Revolution 6 Next Nature",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/806dfd/www.lacancha.uy/lcanuy/dbcd/webp/catalogo/DC3728_005_1/800x800/nike-revolution-6-next-nature-nike-revolution-6-next-nature.jpg",
    discipline: "Running",
    model: "Revolution",
    Color: "Black",
  },
  {
    id: 4,
    title: "Nike Revolution 6 Next Nature",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/fe7fab/www.lacancha.uy/lcanuy/bf32/webp/catalogo/DC3728_402_1/800x800/nike-revolution-6-next-nature-nike-revolution-6-next-nature.jpg",
    discipline: "Running",
    model: "Revolution",
    Color: "Blue",
  },
  {
    id: 5,
    title: "Nike Revolution 6 Flyease Next Nature",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/a53084/www.lacancha.uy/lcanuy/aec8/webp/catalogo/DC8992_003_1/800x800/nike-revolution-6-flyease-next-nature-nike-revolution-6-flyease-next-nature.jpg",
    discipline: "Running",
    model: "Revolution",
    Color: "Black",
  },
  {
    id: 6,
    title: "Nike Flex Experience Run 11 Next Nature",
    price: "4490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/8915c2/www.lacancha.uy/lcanuy/a8e3/webp/catalogo/DD9284_001_1/800x800/nike-flex-experience-run-11-next-nature-nike-flex-experience-run-11-next-nature.jpg",
    discipline: "Running",
    model: "Experience",
    Color: "Black",
  },
  {
    id: 7,
    title: "Nike Downshifter 12",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/3ef9ea/www.lacancha.uy/lcanuy/1316/webp/catalogo/DD9293_005_1/800x800/nike-downshifter-12-nike-downshifter-12.jpg",
    discipline: "Running",
    model: "Downshifter",
    Color: "Black",
  },
  {
    id: 8,
    title: "Nike Downshifter 12",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/181e05/www.lacancha.uy/lcanuy/f21c/webp/catalogo/DD9293_006_1/800x800/nike-downshifter-12-nike-downshifter-12.jpg",
    discipline: "Running",
    model: "Downshifter",
    Color: "Lightblue",
  },
  {
    id: 9,
    title: "Nike Run Swift 2",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/57d905/www.lacancha.uy/lcanuy/7960/webp/catalogo/CU3517_001_1/800x800/nike-run-swift-2-nike-run-swift-2.jpg",
    discipline: "Running",
    model: "Swift",
    Color: "Black",
  },
  {
    id: 10,
    title: "Nike Run Swift 2",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/91fe57/www.lacancha.uy/lcanuy/a2a9/webp/catalogo/CU3517_004_1/800x800/nike-run-swift-2-nike-run-swift-2.jpg",
    discipline: "Running",
    model: "Swift",
    Color: "Black",
  },
  {
    id: 11,
    title: "Nike Quest 5",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/79c569/www.lacancha.uy/lcanuy/ccdc/webp/catalogo/DD0204_001_1/800x800/nike-quest-5-nike-quest-5.jpg",
    discipline: "Running",
    model: "Quest",
    Color: "Black",
  },
  {
    id: 12,
    title: "Nike Zoom Span 4",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/dc6588/www.lacancha.uy/lcanuy/83a6/webp/catalogo/DC8996_002_1/800x800/nike-zoom-span-4-nike-zoom-span-4.jpg",
    discipline: "Running",
    model: "Zoom",
    Color: "Black",
  },
  {
    id: 13,
    title: "Nike Zoom Span 4",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/082bfd/www.lacancha.uy/lcanuy/b204/webp/catalogo/DC8996_001_1/800x800/nike-zoom-span-4-nike-zoom-span-4.jpg",
    discipline: "Running",
    model: "Zoom",
    Color: "Black",
  },
  {
    id: 14,
    title: "Nike Renew Run 3",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9a0f8b/www.lacancha.uy/lcanuy/4765/webp/catalogo/DC9413_600_1/800x800/nike-renew-run-3-nike-renew-run-3.jpg",
    discipline: "Running",
    model: "Renew",
    Color: "Red",
  },
  {
    id: 15,
    title: "Nike Air Zoom Pegasus 38",
    price: "5990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/c9ef0b/www.lacancha.uy/lcanuy/c425/webp/catalogo/CW7356_008_1/800x800/nike-air-zoom-pegasus-38-nike-air-zoom-pegasus-38.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Black",
  },
  {
    id: 16,
    title: "Nike Renew Run 3",
    price: "5990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/0c28aa/www.lacancha.uy/lcanuy/bbb3/webp/catalogo/DC9413_005_1/800x800/nike-renew-run-3-nike-renew-run-3.jpg",
    discipline: "Running",
    model: "Renew",
    Color: "Cream",
  },
  {
    id: 17,
    title: "Nike Zoom Winflo 8",
    price: "6190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/489fdc/www.lacancha.uy/lcanuy/e516/webp/catalogo/CW3419_101_1/800x800/nike-zoom-winflo-8-nike-winflo-8.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "White",
  },
  {
    id: 18,
    title: "Nike Zoom Winflo 8",
    price: "6190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/b6dbb1/www.lacancha.uy/lcanuy/1dd4/webp/catalogo/CW3419_401_1/800x800/nike-zoom-winflo-8-nike-winflo-8.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Blue",
  },
  {
    id: 19,
    title: "Nike Zoom Prevail",
    price: "6690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/997f48/www.lacancha.uy/lcanuy/9e4e/webp/catalogo/DA1102_004_1/800x800/nike-zoom-prevail-nike-zoom-prevail.jpg",
    discipline: "Running",
    model: "Prevail",
    Color: "Grey",
  },
  {
    id: 20,
    title: "Nike Zoom Winflo 8",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/013006/www.lacancha.uy/lcanuy/7822/webp/catalogo/CW3419_004_1/800x800/nike-zoom-winflo-8-nike-zoom-winflo-8.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Grey",
  },
  {
    id: 21,
    title: "Nike Zoom Winflo 8",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/c4a2b7/www.lacancha.uy/lcanuy/6617/webp/catalogo/CW3419_006_1/800x800/nike-zoom-winflo-8-nike-winflo-8.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Black",
  },
  {
    id: 22,
    title: "Nike Zoom Winflo 8",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/a3923b/www.lacancha.uy/lcanuy/e757/webp/catalogo/CW3419_010_1/800x800/nike-zoom-winflo-8-nike-zoom-winflo-8.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Grey",
  },
  {
    id: 23,
    title: "Nike Air Zoom Pegasus 38",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/ebc35c/www.lacancha.uy/lcanuy/b2fc/webp/catalogo/CW7356_010_1/800x800/nike-air-zoom-pegasus-38-nike-air-zoom-pegasus-38.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Black",
  },
  {
    id: 24,
    title: "Nike Air Zoom Pegasus 38",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/6e06cf/www.lacancha.uy/lcanuy/630e/webp/catalogo/CW7356_700_1/800x800/nike-air-zoom-pegasus-38-nike-air-zoom-pegasus-38.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Green",
  },
  {
    id: 25,
    title: "Nike Air Winflo 9",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/f7311c/www.lacancha.uy/lcanuy/b725/webp/catalogo/DD6203_001_1/800x800/nike-air-winflo-9-nike-air-winflo-9.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Black",
  },
  {
    id: 26,
    title: "Nike Air Winflo 9",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/fa731e/www.lacancha.uy/lcanuy/2bc0/webp/catalogo/DD6203_400_1/800x800/nike-air-winflo-9-nike-air-winflo-9.jpg",
    discipline: "Running",
    model: "Winflo",
    Color: "Blue",
  },
  {
    id: 27,
    title: "Nike Air Zoom Structure 24",
    price: "7790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/8c099a/www.lacancha.uy/lcanuy/7ead/webp/catalogo/DA8535_400_1/800x800/nike-air-zoom-structure-24-nike-air-zoom-structure-24.jpg",
    discipline: "Running",
    model: "Structure",
    Color: "Blue",
  },
  {
    id: 28,
    title: "Nike Air Zoom Structure 24",
    price: "7790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/eb7e78/www.lacancha.uy/lcanuy/4f91/webp/catalogo/DA8535_002_1/800x800/nike-air-zoom-structure-24-nike-air-zoom-structure-24.jpg",
    discipline: "Running",
    model: "Structure",
    Color: "Black",
  },
  {
    id: 29,
    title: "Nike Air Zoom Structure 24",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/61b879/www.lacancha.uy/lcanuy/f9cd/webp/catalogo/DA8535_401_1/800x800/nike-air-zoom-structure-24-nike-air-zoom-structure-24.jpg",
    discipline: "Running",
    model: "Structure",
    Color: "Blue",
  },
  {
    id: 30,
    title: "Nike Air Zoom Pegasus 39",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/40e618/www.lacancha.uy/lcanuy/80ca/webp/catalogo/DH4071_001_1/800x800/nike-air-zoom-pegasus-39-nike-air-zoom-pegasus-39.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Black",
  },
  {
    id: 31,
    title: "Nike Air Zoom Pegasus 39",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/62e292/www.lacancha.uy/lcanuy/09f1/webp/catalogo/DH4071_003_1/800x800/nike-air-zoom-pegasus-39-nike-air-zoom-pegasus-39.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Grey",
  },
  {
    id: 32,
    title: "Nike Air Zoom Pegasus 39",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/62b5e4/www.lacancha.uy/lcanuy/7a9c/webp/catalogo/DH4071_007_1/800x800/nike-air-zoom-pegasus-39-nike-air-zoom-pegasus-39.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "White",
  },
  {
    id: 33,
    title: "Nike Air Zoom Pegasus Flyease",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9a0709/www.lacancha.uy/lcanuy/2c12/webp/catalogo/DJ7381_001_1/800x800/nike-air-zoom-pegasus-flyease-nike-air-zoom-pegasus-flyease.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Black",
  },
  {
    id: 34,
    title: "Nike Air Zoom Pegasus Flyease",
    price: "7990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9a0709/www.lacancha.uy/lcanuy/2c12/webp/catalogo/DJ7381_001_1/800x800/nike-air-zoom-pegasus-flyease-nike-air-zoom-pegasus-flyease.jpg",
    discipline: "Running",
    model: "Pegasus",
    Color: "Black",
  },
  {
    id: 35,
    title: "Nike Air Zoom Vomero 16",
    price: "9190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/263e72/www.lacancha.uy/lcanuy/b225/webp/catalogo/DA7245_004_1/800x800/nike-air-zoom-vomero-16-nike-air-zoom-vomero-16.jpg",
    discipline: "Running",
    model: "Vomero",
    Color: "Grey",
  },
  {
    id: 36,
    title: "Nike React Infinity Run Flyknit 3",
    price: "9290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/c5dbcb/www.lacancha.uy/lcanuy/1354/webp/catalogo/DH5392_001_1/800x800/nike-reac-infinity-run-flyknit-3-nike-reac-infinity-run-flyknit-3.jpg",
    discipline: "Running",
    model: "React",
    Color: "Black",
  },
  {
    id: 37,
    title: "Nike Air Zoom Vomero 16",
    price: "9490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/aee50a/www.lacancha.uy/lcanuy/5fa4/webp/catalogo/DA7245_001_1/800x800/nike-air-zoom-vomero-16-nike-air-zoom-vomero-16.jpg",
    discipline: "Running",
    model: "Vomero",
    Color: "Black",
  },
  {
    id: 38,
    title: "Nike Air Zoom Vomero 16",
    price: "9490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/be9001/www.lacancha.uy/lcanuy/0e84/webp/catalogo/DA7245_005_1/800x800/nike-air-zoom-vomero-16-nike-air-zoom-vomero-16.jpg",
    discipline: "Running",
    model: "Vomero",
    Color: "Grey",
  },
  {
    id: 39,
    title: "Nike Air Zoom Vomero 16",
    price: "9490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/0e372b/www.lacancha.uy/lcanuy/6b19/webp/catalogo/DA7245_006_1/800x800/nike-air-zoom-vomero-16-nike-air-zoom-vomero-16.jpg",
    discipline: "Running",
    model: "Vomero",
    Color: "Cream",
  },
  {
    id: 40,
    title: "Nike Superfly 8 Academy Tf",
    price: "6190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/6f0d37/www.lacancha.uy/lcanuy/014a/webp/catalogo/DJ2878_054_1/800x800/nike-superfly-8-academy-tf-nike-superfly-8-academy-tf.jpg",
    discipline: "Soccer",
    model: "Superfly",
    Color: "White",
  },
  {
    id: 41,
    title: "Nike Vapor 14 Academy Tf",
    price: "5490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/96df6f/www.lacancha.uy/lcanuy/81cc/webp/catalogo/DJ2879_007_1/800x800/nike-vapor-14-academy-tf-nike-vapor-14-academy-tf.jpg",
    discipline: "Soccer",
    model: "Vapor",
    Color: "Black",
  },
  {
    id: 42,
    title: "Nike Zoom Vapor 14 Pro Tf",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5d7aeb/www.lacancha.uy/lcanuy/1419/webp/catalogo/DJ2851_484_1/800x800/nike-zoom-vapor-14-pro-tf-nike-zoom-vapor-14-pro-tf.jpg",
    discipline: "Soccer",
    model: "Vapor",
    Color: "Lightblue",
  },
  {
    id: 43,
    title: "Nike Phantom Gt2 Academy Tf",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/af7342/www.lacancha.uy/lcanuy/7f70/webp/catalogo/DC0803_008_1/800x800/nike-phantom-gt2-academy-tf-nike-phantom-gt2-academy-tf.jpg",
    discipline: "Soccer",
    model: "Phantom",
    Color: "Black",
  },
  {
    id: 44,
    title: "Nike Superfly 8 Academy Tf",
    price: "5490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/37e8e1/www.lacancha.uy/lcanuy/6e40/webp/catalogo/DJ2878_484_1/800x800/nike-superfly-8-academy-tf-nike-superfly-8-academy-tf.jpg",
    discipline: "Soccer",
    model: "Superfly",
    Color: "Lightblue",
  },
  {
    id: 45,
    title: "Nike Legend 9 Academy Tf",
    price: "4390",
    stock: 99,
    img: "https://f.fcdn.app/imgs/67165a/www.lacancha.uy/lcanuy/b35d/webp/catalogo/DA1191_176_1/800x800/nike-legend-9-academy-tf-nike-legend-9-academy-tf.jpg",
    discipline: "Soccer",
    model: "Legend",
    Color: "White",
  },
  {
    id: 46,
    title: "Nike React Legend 9 Pro Tf",
    price: "6590",
    stock: 99,
    img: "https://f.fcdn.app/imgs/14fa05/www.lacancha.uy/lcanuy/dbc1/webp/catalogo/DA1192_176_1/800x800/nike-react-legend-9-pro-tf-nike-react-legend-9-pro-tf.jpg",
    discipline: "Soccer",
    model: "Legend",
    Color: "White",
  },
  {
    id: 47,
    title: "Nike Superfly 8 Academy Km Tf",
    price: "6190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/de15c4/www.lacancha.uy/lcanuy/f061/webp/catalogo/DB2868_506_1/800x800/nike-superfly-8-academy-km-tf-nike-superfly-8-academy-km-tf.jpg",
    discipline: "Soccer",
    model: "Superfly",
    Color: "Violet",
  },
  {
    id: 48,
    title: "Nike Superfly 8 Academy Tf",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/7491e9/www.lacancha.uy/lcanuy/22ab/webp/catalogo/CV0953_760_1/800x800/nike-superfly-8-academy-tf-nike-superfly-8-academy-tf.jpg",
    discipline: "Soccer",
    model: "Superfly",
    Color: "Yellow",
  },
  {
    id: 49,
    title: "Nike Phantom Gt2 Academy Tf",
    price: "4790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9ce793/www.lacancha.uy/lcanuy/23d3/webp/catalogo/DC0803_167_1/800x800/nike-phantom-gt2-academy-tf-nike-phantom-gt2-academy-tf.jpg",
    discipline: "Soccer",
    model: "Phantom",
    Color: "White",
  },
  {
    id: 50,
    title: "Nike Mercurial Superfly 7 Tf",
    price: "4490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/0d46c7/www.lacancha.uy/lcanuy/e083/webp/catalogo/AT7978_801_1/800x800/nike-mercurial-superfly-7-tf-nike-mercurial-superfly-7-tf.jpg",
    discipline: "Soccer",
    model: "Mercurial",
    Color: "Orange",
  },
  {
    id: 51,
    title: "Nike Superrep Cycle",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/fed994/www.lacancha.uy/lcanuy/f3c8/webp/catalogo/CW2191_008_1/800x800/nike-superrep-cycle-nike-superrep-cycle.jpg",
    discipline: "Training",
    model: "Superrep",
    Color: "Red",
  },
  {
    id: 52,
    title: "Nike Defy All Day",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/213930/www.lacancha.uy/lcanuy/4764/webp/catalogo/DJ1196_002_1/800x800/nike-defy-all-day-nike-defy-all-day.jpg",
    discipline: "Training",
    model: "Defy",
    Color: "Black",
  },
  {
    id: 53,
    title: "Nike Air Max Alpha Trainer 4",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/bf1e04/www.lacancha.uy/lcanuy/7a16/webp/catalogo/CW3396_034_1/800x800/nike-air-max-alpha-trainer-4-nike-air-max-alpha-trainer-4.jpg",
    discipline: "Training",
    model: "Air Max",
    Color: "Black",
  },
  {
    id: 54,
    title: "Nike Air Max Alpha Trainer 5",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/1cd86c/www.lacancha.uy/lcanuy/1370/webp/catalogo/DM0829_001_1/800x800/nike-air-max-alpha-trainer-5-nike-air-max-alpha-trainer-5.jpg",
    discipline: "Training",
    model: "Air Max",
    Color: "Black",
  },
  {
    id: 55,
    title: "Nike Air Max Alpha Trainer 5",
    price: "5690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5cc17b/www.lacancha.uy/lcanuy/9392/webp/catalogo/DM0829_400_2/800x800/nike-air-max-alpha-trainer-5-nike-air-max-alpha-trainer-5.jpg",
    discipline: "Training",
    model: "Air Max",
    Color: "Blue",
  },
  {
    id: 56,
    title: "Nike Superrep Go 3 Flyknit",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/6d0d97/www.lacancha.uy/lcanuy/4f9e/webp/catalogo/DH3394_010_1/800x800/nike-superrep-go-3-flyknit-nike-superrep-go-3-flyknit.jpg",
    discipline: "Training",
    model: "Superrep",
    Color: "Black",
  },
  {
    id: 57,
    title: "Nike Victori One Shower Sid",
    price: "1890",
    stock: 99,
    img: "https://f.fcdnapp/imgs/b7c452/www.lacancha.uy/lcanuy/d7ab/webp/catalogo/CZ5478_001_1/800x800/nike-victori-one-shower-sid-nike-victori-one-shower-sid.jpg",
    discipline: "Fashion",
    model: "Victori",
    Color: "Black",
  },
  {
    id: 58,
    title: "Nike Victori One Shower Sid",
    price: "1890",
    stock: 99,
    img: "https://f.fcdnapp/imgs/87f7e4/www.lacancha.uy/lcanuy/6a6a/webp/catalogo/CZ5478_100_1/800x800/nike-victori-one-shower-sid-nike-victori-one-shower-sid.jpg",
    discipline: "Fashion",
    model: "Victori",
    Color: "White",
  },
  {
    id: 59,
    title: "Nike Offcourt Sid",
    price: "2490",
    stock: 99,
    img: "https://f.fcdnapp/imgs/b1a9a3/www.lacancha.uy/lcanuy/451e/webp/catalogo/BQ4639_001_1/800x800/nike-offcourt-sid-nike-offcourt-sid.jpg",
    discipline: "Fashion",
    model: "Offcourt",
    Color: "Black",
  },
  {
    id: 60,
    title: "Nike Court Legacy S50",
    price: "3490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/17caba/www.lacancha.uy/lcanuy/ec2e/webp/catalogo/DJ1999_800_1/800x800/nike-court-legacy-s50-nike-court-legacy-s50.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "Orange",
  },
  {
    id: 61,
    title: "Nike Burrow",
    price: "3790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/371478/www.lacancha.uy/lcanuy/fe58/webp/catalogo/DC1456_001_1/800x800/nike-burrow-nike-burrow.jpg",
    discipline: "Fashion",
    model: "Burrow",
    Color: "Black",
  },
  {
    id: 62,
    title: "Nike Burrow Cargo",
    price: "3790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/917eca/www.lacancha.uy/lcanuy/2d04/webp/catalogo/DC1456_300_1/800x800/nike-burrow-nike-burrow-cargo.jpg",
    discipline: "Fashion",
    model: "Burrow",
    Color: "Green",
  },
  {
    id: 63,
    title: "Nike Court Royale 2 Next Nature",
    price: "3890",
    stock: 99,
    img: "https://f.fcdn.app/imgs/f46643/www.lacancha.uy/lcanuy/a05b/webp/catalogo/DH3160_101_1/800x800/nike-court-royale-2-next-nature-nike-court-royale-2-next-nature.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "White",
  },
  {
    id: 64,
    title: "Nike Tanjun M2z2",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/e06b60/www.lacancha.uy/lcanuy/ca9b/webp/catalogo/DJ6258_002_1/800x800/nike-tanjun-nike-tanjun-m2z2.jpg",
    discipline: "Fashion",
    model: "Tanjun",
    Color: "Grey",
  },
  {
    id: 65,
    title: "Nike Court Legacy Next Nature",
    price: "4490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/d220f9/www.lacancha.uy/lcanuy/e71f/webp/catalogo/DH3162_001_1/800x800/nike-court-legacy-next-nature-nike-court-legacy-next-nature.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "Black",
  },
  {
    id: 66,
    title: "Nike Court Legacy Next Nature",
    price: "4490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5111f0/www.lacancha.uy/lcanuy/bec6/webp/catalogo/DH3162_100_1/800x800/nike-court-legacy-next-nature-nike-court-legacy-next-nature.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "White",
  },
  {
    id: 67,
    title: "Nike Court Legacy Next Nature",
    price: "4490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5111f0/www.lacancha.uy/lcanuy/bec6/webp/catalogo/DH3162_100_1/800x800/nike-court-legacy-next-nature-nike-court-legacy-next-nature.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "White",
  },
  {
    id: 68,
    title: "Nike Court Vision Low",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/dd6307/www.lacancha.uy/lcanuy/c88c/webp/catalogo/DH2987_101_1/800x800/nike-court-vision-low-nike-court-vision-low.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "White",
  },
  {
    id: 69,
    title: "Nike Waffle Debut",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/ba4989/www.lacancha.uy/lcanuy/ccea/webp/catalogo/DH9522_002_1/800x800/nike-waffle-debut-nike-waffle-debut.jpg",
    discipline: "Fashion",
    model: "Waffle",
    Color: "Black",
  },
  {
    id: 70,
    title: "Nike Tanjun",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/e01db7/www.lacancha.uy/lcanuy/3306/webp/catalogo/DJ6258_001_1/800x800/nike-tanjun-nike-tanjun.jpg",
    discipline: "Fashion",
    model: "Tanjun",
    Color: "Black",
  },
  {
    id: 71,
    title: "Nike Tanjun M2z2",
    price: "4690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/66d87d/www.lacancha.uy/lcanuy/50fe/webp/catalogo/DJ6258_003_1/800x800/nike-tanjun-nike-tanjun-m2z2.jpg",
    discipline: "Fashion",
    model: "Tanjun",
    Color: "Black",
  },
  {
    id: 72,
    title: "Nike Venture Runner",
    price: "5190",
    stock: 99,
    img: "https://f.fcdn.app/imgs/cfaa0d/www.lacancha.uy/lcanuy/0e3a/webp/catalogo/CQ4557_001_1/800x800/nike-venture-runner-nike-venture-runner.jpg",
    discipline: "Fashion",
    model: "Venture",
    Color: "Black",
  },
  {
    id: 73,
    title: "Nike Court Legacy Suede",
    price: "4290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/d34889/www.lacancha.uy/lcanuy/25ee/webp/catalogo/DH0956_001_1/800x800/nike-court-legacy-suede-nike-court-legacy-suede.jpg",
    discipline: "Fashion",
    model: "Court",
    Color: "Black",
  },
  {
    id: 74,
    title: "Nike Air Max Sc",
    price: "5490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/2cd98d/www.lacancha.uy/lcanuy/7e0d/webp/catalogo/CW4555_002_1/800x800/nike-air-max-sc-nike-air-max-sc.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Black",
  },
  {
    id: 75,
    title: "Nike Air Max Sc",
    price: "5490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/ab1697/www.lacancha.uy/lcanuy/2eda/webp/catalogo/DH9636_100_1/800x800/nike-air-max-sc-nike-air-max-sc.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "White",
  },
  {
    id: 76,
    title: "Nike Manoa Leather",
    price: "6290",
    stock: 99,
    img: "https://f.fcdn.app/imgs/8ed5b7/www.lacancha.uy/lcanuy/d012/webp/catalogo/454350_003_1/800x800/nike-manoa-leather-nike-manoa-leather.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Black",
  },
  {
    id: 77,
    title: "Nike Air Max Excee",
    price: "6490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/e061e6/www.lacancha.uy/lcanuy/d285/webp/catalogo/CD4165_015_1/800x800/nike-air-max-excee-nike-air-max-excee.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "White",
  },
  {
    id: 78,
    title: "Nike Air Max Excee",
    price: "6490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9bd8b5/www.lacancha.uy/lcanuy/8b0f/webp/catalogo/CD4165_016_1/800x800/nike-air-max-excee-nike-air-max-excee.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Black",
  },
  {
    id: 79,
    title: "Nike Air Max Systm",
    price: "6490",
    stock: 99,
    img: "https://f.fcdn.app/imgs/f1f82e/www.lacancha.uy/lcanuy/158e/webp/catalogo/DM9537_100_1/800x800/nike-air-max-systm-nike-air-max-systm.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "White",
  },
  {
    id: 80,
    title: "Nike Air Max Excee Pr",
    price: "6690",
    stock: 99,
    img: "https://f.fcdn.app/imgs/992aca/www.lacancha.uy/lcanuy/e09d/webp/catalogo/CD4165_018_1/800x800/nike-air-max-excee-nike-air-max-excee-pr.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Grey",
  },
  {
    id: 81,
    title: "Nike Air Max Ap",
    price: "6790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/bc2e2d/www.lacancha.uy/lcanuy/b56f/webp/catalogo/CU4826_004_1/800x800/nike-air-max-ap-nike-air-max-ap.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Cream",
  },
  {
    id: 82,
    title: "Nike Air Max Ap",
    price: "6790",
    stock: 99,
    img: "https://f.fcdn.app/imgs/9821f1/www.lacancha.uy/lcanuy/e2f7/webp/catalogo/CU4826_006_1/800x800/nike-air-max-ap-nike-air-max-ap.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Grey",
  },
  {
    id: 83,
    title: "Nike Air Max Infinity 2",
    price: "6990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/aa5e20/www.lacancha.uy/lcanuy/2bb5/webp/catalogo/CU9452_005_1/800x800/nike-air-max-infinity-2-nike-air-max-infinity-2.jpg",
    discipline: "Fashion",
    model: "Air Max",
    Color: "Brown",
  },
  {
    id: 84,
    title: "Nike Vapor Lite Hard Court",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/17d7bf/www.lacancha.uy/lcanuy/6e7e/webp/catalogo/DC3432_008_1/800x800/nike-vapor-lite-hard-court-nike-vapor-lite-hard-court.jpg",
    discipline: "Tenis",
    model: "Vapor",
    Color: "Black",
  },
  {
    id: 85,
    title: "Nike Vapor Lite Hard Court",
    price: "4990",
    stock: 99,
    img: "https://f.fcdn.app/imgs/5e37db/www.lacancha.uy/lcanuy/6fe0/webp/catalogo/DC3432_125_1/800x800/nike-vapor-lite-hard-court-nike-vapor-lite-hard-court.jpg",
    discipline: "Tenis",
    model: "Vapor",
    Color: "White",
  },
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300);
  });
}

export function getOneProduct(idParams) {
  return new Promise((resolve) => {
    let productReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(productReq), 300);
  });
}

export function getProductsByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterProducts = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterProducts), 300);
  });
}