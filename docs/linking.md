## ✨ Linking schemes

Mungkin sudah pada tau dengan link https://psnku.vercel.app/{userId}.
Link tersebut digunakan untuk mengarahkan ke aplikasi, namun apakah kamu tau, kamu bisa gunakan link tersebut sebagai fungsi?

## 🏃‍♂️ Menuju ke akun seseorang

Menuju ke akun seseorang mungkin sudah mudah, bisa menggunakan psnku.vercel.app/{id-user}, tapi ada yang jauh lebih detail.

Coba kamu buka [pesankuapp://chat/me-self](https://psnku.vercel.app/chat/me-self) pada google chrome kamu.
Otomatis kamu akan diarahkan tempat chat pada diri kamu sendiri.

Metode ini bisa kamu ganti dengan user id seseorang.
Contoh [pesankuapp://chat/74bd193c-user](https://psnku.vercel.app/chat/74bd193c-user)

## 🔗 Query pada url

Mungkin menuju ke akun seseorang sudah biasa, namun kamu bisa mengirim dengan pesan juga lo.

Kamu bisa menambahkan query pada link yang ingin dituju ke seseorang. <br />
Contoh :
- Schemes → [pesankuapp://chat/74bd193c-user?m=hai%20kak](pesankuapp://chat/74bd193c-user?m=hai%20kak)
- Link → [https://psnku.vercel.app/{userId}?m={text}](https://psnku.vercel.app/{userId}?m={text})

Untuk query yang dapat kamu gunakan bisa lihat table dibawah ini.

| Query | Fungsi    | Description                   |
|-------|-----------|-------------------------------|
| m     | Message   | Digunakan untuk mengirim pesan, namun hanya dapat mengirim sepanjang 300 kata |
| img   | Image     | Digunakan untuk mengirim pesan gambar berformat url, jika url tidak valid, makan otomatis tidak akan dimuat pada aplikasi |
| ~sda~   | Send Button Automatic | Kamu dapat mengirim pesan secara langsung tanpa harus menekan tombol enter, namun izinkan untuk otomatis pengiriman pesan pada [pengaturan](http://psnku.vercel.app/set). diversi 0.10.45 / keatasnya kamu tidak dapat menggunakan query ini |
| info  | Profiles Info | Jika kamu memberikan query ini, kamu tidak dapat mengirim pesan atau memberi, query ini hanya mengarahkan ke profile |

Jika kamu ingin mengirim pesan dengan gambar, caranya cukup mudah, masukan url gambar yang diinginkan pada query img, otomatis saat membuka link tersebut akan memuat gambar.

Contoh: https://psnku.vercel.app/74bd193c-user?img=https://picsum.photos/id/237/200/300&m=keren+kan!



<details>

  #### Dokumentasi hal ini
  - [Linking - Expo documents #Linking to your app](https://docs.expo.dev/guides/linking/#linking-to-your-app)

</details>
