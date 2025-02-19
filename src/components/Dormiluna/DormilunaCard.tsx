import "./Dormiluna.sass";

const products = [
  
  {
    id: 1,
    name: "Cama Golden",
    size: "140x190 Gris",
    priceBefore: 2150000,
    priceNow: 1612500,
    discount: 25,
    rating: 0,
    image: "./images/Products/cama1.jpg",
  },
  {
    id: 2,
    name: "Cama Golden",
    size: "140x190 Gris",
    priceBefore: 2150000,
    priceNow: 1612500,
    discount: 25,
    rating: 0,
    image: "./images/Products/cama2.jpeg",
  },


];

export const Dormiluna = () => {
  return (
    <section className="Info_card">

      <div className="conten_descriptions" >

        <div className="Oferta" >
            {/* Oferta destacada */}
          <div className="offer-section">
            <div className="offer-card">
              <h3>Colchón Somma + Cama Nogal</h3>
              <p className="offer-price">Ahora: $4.479.000</p>
              <p className="offer-old-price">Antes: $7.349.000</p>
              <button className="btn-offer">VER OFERTA</button>
            </div>
          </div>

          {/* Descripción */}
          <p className="description">
            Porque en Colchones DormiLuna <strong>SOMOS MÁS QUE COLCHONES</strong>, buscando ser la mejor opción de salud y descanso...
          </p>

        </div>

        

        {/* Productos */}
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <span className="discount-badge">-{product.discount}%</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-size">{product.size}</p>
              <p className="product-old-price">${product.priceBefore.toLocaleString()}</p>
              <p className="product-price">${product.priceNow.toLocaleString()}</p>
              <button className="btn-buy">Comprar</button>
            </div>
          ))}
        </div>

      </div>
      

      {/* tipos de productos */}
      <div className="product-list">
          
      </div>


      
    </section>
  );
};
