// app/store/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../products";

type ProductPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const isAvailable = product.status === "available" && !!product.gumroadUrl;

  return (
    <main className="store-detail-main">
      <div className="store-detail-breadcrumb">
        <Link href="/store" className="store-detail-backlink">
          ← Back to store
        </Link>
      </div>

      <section className="store-detail-hero">
        <div className="store-detail-hero-left">
          
          <h1 className="store-detail-title">{product.name}</h1>

          <div className="store-detail-meta-row">
            <span className="store-detail-price">{product.price}</span>
            {product.badge && (
              <span
                className={`store-badge store-badge-${product.badge.toLowerCase()}`}
              >
                {product.badge}
              </span>
            )}
            <span className="store-detail-status">
              {product.status === "available"
                ? "Instant download"
                : "In progress"}
            </span>
          </div>

          <p className="store-detail-longdesc">{product.longDescription}</p>

          <div className="store-detail-cta-row">
            {isAvailable ? (
              <Link
                href={product.gumroadUrl!}
                className="store-product-button store-product-button-primary"
              >
                Buy on Gumroad
              </Link>
            ) : (
              <button
                disabled
                className="store-product-button store-product-button-disabled"
              >
                Coming soon
              </button>
            )}
            <p className="store-detail-cta-note">
              All products are built from the same work I&apos;m doing publicly
              on the blog. This is the packaged, higher-leverage version.
            </p>
          </div>
        </div>

        <aside className="store-detail-hero-right">
          <div className="store-detail-sidebar-card">
            <h2 className="store-detail-sidebar-title">What you&apos;ll get</h2>
            <ul className="store-detail-list">
              {product.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="store-detail-body">
        <div className="store-detail-body-block">
          <h2 className="store-detail-section-title">
            Who this is for
          </h2>
          <ul className="store-detail-list">
            {product.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="store-detail-body-block">
          <h2 className="store-detail-section-title">
            How this fits the bigger journey
          </h2>
          <p className="store-detail-body-text">
            Every product in this store comes out of my long-term project to go
            from Algebra I to building my own simulations, tools, and game
            systems. If you&apos;re following that same path, this product is a
            smaller, focused piece of that same climb.
          </p>
        </div>
      </section>
    </main>
  );
}
