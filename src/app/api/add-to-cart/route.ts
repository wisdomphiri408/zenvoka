import { NextResponse } from "next/server";


export async function POST(req:Request) {
    const body = await req.json();

    const {productId, userId} = body;

    if(!productId || !userId){
        return NextResponse.json({error:'Missing Product or UserId'},{status:400});
    }

    try{
        const res = await fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
                userId,
                date: new Date().toISOString().split('T')[0],
                products:[{productId, quantity:1}],
            })
        });

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json({ error: 'Failed to add to cart', details: errorData }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data, { status: 200 });
    }catch(err){
        console.error('Add to cart error:', err);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
