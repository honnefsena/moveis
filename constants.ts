import { FurnitureItem } from './types';

const FURNITURE_DATA = [   
  {
    "titulo": "Forno Elétrico de Bancada Muller Vidro Espelhado 44 litros",
    "preco": "R$ 400",
    "id": "861525456363554",
    "thumbnail": "https://scontent.fbnu9-1.fna.fbcdn.net/v/t39.84726-6/594781049_4225506747708131_8172035992762440817_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260_tt6&_nc_cat=108&_nc_sid=92e707&_nc_eui2=AeGt7EJaeONdkwFsGlxcPSClAPDwNZ3RXUcA8PA1ndFdR61eEV6TG1vUsY3prgZ363AysQXPsNwZCYnVZHWVpWGa&_nc_ohc=oDdh-aOFIxcQ7kNvwELzbcL&_nc_oc=Adk4MWWQ66kZ3QK2O1PT1BVl_bQ1lKG8i29wFGNBb-r4iY3UhqV5vTNmnTjdscCdJL--gUuPVZ1nXa-ID_KBc1Uj&_nc_zt=14&_nc_ht=scontent.fbnu9-1.fna&_nc_gid=x-fb8VPUcUOBkGhGD6OyRQ&oh=00_Afk0W70EjitTz14PFBRba727YFcgavL5QrELS4TEUVJEHg&oe=693CA329"
  },
  {
    "titulo": "Sapateira / Armário Multiuso – 2 Portas + Espelho + 1 Gaveta + 6 Prateleiras",
    "preco": "R$ 400",
    "id": "1480560543034069",
    "thumbnail": "https://scontent.fbnu11-1.fna.fbcdn.net/v/t39.84726-6/591749800_1900109643918465_2851622800840945678_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=106&_nc_sid=92e707&_nc_eui2=AeGF_zvg5RH81kcDvogWEK5SsppqWhvlodiymmpaG-Wh2NwaF4OtGCkB2m5Y-AYXBE5Gc-zcpA9uQZ0GHw824lte&_nc_ohc=T53-NffHHFsQ7kNvwHenf_s&_nc_oc=AdnmCIMOnBfG3hiroyp2HDA6pqaovNo1Xw5SMe0eZHhqEtZsRZryAenRCzeNzO8VnyHvzFH-MuMaiZND88ZNJM05&_nc_zt=14&_nc_ht=scontent.fbnu11-1.fna&_nc_gid=x-fb8VPUcUOBkGhGD6OyRQ&oh=00_AfkUkjNZqq-wGL0oEZfRX0wIUNCRHYoy6VZJcRI-r2tyOw&oe=693CB410"
  },
  {
    "titulo": "Guarda-Roupa Casal | 2 Portas de Correr + Espelho + 6 Gavetas",
    "preco": "R$ 1.100",
    "id": "729974456250951",
    "thumbnail": "https://scontent.fbnu9-1.fna.fbcdn.net/v/t39.84726-6/594062178_1172142861764223_8949948739676483916_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260_tt6&_nc_cat=110&_nc_sid=92e707&_nc_eui2=AeHAPkObaqAPD7KhbUCfKWVqvgtOcj5M-qa-C05yPkz6pqj3wa0zZajDqmCSXeWiyCsfJdJ01YjP47w-6xAiLe1c&_nc_ohc=bYcbE-Mo6CsQ7kNvwFNG3MJ&_nc_oc=AdmTkQscN2HGgc1sKjlAdh6PfroQQpTVQdIAEKUD3dCzGN3r0NxKPhSQstjOawZPNAUZ3PHAI8Y2cJln-xFEttGR&_nc_zt=14&_nc_ht=scontent.fbnu9-1.fna&_nc_gid=x-fb8VPUcUOBkGhGD6OyRQ&oh=00_Aflvu2ZL5r938KuYkK8DXe6IMb74D8Gd4209sXBRlOd8Bw&oe=693C88FF"
  },
  {
    "titulo": "Nicho / Aparador para Lava e Seca – Moderno e Super Funcional!",
    "preco": "R$ 150",
    "id": "671353785910967",
    "thumbnail": "https://scontent.fbnu11-1.fna.fbcdn.net/v/t39.84726-6/592510134_1256219696553044_1087077429415574027_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=107&_nc_sid=92e707&_nc_eui2=AeETe4lFDBou8bw-yT0gKG8pcBsfxKYo_41wGx_Epij_jY5j_5eWQrocZfvrO7RUH2U7LzrIMsTSpy3CS0NWfIJn&_nc_ohc=AzHONqrrAjcQ7kNvwGQn0Ud&_nc_oc=AdnLw35fiQxlpJ5136sTShASBaKrRq5nHKgohUPuJmf4rkgtCvAKc_Lt5nenv8P46VeQWwVGhi5iPEWacHYQt_Az&_nc_zt=14&_nc_ht=scontent.fbnu11-1.fna&_nc_gid=x-fb8VPUcUOBkGhGD6OyRQ&oh=00_Afk2Z7WMrp34JwaoyKz5QD8hVFbapnhhmUYvEPaTDXe3NQ&oe=693C88C3"
  },
  {
    "titulo": "Painel de TV - Rack",
    "preco": "R$ 300",
    "id": "1539012413999592",
    "thumbnail": "https://scontent.fbnu9-1.fna.fbcdn.net/v/t45.5328-4/589656549_1177570810562641_379169742936857452_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFBY10qUHIrS381kPs34bm-y9cLuvqaVyrL1wu6-ppXKpp120BTHJTsCfijziQk65Rzx84xwM8n6qKDDzM6YvSz&_nc_ohc=FgmgKVigQMUQ7kNvwG5LDH5&_nc_oc=Adkk_ZhZTnT9-vNVD8DLdgwig78zPqhVmzD41d7sGQxpkmG3TXHdJJs1CY59rrfGhnNI8rOGIqDxk3ApuhCqY9e7&_nc_zt=23&_nc_ht=scontent.fbnu9-1.fna&_nc_gid=ul3akd8fV_hNNmEKxfYpHQ&oh=00_AfnuFZwLycJ2HZS-GiXlgpZJtbM2RuyQY6TvPQd8kn2Yhg&oe=693CAA20"
  },
  {
    "titulo": "Lava-Louça Brastemp 10 Serviços – Excelente Estado!",
    "preco": "R$ 900 (original R$ 1.200)",
    "id": "3178061449028966",
    "thumbnail": "https://scontent.fbnu11-1.fna.fbcdn.net/v/t39.84726-6/594058448_1406791370869875_6306898235731329942_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260_tt6&_nc_cat=106&_nc_sid=92e707&_nc_eui2=AeFJY9sZ9UkzVM426jDroESZpmsc0Irv9emmaxzQiu_16aj2qspono0XmmpQahufly_hYsyQlWA27VZhPHmfkFaM&_nc_ohc=xWdt7Q1J7P4Q7kNvwHOfYeg&_nc_oc=Admrth8ZBxrejcVriarfP8_ZEsV_uO1J_6w-SL_90QaI4aOLMLluBqoJ1gESm8IyLV8JTQJlNL2JBwS2PBRlFVCp&_nc_zt=14&_nc_ht=scontent.fbnu11-1.fna&_nc_gid=x-fb8VPUcUOBkGhGD6OyRQ&oh=00_Afn9CQ9SJGLHD2xQqcstNISVJkYcbyIYmFbzdTm-B89yTw&oe=693C994F"
  },
{
    "titulo": "2 Estantes Industriais – 187 cm x 60 cm (5 Prateleiras)",
    "preco": "R$ 400 (preço total das duas)",
    "id": "831276843161775",
    "thumbnail": "https://scontent.fbnu11-1.fna.fbcdn.net/v/t45.5328-4/590907391_835207996101210_8575458826327583469_n.webp?_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFfCsSG4P3fGeHnoY5Wiw1bIXqm9hi1y3sheqb2GLXLe8tjebsKFIT5fZkmP5FxhbOMsdgErR_mAmQxctPWqsx2&_nc_ohc=frcB2JpDWFUQ7kNvwHlEPOK&_nc_oc=AdnA4O6CxNoj43yqFEh9sHvzceuDrm9ApVOPZ3goO6Qh6oKlJ8NKdNT-CrhIL6t9H8HB6FPAcWufRLcDSxTsDXmv&_nc_zt=23&_nc_ht=scontent.fbnu11-1.fna&_nc_gid=vuuqA41N4l0Ac8Wjp_1DOg&oh=00_AflbhErpseDVESt3EyBuOLbxIqkmEirST2SL5Gt0e0zpDQ&oe=693CB8D5"
  }
];

// Helper to generate initial state from provided JSON
export const generateInitialItems = (): FurnitureItem[] => {
  return FURNITURE_DATA.map((item) => ({
    id: item.id,
    // Using standard marketplace item link structure with the ID
    originalLink: `https://www.facebook.com/marketplace/item/${item.id}/`,
    title: item.titulo,
    price: item.preco,
    // Placeholder description that encourages using the AI feature
    description: 'Item de mudança, em excelente estado. Clique em editar para gerar uma descrição vendedora com IA.',
    imageUrl: item.thumbnail,
    isSold: false
  }));
};
