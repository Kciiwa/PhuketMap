import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: "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",
// });

// async function fetchVillas() {
//   const response = await notion.databases.query({
//     database_id: "148822df79338003abedd7cf4258a02c",
//   });

//   console.log(response);
// }
// fetchVillas();
// // // Создаем клиент
// // const notion = new Client({
// //   auth: "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",
// // });

// // async function fetchVillas() {
// //   try {
// //     const response = await notion.databases.query({
// //       database_id: "148822df79338003abedd7cf4258a02c",
// //     });

// //     const villas = response.results.map((item) => {
// //       const properties = item.properties;
// //       return {
// //         nameVilla: properties.Name.title[0]?.text.content || "Unnamed Villa",
// //         coordinates: properties.Coordinates.rich_text[0]?.text.content
// //           .split(",")
// //           .map(Number),
// //         locationVilla: properties.URL.url || "#",
// //         isAvailable: properties.Availability.checkbox || false,
// //       };
// //     });

// //     console.log(villas);
// //     return villas;
// //   } catch (error) {
// //     console.error("Ошибка при получении данных из Notion:", error);
// //     return [];
// //   }
// // }

// // fetchVillas();

// import axios from "axios";

// async function fetchVillas() {
//   try {
//     const response = await axios.post(
//       "https://api.notion.com/v1/databases/148822df79338003abedd7cf4258a02c/query",
//       {},
//       {
//         headers: {
//           Authorization: `Bearer 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`,
//           "Notion-Version": "2022-06-28",
//         },
//       }
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.error("Ошибка при получении данных из Notion:", error.message);
//   }
// }
// fetchVillas();

// const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: "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",
});

(async () => {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse);
})();
