import "./ProductCard.css";
function ProductCard({ product }) {
  const image = product.images?.[0];
  const price = Number(product.price);
  const compareAtPrice = Number(product.compare_at_price);
  const discount =
    compareAtPrice > 0
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : 0;
  const savedAmount = compareAtPrice > price ? compareAtPrice - price : 0;
  return (
    <article className="product-card">
      <div className="product-card-image">
        {image && <img src={image} alt={product.name} />}
        {discount > 0 && (
          <span className="discount-badge">
            {discount}% <br /> OFF
          </span>
        )}
      </div>
      <div className="product-card-details">
        <h3>{product.name}</h3>
        <div className="product-card-price">
          <span className="product-Price">₹{Number(price)}</span>
          {product.compare_at_price && (
            <span className="product-old-price">
              ₹{Number(product.compare_at_price)}
            </span>
          )}
        </div>
        {savedAmount > 0 && (
          <p className="product-save">Save - ₹{savedAmount}</p>
        )}
      </div>
    </article>
  );
}
export default ProductCard;
