import { Button } from "@/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh gap-24 p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div className="space-y-6">
          <h1 className="display-1">Display 1</h1>
          <h2 className="display-2">Display 2</h2>
          <h3 className="display-3">Display 3</h3>
          <h1 className="header-1">Header 1</h1>
          <h2 className="header-2">Header 2</h2>
          <h3 className="header-3">Header 3</h3>
          <h4 className="header-4">Header 4</h4>

          <p className="body-1">Body 1</p>
          <p className="body-2">Body 2</p>
          <p className="body-3">Body 3</p>
          <p className="body-4">Body 4</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-8">
          <Button variant="default">Apply to Pilot Cohort</Button>
          <Button variant="outline">John Discord</Button>
        </div>
        <Button variant="ghost" className="w-full">
          Challenge me and see
        </Button>
      </div>
    </div>
  )
}
