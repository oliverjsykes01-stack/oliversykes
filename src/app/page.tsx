import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm w-fit">
                <MapPin className="mr-2 h-3 w-3" />
                London, UK
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Oliver Sykes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Creative Developer & Designer crafting beautiful digital experiences with modern technologies and thoughtful design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="#work">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="mailto:oliver@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar className="w-32 h-32 border-4 border-white/20">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Oliver Sykes" />
                  <AvatarFallback className="text-4xl bg-white/20 text-white">OS</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white text-sm">
                    &quot;Passionate about creating digital experiences that matter&quot;
                  </p>
                </div>
              </div>
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
