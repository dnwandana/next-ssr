"use client";

import { Product } from "@/types/Product";
import { Card, Image, Typography } from "antd";

const { Meta } = Card;
const { Paragraph, Text } = Typography;

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      hoverable
      cover={
        <Image
          alt={product.title}
          src={product.image}
          height="250px"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      }
    >
      <Meta
        title={<Text>{product.title}</Text>}
        description={
          <Paragraph
            type="secondary"
            ellipsis={{
              rows: 3,
              expandable: false,
            }}
          >
            {product.description}
          </Paragraph>
        }
      />
    </Card>
  );
};

export default ProductCard;
