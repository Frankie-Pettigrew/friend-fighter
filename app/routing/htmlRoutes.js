$.getScript(__dirname + "server.js")
  .done(function (script) {
      HelloWorld();
  })
  .fail(function (jqxhr, settings, exception) {
      console.log('something went wrong!');
  });

$("#survey").click(function () {
    server.getSurvey();
})

$("#home").click(function () {
    server.getSlash();
})