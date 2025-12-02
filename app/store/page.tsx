// app/store/page.tsx

"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "./products";
import type { ProductCategory } from "./products";

type CategoryFilter = ProductCategory | "All";
type SortOption = "featured" | "price-low" | "price-high" | "alpha";

const categoryFilters: CategoryFilter[] = ["All", "Notes", "Kits", "Tools", "Apps"];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const visibleProducts = useMemo(() => {
    // 1) filter
    let list =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    // 2) sort
    switch (sortOption) {
      case "price-low":
        list.sort((a, b) => priceValue(a.price) - priceValue(b.price));
        break;
      case "price-high":
        list.sort((a, b) => priceValue(b.price) - priceValue(a.price));
        break;
      case "alpha":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        // keep original array order
        break;
    }

    return list;
  }, [activeCategory, sortOption]);

  return (
    <main className="store-main">
      {/* Hero */}

      
     
        <p className="store-sort-current">
            Sorting by: <span>{sortLabel(sortOption)}</span>
        </p>

      {/* Filter / sort bar */}
      <section className="store-filterbar">
        <div className="store-filterbar-left">
          <span className="store-filterbar-label">Browse</span>

          {categoryFilters.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={
                "store-filter-pill" +
                (activeCategory === cat ? " store-filter-pill-active" : "")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="store-filterbar-right">
          <label className="store-sort-label" htmlFor="sort">
            Sort
          </label>
          <select
            id="sort"
            className="store-sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="alpha">A → Z</option>
          </select>
        </div>
      </section>

      {/* Product grid */}
      <section className="store-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="store-footer-note">
        <p>
          Every product here is built from real problems I solve while learning
          math, code, and simulation. If you&apos;re following the blog journey,
          this is the paid layer on top of that work.
        </p>
      </section>
    </main>
  );
}

/** Helper: turn "$19" into 19 for sorting */
function priceValue(price: string): number {
  const numeric = price.replace(/[^0-9.]/g, "");
  const value = parseFloat(numeric);
  return Number.isNaN(value) ? 0 : value;
}

function sortLabel(option: SortOption) {
  switch (option) {
    case "featured":
      return "Featured";
    case "price-low":
      return "Price (Low → High)";
    case "price-high":
      return "Price (High → Low)";
    case "alpha":
      return "A → Z";
    default:
      return "";
  }
}

