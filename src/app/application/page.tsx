import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ExternalLink, Code, Palette, User, Briefcase, Mail, Github, Linkedin } from "lucide-react";

export default function ApplicationPage() {
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
            Portfolio Starter Kit
          </Badge>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Oliver Sykes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your professional portfolio starter kit - showcasing modern design and interactive features
            </p>
          </div>
        </div>

        {/* Portfolio Demo Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Portfolio Features Demo</h2>
            <p className="text-muted-foreground">
              Interactive examples of what your portfolio can include
            </p>
          </div>

          {/* Profile Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Avatar className="w-24 h-24 border-4 border-white/20">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Oliver Sykes" />
                    <AvatarFallback className="text-2xl">OS</AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold">Oliver Sykes</h3>
                    <p className="text-xl opacity-90 mb-4">Creative Professional & Developer</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        Frontend Developer
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        UI/UX Designer
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        Creative Director
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold">Contact</p>
                    <p className="text-sm text-muted-foreground">oliver@example.com</p>
                  </div>
                  <div className="text-center">
                    <Github className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">@oliversykes</p>
                  </div>
                  <div className="text-center">
                    <Linkedin className="h-8 w-8 mx-auto mb-2 text-blue-700" />
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Oliver Sykes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Technologies */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Skills & Technologies
                </CardTitle>
                <CardDescription>
                  Technologies and tools I work with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "React", "Next.js", "TypeScript", "Tailwind CSS",
                    "Node.js", "Python", "Figma", "Adobe Creative Suite",
                    "WebGL", "Three.js", "GSAP", "Framer Motion"
                  ].map((skill) => (
                    <HoverCard key={skill}>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                          <span className="font-semibold">{skill}</span>
                          <span className="text-xs text-muted-foreground">Click for details</span>
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">{skill}</h4>
                          <p className="text-sm text-muted-foreground">
                            Experience with {skill} in various projects and applications.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <ExternalLink className="h-3 w-3" />
                            <span>View projects using {skill}</span>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Featured Projects
                </CardTitle>
                <CardDescription>
                  A selection of my recent work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Palette className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">E-commerce Platform</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Modern e-commerce solution with React, Next.js, and Stripe integration.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Stripe</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <User className="h-16 w-16 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Portfolio Website</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Creative portfolio with interactive animations and modern design.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Framer Motion</Badge>
                        <Badge variant="secondary">GSAP</Badge>
                        <Badge variant="secondary">Three.js</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Feature Demo */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Features</CardTitle>
                <CardDescription>
                  Hover over the cards below to see interactive elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="cursor-pointer transition-all hover:shadow-lg">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h4 className="font-semibold mb-2">Code Examples</h4>
                          <p className="text-sm text-muted-foreground">
                            Interactive code snippets and demos
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Code Examples</h4>
                        <p className="text-sm text-muted-foreground">
                          Showcase your coding skills with interactive examples and live demos.
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-xs font-mono">
                          const portfolio = &quot;amazing&quot;;
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="cursor-pointer transition-all hover:shadow-lg">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="font-semibold mb-2">Design Gallery</h4>
                          <p className="text-sm text-muted-foreground">
                            Visual portfolio of design work
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Design Gallery</h4>
                        <p className="text-sm text-muted-foreground">
                          Display your creative work with high-quality images and case studies.
                        </p>
                        <div className="h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="cursor-pointer transition-all hover:shadow-lg">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <h4 className="font-semibold mb-2">About Me</h4>
                          <p className="text-sm text-muted-foreground">
                            Personal story and background
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">About Me</h4>
                        <p className="text-sm text-muted-foreground">
                          Share your journey, passion, and what drives your creative work.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>📍 Based in London</span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upgrade Guidance */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Ready to Customize?
                </CardTitle>
                <CardDescription>
                  This is your starter kit - let&apos;s make it uniquely yours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This demo shows the foundation of your portfolio. We can customize every element to match your personal brand and showcase your specific work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/dashboard">
                      Explore Components
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">
                      Back to Home
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
