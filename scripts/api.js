export class Github {
  constructor() {
    this.client_id = "ac6586af7bc0155ab2b6";
    this.client_secret = "2602029d67d0ef51afe43ce634ed3a8f10e50226";
    this.per_page = 10;
    this.sort = "asc";
  }
  //* api'den kullanıcı bilgilerini alma
  async fetchUserData(username) {
    // parametre olarak gelen kullanıcı adına göre istek attık
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // kullanıcı repolarını almak için istek attık
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
    );

    // apiden aldığımız cevabı json yapısına çevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();
    // fonksiyonun çağrıldığı yere bilgileri gönderme
    return { data, repos };
  }
}
