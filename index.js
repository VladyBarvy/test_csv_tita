import _ from 'lodash';

export default function solution(content){
  // BEGIN
  //console.log(content);


  // step 1
  const info = content.split('\r\n');
  const data = info.slice(1, info.length - 1);
  const value_of_pass = data.length;
  console.log(`Сколько всего пассажиров в таблице: ${value_of_pass}`);
  // END
}
