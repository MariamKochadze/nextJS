import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Welcome home page</h1>
            <Link href={'/blog'}>blog</Link>
            <Link href={'/product'}>Products</Link>
        </>
    );
}
