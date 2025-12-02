// app/store/components/ProductCard.tsx
import Link from "next/link";
import type { Product } from "@/app/store/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="store-product-card">
      <div className="store-product-header">
        <div className="store-product-tag-row">
          <span className="store-product-tag">{product.shortTag}</span>
          {product.badge && (
            <span
              className={`store-badge store-badge-${product.badge.toLowerCase()}`}
            >
              {product.badge}
            </span>
          )}
        </div>
        <h2 className="store-product-title">{product.name}</h2>
        <p className="store-product-description">{product.description}</p>
      </div>

      <div className="store-product-footer">
        <div className="store-product-meta">
          <span className="store-product-price">{product.price}</span>
          <span className="store-product-status">
            {product.status === "available" ? "Instant download" : "In progress"}
          </span>
        </div>

        <Link
          href={`/store/${product.slug}`}
          className="store-product-button store-product-button-primary"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
