import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'; 
import Accordion from './components/accordion';
import Main from './components/Main';

function App() {
  /* tema açık koyu yapma */
  const [isDarkMode, setIsDarkMode]= useState(true)


  return (
    <section>
      <h1 className="ana-baslik">STATE (DURUM)<br></br>
      App & JSX,
Functional Components,
Applying CSS Styles,
Click Events,
useState Hook,
Lists & Keys,
Props & Prop Drilling,
Controlled Component Inputs
</h1>
      {/* <div className="state-page"> */}
      {/* eğer ki dinamik olarak değişecek class ların dışarısında sabit class larda varsa buradaki state-page gibi o zaman  `` backtick içinde aşağıdaki gibi kullanım yaparız.  */}
      <div className={`state-page ${isDarkMode ? "dark" : "light"}`}>
        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? `Açık Mod` : `Koyu Mod`}
          </button>

        {/* Bileşeni çağırma */}
        <Counter />
        {/* PROBS bir bileşeni farklı bir veri ile kullanmak istiyorsak akla probs yöntemi dışında birşey gelmez
        accordion title  text işte veri gönderme*/}
        <Accordion
          title="Hangi Teknolojiler Kullanıldı"
          text="Hangi Teknolojiler Kullanıldı... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam esse quam, inventore, veritatis illum eligendi debitis optio ut eos accusantium corporis atque aliquid a explicabo numquam. Suscipit at esse cumque tempora facilis excepturi culpa inventore alias quis nulla minus, nostrum, perspiciatis numquam voluptates."
        />
        <Accordion
          title="Tabiki React Js Kullanıldı"
          text="Tabiki React Js Kullanıldı... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam esse quam, inventore, veritatis illum eligendi debitis optio ut eos accusantium corporis atque aliquid a explicabo numquam."
        />
        <Accordion
          title="Temel React Kütüphanesi Projeleri"
          text="Temel React Kütüphanesi Projeleri... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laboriosam esse quam, inventore, veritatis illum eligendi debitis optio ut eos accusantium corporis atque aliquid a explicabo numquam. Suscipit at esse cumque tempora facilis excepturi culpa inventore alias quis nulla minus, nostrum, perspiciatis numquam voluptates. Repellendus itaque iure, velit doloremque accusantium fugit architecto distinctio corrupti culpa placeat ipsam excepturi deserunt? Maxime."
        />

      <Main />
      </div>
    </section>
  );
}

export default App;
