  import { sql } from '@vercel/postgres';
// import {
// Roi,
// User,
// RefererField,
// RefererTableType,
// InvestmentForm,
// InvestmentTable,
// LatestInvestmentRaw,
// } from './definitions';
// import { formatCurrency } from './utils';

// export async function fetchRoi() {
//   // Add noStore() here prevent the response from being cached.
//   // This is equivalent to in fetch(..., {cache: 'no-store'}).

//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     // console.log('Fetching revenue data...');
//     // await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Roi>`SELECT * FROM roi`;

//     // console.log('Data fetch completed after 3 seconds.');

//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestInvestment() {
//   try {
//     const data = await sql<LatestInvestmentRaw>`
//       SELECT investments.amount, referers.name, referers.image_url, referers.email, investments.id
//       FROM investments
//       JOIN referers ON investments.referer_id = referers.id
//       ORDER BY investments.date DESC
//       LIMIT 5`;

//     const LatestInvestment = data.rows.map((investment) => ({
//       ...investment,
//       amount: formatCurrency(investment.amount),
//     }));
//     return LatestInvestment;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest investments.');
//   }
// }

// export async function fetchCardData() {
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const investmentCountPromise = sql`SELECT COUNT(*) FROM investments`;
//     const refererCountPromise = sql`SELECT COUNT(*) FROM referers`;
//     const investmentStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'active' THEN amount ELSE 0 END) AS "active",
//          SUM(CASE WHEN status = 'inactive' THEN amount ELSE 0 END) AS "inactive"
//          FROM investments`;

//     const data = await Promise.all([
//       investmentCountPromise,
//       refererCountPromise,
//       investmentStatusPromise,
//     ]);

//     const numberOfinvestments = Number(data[0].rows[0].count ?? '0');
//     const numberOfReferers = Number(data[1].rows[0].count ?? '0');
//     const totalActiveinvestments = formatCurrency(data[2].rows[0].active ?? '0');
//     const totalInactiveinvestments = formatCurrency(data[2].rows[0].inactive ?? '0');

//     return {
//       numberOfReferers,
//       numberOfinvestments,
//       totalActiveinvestments,
//       totalInactiveinvestments,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredinvestments(
//   query: string,
//   currentPage: number,
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const investments = await sql<InvestmentTable>`
//       SELECT
//         investments.id,
//         investments.amount,
//         investments.date,
//         investments.status,
//         referers.name,
//         referers.email,
//         referers.image_url
//       FROM investments
//       JOIN referers ON investments.referer_id = referers.id
//       WHERE
//         referers.name ILIKE ${`%${query}%`} OR
//         referers.email ILIKE ${`%${query}%`} OR
//         investments.amount::text ILIKE ${`%${query}%`} OR
//         investments.date::text ILIKE ${`%${query}%`} OR
//         investments.status ILIKE ${`%${query}%`}
//       ORDER BY investments.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return investments.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch investments.');
//   }
// }

// export async function fetchinvestmentsPages(query: string) {
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM investments
//     JOIN referers ON investments.referer_id = referers.id
//     WHERE
//       referers.name ILIKE ${`%${query}%`} OR
//       referers.email ILIKE ${`%${query}%`} OR
//       investments.amount::text ILIKE ${`%${query}%`} OR
//       investments.date::text ILIKE ${`%${query}%`} OR
//       investments.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of investments.');
//   }
// }

// export async function fetchInvestmentById(id: string) {
//   try {
//     const data = await sql<InvestmentForm>`
//       SELECT
//         investments.id,
//         investments.referer_id,
//         investments.amount,
//         investments.status
//       FROM investments
//       WHERE investments.id = ${id};
//     `;

//     const investment = data.rows.map((investment) => ({
//       ...investment,
//       // Convert amount from cents to dollars
//       amount: investment.amount / 100,
//     }));

//     return investment[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch investment.');
//   }
// }

// export async function fetchReferers() {
//   try {
//     const data = await sql<RefererField>`
//       SELECT
//         id,
//         name
//       FROM referers
//       ORDER BY name ASC
//     `;

//     const referers = data.rows;
//     return referers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all referers.');
//   }
// }

// export async function fetchFilteredReferers(query: string) {
//   try {
//     const data = await sql<RefererTableType>`
// 		SELECT
// 		  referers.id,
// 		  referers.name,
// 		  referers.email,
// 		  referers.image_url,
// 		  COUNT(investments.id) AS total_investments,
// 		  SUM(CASE WHEN investments.status = 'inactive' THEN investments.amount ELSE 0 END) AS total_inactive,
// 		  SUM(CASE WHEN investments.status = 'active' THEN investments.amount ELSE 0 END) AS total_active
// 		FROM referers
// 		LEFT JOIN investments ON referers.id = investments.referer_id
// 		WHERE
// 		  referers.name ILIKE ${`%${query}%`} OR
//         referers.email ILIKE ${`%${query}%`}
// 		GROUP BY referers.id, referers.name, referers.email, referers.image_url
// 		ORDER BY referers.name ASC
// 	  `;

//     const referers = data.rows.map((referer) => ({
//       ...referer,
//       total_inactive: formatCurrency(referer.total_inactive),
//       total_active: formatCurrency(referer.total_active),
//     }));

//     return referers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch referer table.');
//   }
// }

// export async function getUser(email: string) {
//   try {
//     const user = await sql`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0] as User;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }
