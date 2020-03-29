import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={3}
            items={[
              {
                title: "Jasa Pembuatan PT",
                body:
                  "Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.",
                image: "https://msopyan.web.id/images/undraw_contract_uy56.svg"
              },
              {
                title: "Otomasi Dokumen",
                body:
                  "Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.",
                image: "https://msopyan.web.id/images/undraw_files1_9ool.svg"
              },
              {
                title: "Sistem Manajemen Dokumen",
                body:
                  "Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.",
                image:
                  "https://msopyan.web.id/images/undraw_files_6b3d.svg"
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
