require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

 async function findallModel(){
  console.log(configuration.apiKey)
  //console.log(process.env)
    const response = await openai.listModels();
    console.log("Extracting"+response)
    return response;
}

findallModel().then(response=>{console.log(response.data)
//console.log(Object.length(response))
}).catch(error=> console.log(error));