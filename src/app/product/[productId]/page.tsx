export default function ProductList({ params }: { params: { productId: string } }) {
    return <h1>Product {params.productId}</h1>;
}
