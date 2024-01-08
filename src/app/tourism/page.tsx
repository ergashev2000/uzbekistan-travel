import optimizePath from '@/util/optimizePath';
import Link from 'next/link'
import React from 'react'

export default function page() {

  const url = optimizePath('Спортивный туризм')
  const url2 = optimizePath("Культурный туризм");
  return (
    <div className="min-h-screen pt-44 flex gap-10">
      <Link href={`/tourism/${url}`}>Спортивный туризмъ</Link>
      <Link href={`/tourism/${url2}`}>Культурный туризмъ</Link>
    </div>
  );
}
