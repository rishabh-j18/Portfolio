// src/components/loading-section.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingSection() {
  return (
    <div className="w-full h-96 flex items-center justify-center p-8" data-testid="loading-section">
      <div className="space-y-4 w-full max-w-4xl">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
        </div>
        <p className="text-center text-muted-foreground">Loading section content...</p>
      </div>
    </div>
  )
}
