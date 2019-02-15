export const prescriptExample = {
  code : `var CLIENT_KEY = pm.environment.get('CLIENT_KEY');
var SECRET_KEY = pm.environment.get('SECRET_KEY');
var AUTH_TYPE = 'CEA algorithm=HmacSHA256';

function getPath(url) {
          var pathRegex = /.+?\\:\\/\\/.+?(\\/.+?)(?:#|\\?|$)/;
          var result = url.match(pathRegex);
          return result && result.length > 1 ? result[1] : '';
}

function getQueryString(url) {
          var arrSplit = url.split('?');
          return arrSplit.length > 1 ? url.substring(url.indexOf('?')+1) : '';
}

function getAuthHeader(httpMethod, requestUrl, requestBody) {

          var requestPath = getPath(requestUrl);
          var queryString = getQueryString(requestUrl);

          var timestamp = new Date().toISOString().split('.')[0]+"Z";
          timestamp = timestamp.replace(/:/gi, "").replace(/-/gi, "").substring(2);

          var requestData = [timestamp, httpMethod, requestPath, queryString].join("");
          requestData = replaceVariables(requestData);
          var hash = CryptoJS.HmacSHA256(requestData, SECRET_KEY);
          var hmacDigest = CryptoJS.enc.Hex.stringify(hash);
          var authHeader = AUTH_TYPE + ", access-key=" + CLIENT_KEY + ', signed-date=' + timestamp + ', signature=' + hmacDigest;
          return authHeader;
}

function replaceVariables(templateString) {
          let tokens = _.uniq(templateString.match(/{{\\w*}}/g))

    _.forEach(tokens, t => {
       let variable = t.replace(/[{}]/g, '')
       let value = environment[variable] || globals[variable]
       templateString = templateString.replace(new RegExp(t,'g'), value)
    });

    return templateString
}

pm.globals.set('signature', getAuthHeader(request['method'], request['url'], request['data']));`
};
