import { useState } from "react"


const Accordion = (prop) => {
    //accordion un alt kısmı görünecek mi bunu tutuyoruz alt satırda
    const [isOpen, setIsOpen] =useState(false)

    return(
        <section>
     {/*    <h1 className='ana-baslik-2'>STATE-2 (DURUM)</h1> */}
        <div className="acc">
            
          <div>
            {/* <h2>Hangi Teknolojiler Kullanıldı</h2> */}
            <h2>{prop.title}</h2>
            <button
            /* !isOpen true ise false, false ise true yapar
            state deki boolean değeri tersine çevirme işlemi yapıyoruz
            diğer yol ise isOpen === false ? true : false */
            onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? `X` :`+`}
              </button>
          </div>
          {/* isOpen koşuluna bağlı olarak p etiketini ekrana bas
            * alternatif yol className ine koşul vererek benzer sonuç elde edebilirdik
           */}
           {isOpen===true &&(
            <p>{prop.text}</p> 
            )}
        </div>
   
        </section>
    )
}

export default Accordion