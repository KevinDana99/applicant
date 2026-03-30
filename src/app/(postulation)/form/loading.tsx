import React, { Suspense } from 'react'

const PostulationFormLoading = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default PostulationFormLoading
