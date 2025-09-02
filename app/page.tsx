import { Button } from "@/components/ui/button"
import { FileText, Download, Chrome } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg border border-border p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                  Convert Kimi to PDF Chats Instantly
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Transform webpages, articles, and more into easy-to-share PDFs with a single click.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://chromewebstore.google.com/detail/kimi-to-pdf/kgeabhljeaccflldpdonkkimcdedfmca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Chrome className="mr-2 h-5 w-5" />
                    Add to Chrome
                  </a>
                </Button>
                
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Free to use
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  One-click conversion
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Works offline
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Browser Window Mockup */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">example.com/article</div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="bg-primary text-primary-foreground rounded-full p-3">
                      <Download className="h-6 w-6" />
                    </div>
                  </div>

                  {/* PDF Document */}
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-8 w-8 text-red-500" />
                      <div>
                        <div className="font-medium text-gray-900">article.pdf</div>
                        <div className="text-sm text-gray-500">Ready to share</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
