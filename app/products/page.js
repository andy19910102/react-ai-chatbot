export default function Products() {
    const productList = [
        {
            id: "1",
            name: 'Product 1',
            price: 100,
            image: 'https://picsum.photos/id/100/800/600',
            description: 'This is product 1 description',
        },
        {
            id: "2",
            name: 'Product 2',
            price: 200,
            image: 'https://picsum.photos/id/200/800/600',
            description: 'This is product 2 description',
        },
        {
            id: "3",
            name: 'Product 3',
            price: 300,
            image: 'https://picsum.photos/id/300/800/600',
            description: 'This is product 3 description',
        },
        {
            id: "4",
            name: 'Product 4',
            price: 400,
            image: 'https://picsum.photos/id/400/800/600',
            description: 'This is product 4 description',
        }
    ];


    return (
        <>
            <header className="py-10 bg-gradient-to-r from-slate-100 to-slate-200">
                <div className="container px-5">
                    <h1 className="text-4xl font-bold mb-3">Products</h1>
                    <p>Render a list of products</p>
                </div>
            </header>
            <section className="py-10">
                <div className="container px-5">
                    <div className="flex flex-wrap">
                        {/* 這是一個產品卡片 */}
                        <div className="w-1/3">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src="https://picsum.photos/id/999/800/600" alt="" className="w-full h-48 object-cover object-center mb-4" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold">Product 999</h2>
                                    <p className="text-gray-500">$ 999</p>
                                    <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">More details</a>
                                </div>
                            </div>
                        </div>
                        {/* 這是一個產品卡片 end */}
                    </div>
                </div>
            </section>
        </>
    )
}