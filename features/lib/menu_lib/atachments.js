// module.exports = function addFavorite(name, image, price, sku) {
//   return {
//     type: 'template',
//     payload: {
//       template_type: 'generic',
//       elements: [
//         {
//           title: `${name}`,
//           image_url: `${image}`,
//           subtitle: `${price}$`,
//           buttons: [
//             {
//               type: 'postback',
//               title: 'Buy',
//               payload: `basket:${sku}`,
//             },
//             {
//               type: 'postback',
//               title: 'Add to favorite',
//               payload: `add:${sku}`,
//             },
//           ],
//         },
//       ],
//     },
//   };
// };
