import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ExternalLink, 
  Code, 
  Palette, 
  Layout, 
  MousePointer,
  Zap,
  Shield,
  Smartphone,
  Globe
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Badge variant="outline" className="text-sm">
            Component Showcase
          </Badge>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              shadcn/ui{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete component library with 46+ production-ready components, themes, and design patterns
            </p>
          </div>
        </div>

        {/* Ecosystem Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Design System</h2>
            <p className="text-muted-foreground">
              Everything you need to build beautiful, accessible interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Components</CardTitle>
                <CardDescription>
                  46+ production-ready components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Docs
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Themes</CardTitle>
                <CardDescription>
                  Beautiful color palettes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <a href="https://ui.shadcn.com/themes" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Themes
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Blocks</CardTitle>
                <CardDescription>
                  Complete page layouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <a href="https://ui.shadcn.com/blocks" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Blocks
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Charts</CardTitle>
                <CardDescription>
                  Data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm">
                  <a href="https://ui.shadcn.com/charts" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Charts
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Showcase */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="data">Data Display</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MousePointer className="h-5 w-5" />
                      Interactive Elements
                    </CardTitle>
                    <CardDescription>
                      Buttons, toggles, and interactive components
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2 flex-wrap">
                      <Button size="sm">Primary</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                      <Button variant="outline" size="sm">Outline</Button>
                      <Button variant="ghost" size="sm">Ghost</Button>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Feedback
                    </CardTitle>
                    <CardDescription>
                      Alerts, dialogs, and notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        This is an info alert with proper contrast.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Success message with accessible colors.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Responsive Design
                    </CardTitle>
                    <CardDescription>
                      Mobile-first responsive components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      All components are built with mobile-first responsive design principles.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs text-center">
                        Mobile
                      </div>
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs text-center">
                        Desktop
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>
                      Input fields, selects, and form controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea 
                        placeholder="Enter your message"
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-background h-20 resize-none"
                      />
                    </div>
                    <Button className="w-full">Submit</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Form Validation</CardTitle>
                    <CardDescription>
                      Built-in validation and error handling
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Required Field</label>
                      <input 
                        type="text" 
                        placeholder="This field is required"
                        className="w-full px-3 py-2 border border-red-200 dark:border-red-800 rounded-md bg-background"
                      />
                      <p className="text-xs text-red-600 dark:text-red-400">
                        This field is required
                      </p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Valid Field</label>
                      <input 
                        type="text" 
                        value="Valid input"
                        className="w-full px-3 py-2 border border-green-200 dark:border-green-800 rounded-md bg-background"
                      />
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Looks good!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Navigation Components</CardTitle>
                    <CardDescription>
                      Menus, breadcrumbs, and navigation patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <nav className="flex space-x-4">
                      <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        Home
                      </a>
                      <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-800">
                        About
                      </a>
                      <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-800">
                        Projects
                      </a>
                      <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-800">
                        Contact
                      </a>
                    </nav>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>Home</span>
                      <span>/</span>
                      <span>Projects</span>
                      <span>/</span>
                      <span className="text-foreground">Current Page</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sidebar Navigation</CardTitle>
                    <CardDescription>
                      Collapsible sidebar with navigation items
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 rounded-md bg-slate-100 dark:bg-slate-800">
                        <Layout className="h-4 w-4" />
                        <span className="text-sm font-medium">Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-md">
                        <Code className="h-4 w-4" />
                        <span className="text-sm">Projects</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded-md">
                        <Palette className="h-4 w-4" />
                        <span className="text-sm">Design</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Tables</CardTitle>
                    <CardDescription>
                      Sortable, filterable data tables
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Name</th>
                            <th className="text-left p-2">Status</th>
                            <th className="text-left p-2">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Project Alpha</td>
                            <td className="p-2">
                              <Badge variant="secondary">Active</Badge>
                            </td>
                            <td className="p-2">2024-01-15</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Project Beta</td>
                            <td className="p-2">
                              <Badge variant="outline">Pending</Badge>
                            </td>
                            <td className="p-2">2024-01-20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Charts & Visualization</CardTitle>
                    <CardDescription>
                      Data visualization components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">Chart Component</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Interactive charts with Recharts integration
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Documentation Links */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-2xl font-bold">Explore the Complete Ecosystem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All components are built with accessibility, TypeScript, and modern design principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                View All Components
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/application">
                View Starter Kit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
