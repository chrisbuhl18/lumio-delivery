import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-8 w-1/2 mx-auto" />
      </div>

      <div className="flex justify-center gap-16 mt-8">
        <Skeleton className="h-[500px] w-[320px] rounded-xl" />
        <Skeleton className="h-[500px] w-[320px] rounded-xl" />
      </div>
    </div>
  )
}
