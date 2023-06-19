import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Bantuan } from "../homePage/constants";
import Gap from "../../components/gap/Gap";
import { WAIcon } from "../../assets";
import "./homePageBantuan.css";

const HomePageBantuan = () => {
  return (
    <div className="homepage-bantuan-pages2">
      <h1 className="about-page-bantuan">Bantuan</h1>
      <h1 className="about-page-bantuan">Cara Mendaftar akun Complainz</h1>
      <Gap height={70} />
      <h2 className="tentang-teks">Ikuti langkah- langkah berikut ini :</h2>
      <Gap height={30} />
      <h2 className="tentang-teks">
        Buka aplikasi Playstore atau App Store <br /> Cari aplikasi “Complainz”,
        lalu unduh Setelah berhasil diunduh, <br /> buat akun dengan mengisi
        data registrasi Setelah melakukan registrasi <br />
        Anda akan mendapatkan kode <br /> verifikasi melalui nomor WhatsApp
        <br />
        Setelah verifikasi koded isi data diri untuk tampilan profile
      </h2>
      <a
        href="https://wa.me/6282257665673"
        target="_blank"
        className="WhatsApp-bantuan"
      >
        <img src={WAIcon} />
        <div class="pertanyaan-bantuan">
          Ada Pertanyaan ? <br></br>
          Silahkan hubungi kami via WhatsApp
        </div>
      </a>
      <Gap height={50} />
      <h1 className="about-page-bantuan">Artikel Terkait</h1>
      <div className="quest-page-bantuan">
        <Gap height={30} />

        {Bantuan.map((teks, index) => (
          <div className="bantuan-page" key={index}>
            <a className="konten-bantuan">{teks.teks1}</a>
            <a className="konten-bantuan">{teks.teks2}</a>{" "}
            <a className="konten-bantuan">{teks.teks3}</a>
            <a className="konten-bantuan">{teks.teks4}</a>
            <Gap height={10} />
            <div className="icon-bantuan">
              <RightOutlined justify="end" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageBantuan;
