//
// module.exports = function(controller) {
//   let bby = require(('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O'));
//   // const bby = require('./bb_connection')
//   controller.hears(async (message) => {
//       // try {
//       return (
//         message.quick_reply.payload === 'Movie' ||
//         message.quick_reply.payload === 'BlackTie' ||
//         message.quick_reply.payload === 'HardGood' ||
//         message.quick_reply.payload === 'Music'
//       )
//     }
//     // }catch (e) {
//     //     console.error(`${e}`);
//     /*}}*/, 'message', async (bot, message) => {
//       // try {
//       bby.products(`type='${ message.quick_reply.payload }'`, {show: 'name,image,salePrice'}).then(function(data) {
//         for (let i = 0; i <= 4; i++) {
//           let attachment = {
//             type: 'template',
//             payload: {
//               template_type: 'generic',
//               elements: [
//                 {
//                   title: ` ${ data.products[i].name }`,
//                   image_url: ` ${ data.products[i].image }`,
//                   subtitle: ` ${ data.products[i].salePrice }`,
//                   buttons: [
//                     {
//                       type: 'postback',
//                       title: 'Buy',
//                       payload: 'buy'
//                     },
//                     {
//                       type: 'postback',
//                       title: 'Add to favorite',
//                       payload: 'add-to-favorite'
//                     }
//                   ]
//                 },
//               ]
//             }
//           };
//           bot.reply(message, {attachment: attachment,});
//         }
//       })
//       .catch(e => console.error(`${ e }`));
//       // } catch (e) {
//       //   console.error(`${e}`)
//       // }
//
//       // });
//
//     });
// };



module.exports = function(controller) {
  const bby = require('bestbuy')(process.env.BB_API);
  
  controller.hears(async(message) => { return (message.quick_reply.payload === 'Movie'||
    message.quick_replies.payload ==='BlackTie'||
    message.quick_replies.payload === 'HardGood'||
    message.quick_replies.payload === 'Music'||
    message.quick_replies.payload === 'Software'||
    message.quick_replies.payload === 'Bundle'||
    message.quick_replies.payload === 'Game'
  )}, 'message', async(bot, message) => {
    await bby.products(`type="${ message.quick_reply.payload }"`,{show:"image,name,salePrice"}).then(function(data){
      for(let i=0; i<5;i++)
      {
        let attachment = {
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title:` ${data.products[i].name }`,
                image_url:` ${data.products[i].image }`,
                subtitle:` ${data.products[i].salePrice }\$`,
                buttons:[
                  {
                    type:'postback',
                    title:'Buy',
                    payload:'buy'
                  },
                  {
                    type:'postback',
                    title:'Add to favorite',
                    payload:'add-to-favorite'
                  }
                ]
              },
            ]
          }
        };
        bot.reply(message, {attachment: attachment});
      }
    }).catch(e => console.log(e));
    
  });
  
};
