import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye, Code, Palette } from "lucide-react";

export default function DesignConceptsPage() {
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
            Design Concepts
          </Badge>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Design{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Concepts
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your design ideas and concepts for the portfolio
            </p>
          </div>
        </div>

        {/* Design Concepts Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Main Page Design
              </CardTitle>
              <CardDescription>
                Your main page layout and design concept
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/Main page.png"
                  alt="Main page design concept"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                My Work Section
              </CardTitle>
              <CardDescription>
                Portfolio and work showcase design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/My work.png"
                  alt="My work design concept"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Description Section
              </CardTitle>
              <CardDescription>
                Project description and overview design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/Description.png"
                  alt="Description design concept"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                How To Section
              </CardTitle>
              <CardDescription>
                Process and how-to guide design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <Image
                  src="/How to.png"
                  alt="How to design concept"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Notes */}
        <div className="mt-20">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Notes</CardTitle>
              <CardDescription>
                Ready to implement these design concepts into your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I can see your design concepts and I'm ready to help implement them! 
                Each design shows a different section of your portfolio with specific layouts and styling.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Available for Implementation:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Main page layout and hero section</li>
                    <li>• Work/portfolio showcase section</li>
                    <li>• Project description components</li>
                    <li>• How-to/process section</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Next Steps:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Choose which design to implement first</li>
                    <li>• Specify any custom colors or fonts</li>
                    <li>• Add interactive elements if needed</li>
                    <li>• Test on localhost before deploying</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/application">
                    View Current Portfolio
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/dashboard">
                    View Components
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
