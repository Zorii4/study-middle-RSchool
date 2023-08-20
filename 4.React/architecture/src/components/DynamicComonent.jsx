import React, { Suspense } from "react"

const ComponentName = (name) => {
  return React.lazy(() => import(`../pages/${name}`))
}

export function Component(props) {

  const Component = ComponentName(props.name)

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  )
}