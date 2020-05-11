const dbuser = "yannklein";
const dbpassword = "wedges87";

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-qvxok.gcp.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;
