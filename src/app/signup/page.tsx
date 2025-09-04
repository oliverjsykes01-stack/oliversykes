"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { 
  Menu, 
  Star, 
  Brain, 
  Volume2, 
  ArrowUp, 
  ArrowDown,
  MousePointer
} from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Please select an age"),
});

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      age: "",
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Redirect to main website
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Mobile App Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Mobile Frame */}
                <div className="w-80 h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200 relative">
                  
                  {/* App Header */}
                  <div className="bg-white p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Menu className="h-5 w-5 text-gray-600" />
                        <span className="text-lg font-semibold text-gray-800">te</span>
                      </div>
                      <div className="text-sm text-gray-500">Library &gt; Create Story</div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-full relative">
                    {/* Background Tree Illustration */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-full transform scale-150 translate-x-8 translate-y-8" />
                    </div>
                    
                    {/* Main Content */}
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold text-gray-800 mb-8" style={{fontFamily: 'Söhne, Inter, system-ui, sans-serif'}}>
                        Go Anywhere. Learn Anything.
                      </h2>
                      
                      {/* Interactive Cards */}
                      <div className="space-y-4">
                        {/* Tale AI Card */}
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Brain className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">Tale AI is thinking...</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Profile Card */}
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm font-semibold">R</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-700">Rush, Age 6</p>
                                </div>
                              </div>
                              <div className="flex flex-col space-y-1">
                                <ArrowUp className="h-4 w-4 text-gray-400" />
                                <ArrowDown className="h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Theme Card */}
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Star className="h-4 w-4 text-green-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">Learn anything</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Mouse Cursor */}
                    <div className="absolute bottom-4 right-4">
                      <MousePointer className="h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                {/* Brand Section */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-4xl font-bold text-red-500" style={{fontFamily: 'Söhne, Inter, system-ui, sans-serif'}}>
                      teenietales
                    </span>
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2" style={{fontFamily: 'Söhne, Inter, system-ui, sans-serif'}}>
                    Your next adventure awaits
                  </h1>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Visual Learning AI</h3>
                    <p className="text-gray-300 text-sm">For creative thinkers.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Volume2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Sound Studio</h3>
                    <p className="text-gray-300 text-sm">For auditory learning.</p>
                  </div>
                </div>

                {/* Sign Up Form */}
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your name" 
                                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Enter your email" 
                                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Age</FormLabel>
                              <FormControl>
                                <select 
                                  className="w-full p-2 bg-white/20 border border-white/30 rounded-md text-white"
                                  {...field}
                                >
                                  <option value="" className="bg-gray-800">Select your age</option>
                                  {[...Array(18)].map((_, i) => (
                                    <option key={i} value={i + 1} className="bg-gray-800">
                                      {i + 1} years old
                                    </option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3"
                          disabled={isLoading}
                        >
                          {isLoading ? "Creating Account..." : "Continue with Google"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {/* Legal Text */}
                <p className="text-xs text-gray-300 text-center mt-4">
                  By creating an account with Teenietales, you agree to our Terms and Privacy. 
                  All data is 100% secure and encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Registration Label */}
      <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
        Test Registration
      </div>
    </div>
  );
}
