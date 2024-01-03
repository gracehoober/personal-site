const BASE_URL = "http://localhost:5001";
/** API class
 * static class with method to retrieve personal information about myself
 * from Python/Flask backend
 *
 */

class PersonalInfoApi {

  static async getInfo() {
    const resp = await fetch(`${BASE_URL}`);
    const info = resp.json();
    return info;
  }

}

export default PersonalInfoApi;