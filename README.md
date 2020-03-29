### Prerequisites

Pengetahuan yang dibutuhkan: 

1. [Javascript](https://javascript.info)
2. [HTML](https://www.w3schools.com/html/html_intro.asp)
3. [CSS](https://www.w3schools.com/css/)
4. [Reactjs](https://reactjs.org/)
5. [Nodejs](https://nodejs.org/en/)
6. [NPM](https://www.npmjs.com)
7. [Git](https://try.github.io/levels/1/challenges/1)
8. [Webpack](https://webpack.js.org/) 


Pastikan juga nodejs dan npm sudah terinstall di komputer development yang akan dipakai. Cara install node js adalah sebagai berikut: 

1. [Download nodejs LTS](https://nodejs.org/en/download/)
2. Install sesuai dengan OS yang dipakai.

_npm terinstall otomatis apabila telah melakukan instalasi nodejs._

## Skrip yang tersedia

Di direktori proyek, Anda dapat menjalankan:
### Folder Structure
Berikut adalah daftar folder penting yang dibutuhkan dalam membangun website ini: 

#### *src*
- _./src/component_ : Berisi komponen yang digunakan pada laman website. Nama konten sesuai dengan komponen web.
- _./src/pages_ : Berisi script javascript yang digunakan pada laman website.
- _./src/utils_ : Berisi fungsi utilitas yang dapat digunakan untuk membantu dalam melakukan handling  _routing website_. 

#### *public*
- _./public_ : Berisi file html dan gambar yang digunakan pada laman website.

### Installation and Running Development Server

Berikut adalah langkah yang dibutuhkan untuk melakukan instalasi dan menjalankan _Development Server_ repository ini. (Instalasi dianggap memakai CLI atau _Command Line Interface_)

```bash
NODE_PATH=.

SERVER_PORT=3000
```

Atau gunakan environment yang sesuai.

Setelah itu, anda dapat melakukan langkah-langkah instalasi dan menjalankan server development sebagai berikut: 

**NPM**

```sh
Git clone https://github.com/msopyan/hakita.git
cd hakita
npm install
npm start

Menjalankan aplikasi dalam mode pengembangan. <br>
Buka [http: // localhost: 3000] (http: // localhost: 3000) untuk melihatnya di browser.

