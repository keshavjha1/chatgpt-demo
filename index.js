const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

 async function findallModel(){
    const response = await openai.listModels();
    console.log("Extracting"+response)
    return response;
}

findallModel().then(response=>{console.log(response.data)
console.log(Object.length(response))
}).catch(error=> console.log(error));