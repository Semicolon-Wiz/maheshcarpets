import React from 'react'
import Data from './Data'
import { handKnotted } from "@/data/productdata.js";

export default function page() {
  return (
    <Data data={handKnotted} />
  )
}
export const metadata = {
  title: 'Hand-Knotted Carpets | Timeless Luxury Rugs by Mahesh Carpets',
  description: 'Explore premium hand-knotted carpets, crafted with precision and artistry. Elevate your home with timeless luxury and unmatched quality.',
}