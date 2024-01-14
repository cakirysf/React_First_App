//HOOK (React in kendisinden gelen fonksiyonlara hook (kanca) denir en çok kullanılan useState)
//useState veriyi hafızada tutmaya yarar
import { useState } from "react"

/* Bileşen oluşturma */
const Counter = () => {
    //useState bileşende kullanma çağırma
    const [count, setCount] = useState(0)
    //useState çağırdığımız zaman dizi içerisinde 2 değer döndürür
    //count : sayacın değeri, tutuğumuz değer dizinin 0. elemanı
    //setCount : değeri güncelleme işlemi, veriyi değiştirmeye yarayan fonksiyon
    //buradaki useState(0) kısımdaki sıfır farklı bir değerde olabilir initialState yani
    //başlangıç state denir yani statin sahip olacağı ilk değer

    return (
      //JSX KISMI
      <div className="counter">
        <h1>Sayaç</h1>
        <div>
            {/* disabled={count === 0 && true} kullanım nedeni 0 dan sonra eksiltmemek için 
            && operatörü ile kullandık Ternary ile olsa idi disabled={count === 0 ? true : false} şeklinde olurdu*/}
          <button disabled={count === 0 && true}
            onClick={() => {
              //state te tutulan veriyi 1 azalt
              setCount(count - 1);
            }}
          >
            -
          </button>

          <span>{count}</span>
          
          <button
            onClick={() => {
              //state te tutulan veriyi 1 artır
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button onClick={() => setCount(0)}>Sıfırla</button>
        </div>
      </div>
    );
}

//başka jsx te kullanmak için export yapıyoruz.
export default Counter