import React from 'react'

function Listing({data}) {

  function titleLength(title) {
    return (title?.length > 50) ? `${title.slice(0, 50)}...` : title;
  }

  function codeCurrency(currencyCode) {
    if (currencyCode === "EUR") {
      return "€";
    }
    if (currencyCode === "USD") {
      return "$";
    }
    return `${currencyCode} `;
  };

  function level(quanity) {
    if (quanity < 10) {
      return "level-low";
    }
    if (quanity > 10 && quanity < 21) {
      return "level-medium";
    }
    if (quanity > 20) {
      return "level-high";
    }
  };

  return (
    <div className='item-list'>
      {data.map((item) => {
        const {
          MainImage,
          listing_id,
          url,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        return (
          <div key={listing_id} className='item'>
            <div class="item-image">
              <a href={url}>
                <img src={MainImage && MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{titleLength(title)}</p>
              <p className="item-price">{codeCurrency(currency_code)}{price}</p>
              <p className={`item-quantity ${level(quantity)}`}>{quantity} left</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Listing