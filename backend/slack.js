var request = require("request")
var name1 = "Testing account";

var user_list = "https://slack.com/api/users.list?token=xoxp-250542028711-248804216032-249517218692-aff48e3e3303d4857148f158a828d093&pretty=1";

var remove_from_channels = ["C7APT3C1E","C7BGY85HA"];
var graduate_channel = ["C7CC2S20N"]
request({
    url: user_list,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {

      for (var i = 0; i < body.members.length; i++) {
       var mem = body.members[i];
       if(mem.real_name === name1){
         console.log(mem);
         for (var j = 0; j < remove_from_channels.length; j++) {
           var channel_kick = "https://slack.com/api/channels.kick?token=xoxp-250542028711-248804216032-249517218692-aff48e3e3303d4857148f158a828d093&channel="+remove_from_channels[j]+"&user="+mem.id+"&pretty=1";
           request({
               url: channel_kick,
               json: true
           }, function (error, response, done) {
               if (!error && response.statusCode === 200) {

               }
          })
        };;

        for (var j = 0; j < graduate_channel.length; j++) {
           var graduate_invite = "https://slack.com/api/channels.invite?token=xoxp-250542028711-248804216032-249517218692-aff48e3e3303d4857148f158a828d093&channel="+graduate_channel[j]+"&user="+mem.id+"&pretty=1";
           request({
               url: graduate_invite,
               json: true
           }, function (error, response, done) {
               if (!error && response.statusCode === 200) {

               }
          })
          };;


       }
      }
      

    }
  }

);
