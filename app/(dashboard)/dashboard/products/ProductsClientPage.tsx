// ProductsClientPage.tsx

'use client'

import SummaryCard from '@/components/products/SummaryCard'
import Filters from '@/components/products/Filters'

import {
  Loader,
  Package,
  CircleCheckBig,
  TriangleAlert,
  CircleX,
} from 'lucide-react'

import React, { useEffect, useState } from 'react'

type Product = {
  _id: string
  name: string
  description: string
  price: string
  stock: number
  image: string
  category: string
}

const ProductsClientPage = () => {
  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState<Product[]>([])

  const [categories, setCategories] = useState<string[]>([])

  const [selectedCategory, setSelectedCategory] =
    useState('')

  useEffect(() => {
    setLoading(true)

    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')

        const data = await res.json()

        setProducts(data)

        setLoading(false)
      } catch (error) {
        console.error(error)

        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories')

        const data = await res.json()

        setCategories(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategories()
  }, [])

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category === selectedCategory
      )
    : products

  const totalProducts = products.length

  const activeProducts = products.length

  const lowStock = products.filter(
    (product) => product.stock < 5
  ).length

  const outStock = products.filter(
    (product) => product.stock === 0
  ).length

  if (loading) {
    return (
      <div className='h-125 w-full grid place-items-center'>
        <Loader
          size={30}
          className='animate-spin text-orange-500'
        />
      </div>
    )
  }

  return (
    <div className='w-full h-full'>

      {/* SUMMARY */}

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>

        <SummaryCard
          icon={Package}
          title='Total Products'
          value={totalProducts}
          color='blue'
        />

        <SummaryCard
          icon={CircleCheckBig}
          title='Active Products'
          value={activeProducts}
          color='green'
        />

        <SummaryCard
          icon={TriangleAlert}
          title='Low Stock'
          value={lowStock}
          color='orange'
        />

        <SummaryCard
          icon={CircleX}
          title='Out of Stock'
          value={outStock}
          color='red'
        />

      </div>

      {/* CONTENT */}

      <div className='p-4 rounded-xl bg-white shadow-lg mt-6 lg:mt-10'>

        <Filters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={
            setSelectedCategory
          }
        />

        {/* PRODUCTS */}

      </div>

    </div>
  )
}

export default ProductsClientPage