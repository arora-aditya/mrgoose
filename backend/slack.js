const axios = require('axios');
const token = process.env.TOKEN;
const userList = "https://slack.com/api/users.list?token="+token+"&pretty=1";
console.log(userList);
const removeFromChannels = ["C7APT3C1E","C7BGY85HA"];
const graduateChannels = ["C7CC2S20N"]
// request({
//   url: user_list,
//   json: true
// }, function (error, response, body) {
//   if (!error && response.statusCode === 200) {
//     for (let i = 0; i < body.members.length; i++) {
//       const mem = body.members[i];
//       if(mem.real_name === name1){
//         console.log(mem);
//         for (let j = 0; j < removeFromChannels.length; j++) {
//           const channel_kick = "https://slack.com/api/channels.kick?token="+token+"&channel="+removeFromChannels[j]+"&user="+mem.id+"&pretty=1";
//           request({
//             url: channel_kick,
//             json: true
//           }, function (error, response, done) {
//             if (!error && response.statusCode === 200) {

//             }
//           })
//         }

//         for (let j = 0; j < graduateChannel.length; j++) {
//           const graduate_invite = "https://slack.com/api/channels.invite?token="+token+"&channel="+graduateChannel[j]+"&user="+mem.id+"&pretty=1";
//           request({
//             url: graduate_invite,
//             json: true
//           }, function (error, response, done) {
//             if (!error && response.statusCode === 200) {

//             }
//           })
//         }
//       }
//     }
//   }
// });

const kick = member => {
  // invite to graduate channels
  graduateChannels.forEach(channel => {
    const graduateInvite = `https://slack.com/api/channels.invite?token=${token}&channel=${channel}&user=${member.id}&pretty=1`;
    return axios.get(graduateInvite);
  });
  // return a promise that only resolves when kicked from all channels
  return Promise.all(removeFromChannels.map(channel => {
    const channelKick = `https://slack.com/api/channels.kick?token=${token}&channel=${channel}&user=${member.id}&pretty=1`;
    return axios.get(channelKick);
  }));
};

const fetchMembers = () => new Promise((resolve, reject) =>
  axios.get(userList).then(response => resolve(response.body.members)).catch(reject));
