/**
 * Created by qilongli on 2018/6/2.
 */
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
