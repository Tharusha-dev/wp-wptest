'use client'

import {useEffect, useState} from 'react'

/**
 * Not Found component.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
export default function NotFound() {
  const [referer, setReferer] = useState<string | null>(null)

  useEffect(() => {
    // Get the referer from document.referrer on the client side
    setReferer(document.referrer)
  }, [])

  return (
    <>
      <h1 className="text-center">404 - Not Found</h1>
      {referer && <p className="text-center text-red-500">{referer}</p>}
    </>
  )
}
