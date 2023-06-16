import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Bantuan } from "../constants";
import Gap from "../../../components/gap/Gap";
import "./syafibantuan.css";
import { WAIcon } from "../../../assets";

const Syafibantuan = () => {
  return (
    <>
      <h1 className="about-bantuan">Bantuan</h1>
      <h1 className="about-bantuan">Cara Mendaftar akun Complainz</h1>
      <Gap height={70} />
      <h2 className="tentang-bantuan">Ikuti langkah- langkah berikut ini :</h2>
      <Gap height={30} />
      <h2 className="tentang-bantuan">
        Buka aplikasi Playstore atau App Store Cari aplikasi “Complainz”, lalu
        unduh Setelah berhasil diunduh, buat akun dengan mengisi data registrasi
        Setelah melakukan registrasi Anda akan mendapatkan kode verifikasi
        melalui nomor WhatsApp Setelah verifikasi koded isi data diri untuk
        tampilan profile
      </h2>
      <div className="quest">
        <a
          href="https://wa.me/6282257665673"
          target="_blank"
          className="WhatsApp"
        >
          <img src={WAIcon} />
          <div class="pertanyaan">
            Ada Pertanyaan ? <br></br>
            Silahkan hubungi kami via WhatsApp
          </div>
        </a>
        <h2>Artikel Terkait</h2>
        <Gap height={30} />
        {Bantuan.map((teks, index) => (
          <div className="bantuan" key={index}>
            <a className="konten">{teks.teks1}</a>
            <a className="konten">{teks.teks2}</a>{" "}
            <a className="konten">{teks.teks3}</a>
            <a className="konten">{teks.teks4}</a>
            <Gap height={10} />
            <div className="icon">
              <RightOutlined justify="end" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Syafibantuan;
