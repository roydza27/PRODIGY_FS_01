import { Separator } from "@/shared/components/ui/separator"
import { SidebarTrigger } from "@/shared/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-[#27272A] bg-[#111113]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111113]/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-1 lg:gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="font-heading text-lg font-semibold tracking-tight text-[#FAFAFA]">Documents</h1>
        </div>
        <div className="text-sm font-medium text-[#FAFAFA] hover:text-[#A1A1AA] cursor-pointer transition-colors">
          GitHub
        </div>
      </div>
    </header>
  )
}
