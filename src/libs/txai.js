import md5 from "md5";

let app_id = "2131012886";
let time_stamp = "1493449657";
let nonce_str = "20e3408a79";
let appkey = "Lk0v2RVI1DJuOqdU";
let url = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_wordseg";

let params = {
  app_id: app_id,
  text: "腾讯人工智能",
  time_stamp: time_stamp,
  nonce_str: nonce_str,
  sign: ''
}
function getReqSign(params, appkey){
  // 1. 字典升序排序
  ksort(params);

  // 2. 拼按URL键值对
  let str = '';
  for(let i in params){
    if(params[i] != ''){
      str += (i + '=' + encodeURI(params[i]) + '&');
    }
  }

  // 3. 拼接app_key
  str += ('app_key=' + appkey); 

  //MD5运算+转换大写，得到请求签名
  return md5(str).toUpperCase();
}

function ksort(params){

}

params.sign = getReqSign(params, appkey);
console.log(params);

export default getReqSign(params, appkey);