import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Layout, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              🚀 5 Day Sprint Framework
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Oliver Sykes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your professional portfolio landing page is ready to be built with modern tools and elegant design.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/application">
                <Sparkles className="mr-2 h-5 w-5" />
                View Starter Kit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/design-concepts">
                <Palette className="mr-2 h-5 w-5" />
                View Design Concepts
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/dashboard">
                <Layout className="mr-2 h-5 w-5" />
                View Component Showcase
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Modern Tech Stack</CardTitle>
              <CardDescription>
                Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Beautiful Components</CardTitle>
              <CardDescription>
                Complete shadcn/ui ecosystem with 46+ production-ready components
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Portfolio Ready</CardTitle>
              <CardDescription>
                Professional layouts and patterns designed for creative portfolios
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Development Workflow */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Development Workflow</h2>
            <p className="text-muted-foreground">
              From concept to deployment in 5 days
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold">Project Discussion</h3>
              <p className="text-sm text-muted-foreground">
                Define your vision and requirements
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold">Feature Building</h3>
              <p className="text-sm text-muted-foreground">
                Implement features with shadcn/ui components
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold">Local Testing</h3>
              <p className="text-sm text-muted-foreground">
                Test everything on localhost first
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                4
              </div>
              <h3 className="font-semibold">Vercel Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Deploy to production with one click
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-2xl font-bold">Ready to Build Your Portfolio?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the starter kit and component showcase, then let&apos;s discuss your specific portfolio vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/login">
                View Login Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with 5 Day Sprint Framework by Omar Choudhry - Ready for Oliver&apos;s vision</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
