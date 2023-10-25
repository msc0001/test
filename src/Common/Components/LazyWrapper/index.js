import React, { Suspense } from "react";

export default function LazyComponentHandler({
    lazyComponent: LazyComponent,
    fallback = "Loading..."
}) {
    return <Suspense fallback={fallback}>
        <LazyComponent />
    </Suspense>
}