function command(data){
  switch (data) {
    case "/start":
        return "Hello kevin. I am your friendly Token bot";
        break;
    case "/testing":
        return "simply testing this out";
        break;
  
    default:
        return "no command input"
        break;
  }
}

module.exports = command;