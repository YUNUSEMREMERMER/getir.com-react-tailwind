import React from 'react'

function Category({category}) {
  return (
    <a href='#' className='flex flex-col group gap-y-2 items-center text-center p-4 transition hover:bg-purple-50'>
      <img src={category.image} alt={category.title} className="w-12 h-12 rounded border border-gray-200" />
      <span className='text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight'> {category.title} </span>
    </a>
  )
}

export default Category