/**
 * Created by qilongli on 2018/6/2.
 */
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
