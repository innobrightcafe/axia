//This file contains placeholder data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const referers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/referer/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/referer/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/referer/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/referer/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/referer/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/referer/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/referer/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/referer/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/referer/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/referer/balazs-orban.png',
  },
];

const investment = [
  {
    referer_id: referers[0].id,
    amount: 15795,
    status: 'inactive',
    date: '2022-12-06',
  },
  {
    referer_id: referers[1].id,
    amount: 20348,
    status: 'inactive',
    date: '2022-11-14',
  },
  {
    referer_id: referers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    referer_id: referers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    referer_id: referers[5].id,
    amount: 34577,
    status: 'inactive',
    date: '2023-08-05',
  },
  {
    referer_id: referers[7].id,
    amount: 54246,
    status: 'inactive',
    date: '2023-07-16',
  },
  {
    referer_id: referers[6].id,
    amount: 666,
    status: 'inactive',
    date: '2023-06-27',
  },
  {
    referer_id: referers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    referer_id: referers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    referer_id: referers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    referer_id: referers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    referer_id: referers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    referer_id: referers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    referer_id: referers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    referer_id: referers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const roi = [
  { month: 'Jan', roi: 2000 },
  { month: 'Feb', roi: 1800 },
  { month: 'Mar', roi: 2200 },
  { month: 'Apr', roi: 2500 },
  { month: 'May', roi: 2300 },
  { month: 'Jun', roi: 3200 },
  { month: 'Jul', roi: 3500 },
  { month: 'Aug', roi: 3700 },
  { month: 'Sep', roi: 2500 },
  { month: 'Oct', roi: 2800 },
  { month: 'Nov', roi: 3000 },
  { month: 'Dec', roi: 4800 },
];

module.exports = {
  users,
  referers,
  investment,
  roi,
};
