$(document).ready(function() {

    var emailCreate = $("#email-account");
    var passCreate = $("#pass-account");
    var accountCreate = $("#account-create");
  
    $(accountCreate).on("submit", function userCreation(event) {
      event.preventDefault();
  
      var newUser = {
        email: emailCreate.val().trim(),
        password: passCreate.val().trim(),
        
      };
      $.post("/account", newUser, data => {
          
          }
      )
    });
  
    $("#save-character").click(() => {
      const newChar = {
        name : $("#character-name").val().trim(),
        player_name : $("#player-name").val().trim(),
        experience : parseInt($("#exp").val().trim()),
        level : parseInt($("#level").val().trim()),
        strength : parseInt($("#str").val().trim()),
        dexterity : parseInt($("#dex").val().trim()),
        constitution : parseInt($("#con").val().trim()),
        intelligence : parseInt($("#int").val().trim()),
        wisdom : parseInt($("#wis").val().trim()),
        charisma : parseInt($("#cha").val().trim()),
        perception : modifier(parseInt($("#wis").val().trim())),
        initiative : parseInt($("#init").val().trim()),
        hp_current : parseInt($("#hp").val().trim()),
        hp_temp : parseInt($("#hp").val().trim()),
        hp_max : parseInt($("#hp").val().trim()),
        arnor_class : parseInt($("#ac").val().trim()),
        shield : false
      }

      $.post("/api/characters", newChar, data => {
        console.log(data);
      })
    })
  
  
  
  
  
  
  
  
  
  
  
  
  });

// converts ability score to modifier
const modifier = (stat) => {
    Math.floor((stat - 10) / 2)
}