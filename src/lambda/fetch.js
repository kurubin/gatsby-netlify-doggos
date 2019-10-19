import axios from "axios";
import config from "../../config";

const FIRST_LOAD_COUNT = 10;

exports.handler = function(event, context, callback) {
  // Unplash is a public API to fetch images with the avility to filter/search by specific term. A
  // user account is needed to obtain an access token for a specific application.
  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.ACCESS_KEY || config.accessKey;

  const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${FIRST_LOAD_COUNT}&collections='3816141,1154337,1254279'`;

  axios.get(doggoEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    });
  });
};
