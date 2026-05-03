'use client'
import SummaryCard from '@/components/products/SummaryCard';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import {
  Package,
  CircleCheckBig,
  TriangleAlert,
  CircleX,
} from "lucide-react";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  category: string;
};

const ProductsClientPage = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      setLoading(true)
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        const data = await res.json();

        setProducts(data);
        setLoading(false)
      } catch (error) {
          console.error(error);
          setLoading(false)
      }
    };

    fetchProducts();
    }, []);
    
    const totalProducts = products?.length
    const activeProducts = products?.length
    const lowStock = 3
    const outStock = 2
    
    
    if (loading) {
        return (
            <div className='h-125 w-full grid place-items-center'>
                    <Loader size={30} className='animate-spin text-orange-500' />
            </div>
        )
    }

  return (
      <div className='w-full h-full'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

  <SummaryCard
    icon={Package}
    title="Total Products"
                  value={totalProducts}
                  color='blue'
  />

  <SummaryCard
    icon={CircleCheckBig}
    title="Active Products"
                  value={activeProducts}
                  color='green'
  />

  <SummaryCard
    icon={TriangleAlert}
    title="Low Stock"
                  value={lowStock}
                  color='orange'
  />

  <SummaryCard
    icon={CircleX}
    title="Out of Stock"
    value={outStock}
    color='red'
  />

</div>
    </div>
  )
}

export default ProductsClientPage