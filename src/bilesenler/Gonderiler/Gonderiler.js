import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";
const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  const a = gonderiler.map((gonderi) => {
    console.log(gonderi);
  });

  return (
    <div className="posts-container-wrapper">
      <div>Çıktı: {}</div>
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
