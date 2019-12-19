const request = require('request-promise');

function getLuisFromVersion(nlpInfos, version) {
    const options = {
        url: `https://${nlpInfos.region}.api.cognitive.microsoft.com/luis/api/v2.0/apps/${nlpInfos.id}/versions/${version}/export`,
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': nlpInfos.authoringKey
        }
    };

    return request(options)
        .then((body) => {
            try {
                return JSON.parse(body);
            } catch (e) {
                throw new Error(`UNEXPECTED ANSWER ${e}`);
            }
        })
        .catch((err) => {
            throw new Error(`[VERSIONS GET] HTTP ERROR : ${err}`);
        });
}


// POST https://dialogflow.googleapis.com/v2/projects/jokes-fqxhrh/agent:export?key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
// Content-Type: application/json


function exportDialgflowAgent(project , agent) {

    const apiKey = '02d1ec98b780409fa844d3d42c2b4903';
    const options = {
        url: ` https://dialogflow.googleapis.com/v2/projects/jokes-fqxhrh/agent:export?key=${apiKey}`,
        method: 'POST',
        json : true,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return request(options)
    .then((body) => {
        console.log(body);
        return body; 
    })
    .catch((err) => {
        throw new Error(`ERROR : ${err}`);
    });
}


exportDialgflowAgent(null , null);
