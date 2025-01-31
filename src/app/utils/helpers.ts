import moment from "moment";

const GenerateRandomFilename = (length = 16) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const GetHumanizedDifference = (date: Date) => {
  return moment(date).fromNow();
};

function CalculateReadTimeFromHTML(html: string) {
  // Strip HTML tags using a regular expression
  const text = html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  // Split the text by spaces and count the number of words
  const words = text.split(/\s+/).length;
  // Define the average reading speed in words per minute
  const wordsPerMinute = 200;
  // Calculate the read time in minutes, rounded up
  const readTimeInMinutes = Math.ceil(words / wordsPerMinute);
  return readTimeInMinutes;
}




export { GenerateRandomFilename, GetHumanizedDifference, CalculateReadTimeFromHTML };