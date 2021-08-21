export default ({}, inject) => {
  // 投稿日時・出力用文字列変更
  inject('dateFormat', (inputDate) => {
    let time = Date.parse(inputDate);
    let date = new Date(time);
    let strDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    return strDate;
  })
}
