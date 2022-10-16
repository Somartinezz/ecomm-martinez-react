const dataFromDB = [
    {
        id: 1,
        titulo: "Sonny ss camiseta",
        precio: '$9500',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_cb9e0139-b6c3-486c-981e-d16d183e2638_750x.jpg?v=1659044716",
        descripción: "single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you'll probably love it too.",
        category: "shirt",
        tipo: 'Shirt',
        stock:12
    },
    {
        id: 2,
        titulo: "Drew House ss camiseta de práctica biscotti",
        precio: '$20000',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_121c4f11-d5e6-40e2-bf61-0839c5ce8d16_750x.jpg?v=1659044359",
        descripción: "single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you'll probably love it too.",
        category: "shirt",
        tipo: 'Shirt',
        stock:12
    },
    {
        id: 3,
        titulo: "camiseta secreta ss ditsy floral",
        precio: '$9500',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY8976_750x.jpg?v=1658437010",
        descripción: "single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you'll probably love it too.",
        category: "shirt",
        tipo: 'Shirt',
        stock:10
    },
    {
        id: 4,
        titulo: "dulce boxy ss camiseta azul marino",
        precio: '$11150',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/16_b6ec9888-1eef-49eb-abe3-43e0275d18db_750x.jpg?v=1657582335",
        descripción: "single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you'll probably love it too.",
        category: "shirt",
        tipo: 'Shirt',
        stock:8
    },  
    {
        id: 5,
        titulo: "Camiseta secret ss azul marino a rayas",
        precio: '$11150',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_8aa88944-5392-479a-97a9-dcbcaafd7d50_750x.jpg?v=1657583173",
        descripción: "single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you'll probably love it too.",
        category: "shirt",
        tipo: 'Shirt',
        stock:4
    },
    {
        id: 6,
        titulo: "Carpintero jean pintado añil",
        precio: '$31600',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_60c900e9-b772-4bee-8dc1-bdc6c19418e6_750x.jpg?v=1658436158",
        descripción: "classic cotton denim woven from mid-weight and durable fabric that softens with wear. available in wide leg, tapered and carpenter fits across a palette of 90's inspired colors and washes. since when did you ever question denim?",
        category: "pants",
        tipo: 'Pants',
        stock:6
    },
    {
        id: 7,
        titulo: "carpintero jean distressed vintage indigo",
        precio: '$31660',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_b259df28-d3ab-4010-b998-2a8af5833c7e_1680x.jpg?v=1648505202",
        descripción: 'classic cotton denim woven from mid-weight and durable fabric that softens with wear. available in wide leg, tapered and carpenter fits across a palette of 90s inspired colors and washes. since when did you ever question denim?',
        category: "pants",
        tipo: 'Pants',
        stock:0
    },
    {
        id: 8,
        titulo: "carpenter jean camarillo wash",
        precio: '$31600',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_ddbf192f-a75c-4922-ad63-274246887608_750x.jpg?v=1659044249",
        descripción: "Cloud White / Gold Metallic / Cloud White",
        category: "pants",
        tipo: 'Pants',
        stock:2
    },
    {
        id: 9,
        titulo: "scribble hoodie faded maroon",
        precio: '$23700',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/1_348fcf0f-d18c-4673-97bd-6cb709d60899_750x.jpg?v=1659044632",
        descripción:'mid-weight cotton that s been garment washed. the result is a super soft, breathable and comfy feel. ok fun fact, we are all wearing the valley fleece when we are lounging on the couch listening to music together.',
        category: "hoodie",
        tipo: 'Hoodie',
        stock:1
    },
    {
        id: 10,
        titulo: "secret hoodie navy pinstripe",
        precio: '$23700',
        imagen: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/49_750x.jpg?v=1657583124",
        descripción: 'mid-weight cotton that s been garment washed. the result is a super soft, breathable and comfy feel. ok fun fact, we are all wearing the valley fleece when we are lounging on the couch listening to music together.',
        category: "hoodie",
        tipo: 'Hoodie',
        stock:5
    },
    {
        id: 11,
        titulo: "Sketch mascot crewneck hot pink",
        precio: '$22800',
        imagen:"https://cdn.shopify.com/s/files/1/0133/1907/7947/products/FEB18FLATS-15_750x.jpg?v=1644868072",
        descripción: 'mid-weight cotton that s been garment washed. the result is a super soft, breathable and comfy feel. ok fun fact, we are all wearing the valley fleece when we are lounging on the couch listening to music together.',
        category: "hoodie",
        tipo: 'Hoodie',
        stock:5
    },
    {
        id: 12,
        titulo: "Sketch mascot crewneck brown",
        precio: '$22800',
        imagen:"https://cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3229_750x.jpg?v=1648505082",
        descripción: 'mid-weight cotton that s been garment washed. the result is a super soft, breathable and comfy feel. ok fun fact, we are all wearing the valley fleece when we are lounging on the couch listening to music together.',
        category: "hoodie",
        tipo: 'Hoodie',
        stock:5
    },
    {
        id: 13,
        titulo: "Camiseta ls hug de Drew House gris jaspeado",
        precio: '$13100',
        imagen:"https://cdn.shopify.com/s/files/1/0133/1907/7947/products/ANDY3312_750x.jpg?v=1648505053",
        descripción: 'single knit yarns woven to create a mid-weight yet soft fabric with a nice drape. an everyday staple for a daily drew fit. we custom wove it to make sure that we love it, and so you all probably love it too.',
        category: "hoodie",
        tipo: 'Hoodie',
        stock:8
    },
    {
        id: 14,
        titulo: "Corduroy relaxed fit chino chaz brown",
        precio: '$24400',
        imagen:"https://cdn.shopify.com/s/files/1/0133/1907/7947/products/ce03-404d-add6-89cc4ef8d94e_750x.jpg?v=1658436336",
        descripción: 'did you know corduroy was only for royals at one point? heavyweight yet breathable fabric ideal for cool, cozy days. soft and durable like your favorite blanket. garment washed to match the mood of any season.',
        category: "pants",
        tipo: 'Pants',
        stock:4
    },
    {
        id: 15,
        titulo: "Tapered leg jean otsego wash",
        precio: '$56900',
        imagen:"https://cdn.shopify.com/s/files/1/0133/1907/7947/products/AUG17-2_750x.jpg?v=1660765571",
        descripción: 'classic cotton denim woven from mid-weight and durable fabric that softens with wear. available in wide leg, tapered and carpenter fits across a palette of 90s inspired colors and washes. since when did you ever question denim?',
        category: "pants",
        tipo: 'Pants',
        stock:2
    }

];

export default dataFromDB;