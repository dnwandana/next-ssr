import { Product } from "@/types/Product";
import { Col, Row } from "antd";
import ProductCard from "@/components/ProductCard";

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <main style={{ minHeight: "100vh" }}>
      <Row gutter={16}>
        {products.map((product) => (
          <Col key={product.id} span={6} style={{ padding: "16px" }}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </main>
  );
}
