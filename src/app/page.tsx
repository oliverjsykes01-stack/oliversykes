import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Layout, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Briefcase
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <span className="font-semibold text-lg">Oliver Sykes</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#work" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Work
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button asChild size="sm">
                <Link href="/design-concepts">
                  <Palette className="mr-2 h-4 w-4" />
                  Design Concepts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact Hanzo Match */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7deaf] via-white to-[#f9e8b5] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Top Banner - Booking Open */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 bg-white/80 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-black">Booking Open — 2 Spots Left</span>
              </div>
            </div>

            {/* Main Headline Section - Exact Hanzo Layout */}
            <div className="relative mb-16">
              {/* Main Headline */}
              <div className="text-center mb-8">
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tight leading-[0.8] text-black dark:text-white" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '700'}}>
                  <div className="flex items-baseline justify-center gap-4">
                    <span className="block">Unlimited</span>
                    <span className="block text-gray-500 text-6xl md:text-7xl lg:text-8xl">Design</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-4">
                    <span className="block text-gray-500 text-6xl md:text-7xl lg:text-8xl">for</span>
                    <span className="block">Solid Startups</span>
                  </div>
                </h1>
              </div>

              {/* Image Boxes - Positioned Exactly Like Hanzo */}
              <div className="absolute top-0 right-0 w-64 h-80">
                {/* First Image Box - App Mockup */}
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                    <div className="bg-white rounded-lg h-full p-4">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-xs font-semibold text-gray-800">Hobby Point.</p>
                        <div className="mt-4 bg-red-500 text-white text-xs px-3 py-1 rounded">CALL ME</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-48 h-60">
                {/* Second Image Box - Abstract Logo */}
                <div className="relative w-full h-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive Text */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: '300'}}>
                We help startups and brands create beautiful, functional products — fast and hassle-free.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-16">
              <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-black hover:bg-gray-800 text-white border border-white/20">
                <Link href="#work">
                  Choose your plan
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>

            {/* Trusted by Leaders Section */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {/* Avatar Circles */}
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Trusted by Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate creative developer with over 5 years of experience building 
              digital experiences that combine beautiful design with robust functionality. 
              I specialize in modern web technologies and love creating solutions that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new design trends, 
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/design-concepts">
                  <Palette className="mr-2 h-4 w-4" />
                  View Design Process
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-600" />
                Design & UI/UX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems", "Accessibility"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-green-600" />
                Backend & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Git"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Code className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm font-medium">E-commerce Platform</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Modern E-commerce Solution</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A full-stack e-commerce platform built with Next.js, featuring advanced search, 
                payment integration, and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Stripe</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="#">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Palette className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm font-medium">Portfolio Website</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Creative Portfolio</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A stunning portfolio website with interactive animations, 
                smooth transitions, and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Framer Motion</Badge>
                <Badge variant="secondary">GSAP</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="#">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Layout className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm font-medium">SaaS Dashboard</p>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A comprehensive analytics dashboard with real-time data visualization, 
                user management, and reporting features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">D3.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="#">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/application">
              <Briefcase className="mr-2 h-5 w-5" />
              View All Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">oliver@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-muted-foreground">London, UK</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Availability</h3>
                      <p className="text-sm text-muted-foreground">Available for new projects</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link href="mailto:oliver@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/design-concepts">
                      <Palette className="mr-2 h-4 w-4" />
                      View Design Process
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard">
                      <Layout className="mr-2 h-4 w-4" />
                      Component Showcase
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OS</span>
                </div>
                <span className="font-semibold text-lg">Oliver Sykes</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Creative Developer & Designer crafting beautiful digital experiences with modern technologies.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="mailto:oliver@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="#work" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </Link>
                <Link href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
                <Link href="/design-concepts" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Design Concepts
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Web Development</p>
                <p className="text-sm text-muted-foreground">UI/UX Design</p>
                <p className="text-sm text-muted-foreground">Consulting</p>
                <p className="text-sm text-muted-foreground">Technical Support</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Oliver Sykes. All rights reserved. Built with Next.js and shadcn/ui.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
