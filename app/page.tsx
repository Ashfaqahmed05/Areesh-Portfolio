"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  GraduationCap,
  Code,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedText } from "@/components/animated-text"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  // Animation refs for each section
  const [aboutVisible, aboutRef] = useIntersectionObserver()
  const [experienceVisible, experienceRef] = useIntersectionObserver()
  const [educationVisible, educationRef] = useIntersectionObserver()
  const [skillsVisible, skillsRef] = useIntersectionObserver()
  const [projectsVisible, projectsRef] = useIntersectionObserver()
  const [referencesVisible, referencesRef] = useIntersectionObserver()
  const [contactVisible, contactRef] = useIntersectionObserver()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      // Replace 'your-form-id' with the form ID you get from Formspree
      const response = await fetch("https://formspree.io/f/xnnpedap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
        // Reset form status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000)
      } else {
        setFormStatus("error")
        // Reset form status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000)
      }
    } catch (error) {
      setFormStatus("error")
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-heading font-bold text-xl gradient-text">Muhammad Areesh</div>
          <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Education
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary to-accent"
          >
            <a href="#contact">Get in Touch</a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col space-y-4">
          <a
              href="#"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary py-2 transition-transform duration-300 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full mt-2 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary to-accent"
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 hero-gradient bg-hero-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in text-shadow">
                  <span className="gradient-text">Muhammad Areesh</span>
                </h1>
                <p className="text-xl text-gray-600 md:text-2xl font-medium">
                  <AnimatedText text="Software Engineer & Junior Lecturer" speed={80} />
                </p>
              </div>
              <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in animate-delay-500 leading-relaxed">
                Dynamic and innovative Software Engineer with a passion for education and a commitment to fostering
                student success.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in animate-delay-700">
                <Button
                  asChild
                  className="hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary to-accent shadow-md"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                >
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
              <div className="flex gap-4 pt-4 animate-fade-in animate-delay-900">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/muhammad-areesh-a12b181bb" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center animate-fade-in animate-delay-500">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white shadow-xl animate-float bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/Areesh2.jpeg"
                  alt="Muhammad Areesh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-dots-pattern">
        <div ref={aboutRef} className={`container px-4 md:px-6 section-fade-in ${aboutVisible ? "visible" : ""}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                About Me
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Who I Am</h2>
              <div className="section-divider"></div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 animate-slide-left animate-delay-300">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-primary">Professional Background</h3>
                <p className="text-gray-600 md:text-lg">
                  I am a Software Engineer with a strong academic background and practical experience in web development
                  and education. Currently serving as a Website Coordinator and Junior Lecturer at Sohail University, I
                  bring a unique blend of technical expertise and teaching abilities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-primary">Personal Approach</h3>
                <p className="text-gray-600 md:text-lg">
                  Beyond my professional skills, I pride myself on my positive attitude and incredible work ethic. I am
                  committed to continuous learning and growth, both as a developer and as an educator.
                </p>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Date of Birth</p>
                  <p className="text-sm text-gray-600">January 15, 2002</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-slide-right animate-delay-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-4 shadow-sm card-hover glass-card">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Development</h3>
                  <p className="text-center text-sm text-gray-600">
                    Creating responsive and user-friendly web applications
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-4 shadow-sm card-hover glass-card">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Education</h3>
                  <p className="text-center text-sm text-gray-600">Passionate about teaching and mentoring students</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-4 shadow-sm card-hover glass-card">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Business</h3>
                  <p className="text-center text-sm text-gray-600">Experience in business development and sales</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-white p-4 shadow-sm card-hover glass-card">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Research</h3>
                  <p className="text-center text-sm text-gray-600">Skilled in research and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div
          ref={experienceRef}
          className={`container px-4 md:px-6 section-fade-in ${experienceVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Experience
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Professional Journey
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My career path in software engineering, education, and business development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12">
          <div className="relative pl-8 timeline-line timeline-dot animate-fade-in">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-primary">Invigilation Comittee</h3>
                  <Badge className="bg-gradient-to-r from-primary to-accent animate-pulse">Current</Badge>
                </div>
                <p className="text-sm text-gray-500">SOHAIL UNIVERSITY - Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">Aug 2024 - Present</p>
              </div>
            </div>
            <div className="relative pl-8 timeline-line timeline-dot animate-fade-in">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-primary">Website Coordinator</h3>
                  <Badge className="bg-gradient-to-r from-primary to-accent animate-pulse">Current</Badge>
                </div>
                <p className="text-sm text-gray-500">SOHAIL UNIVERSITY - Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">May 2024 - Present</p>
                <p className="text-gray-600">
                  Responsible for managing and maintaining the university website, ensuring content is up-to-date and
                  the site functions optimally.
                </p>
              </div>
            </div>
            <div className="relative pl-8 timeline-line timeline-dot animate-fade-in animate-delay-200">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-primary">Jr. Lecturer/Lab Instructor</h3>
                  <Badge className="bg-gradient-to-r from-primary to-accent animate-pulse">Current</Badge>
                </div>
                <p className="text-sm text-gray-500">SOHAIL UNIVERSITY - Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">March 2024 - Present</p>
                <p className="text-gray-600">
                  Teaching computer science and software engineering courses, conducting lab sessions, and mentoring
                  students.
                </p>
              </div>
            </div>
            <div className="relative pl-8 timeline-line timeline-dot animate-fade-in animate-delay-400">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold text-primary">Teaching Assistant</h3>
                <p className="text-sm text-gray-500">
                  SIR SYED UNIVERSITY OF ENGINEERING & TECHNOLOGY - Karachi, Pakistan
                </p>
                <p className="text-sm text-gray-500">October 2023 - January 2024</p>
                <p className="text-gray-600">
                  Assisted professors with course material preparation, grading, and providing support to students.
                </p>
              </div>
            </div>
            <div className="relative pl-8 timeline-line timeline-dot animate-fade-in animate-delay-600">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold text-primary">Business Development</h3>
                <p className="text-sm text-gray-500">CO-VENTECH - Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">February 2024 - March 2024</p>
                <p className="text-gray-600">
                  Worked on business development strategies, market research, and client acquisition.
                </p>
              </div>
            </div>
            <div className="relative pl-8 timeline-line timeline-dot animate-fade-in animate-delay-800">
              <div className="space-y-2 p-4 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-bold text-primary">Customer Sales Representative</h3>
                <p className="text-sm text-gray-500">Alpha Solutions - Karachi, Pakistan</p>
                <p className="text-sm text-gray-500">February 2020 - August 2020</p>
                <p className="text-gray-600">
                  Handled customer inquiries, processed sales, and provided excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-dots-pattern">
        <div
          ref={educationRef}
          className={`container px-4 md:px-6 section-fade-in ${educationVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Education
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Academic Background
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My educational journey and qualifications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          <Card className="overflow-hidden card-hover animate-scale-in glass-card">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-primary">MS-Software Engineering</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">SIR SYED University of Engineering And Technology</p>
                <p className="text-sm text-gray-600 mb-2">Karachi, Pakistan</p>
                <p className="text-sm text-gray-600 mb-4">Oct 2024</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    Continue
                  </Badge>

                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in glass-card">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-primary">BS-Software Engineering</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">SIR SYED University of Engineering And Technology</p>
                <p className="text-sm text-gray-600 mb-2">Karachi, Pakistan</p>
                <p className="text-sm text-gray-600 mb-4">March 2024</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    CGPA 3.5
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    First Division
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-200 glass-card">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-primary">Pre-Engineering</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">GDC MAJEED SRE III</p>
                <p className="text-sm text-gray-600 mb-2">Karachi, Sindh, Pakistan</p>
                <p className="text-sm text-gray-600 mb-4">April 2019</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-400 glass-card">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-primary">Matriculation</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">MUHAMMADI PUBLIC SCHOOL</p>
                <p className="text-sm text-gray-600 mb-2">Karachi, Sindh, Pakistan</p>
                <p className="text-sm text-gray-600 mb-4">January 2017</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div ref={skillsRef} className={`container px-4 md:px-6 section-fade-in ${skillsVisible ? "visible" : ""}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Professional Competencies
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive overview of my technical and soft skills.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="technical" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-primary/10 to-accent/10">
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
                >
                  Technical Skills
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="mt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Development</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          HTML
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          CSS
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          PHP
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Java
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Python
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          C Language
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Tools & Software</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          MS-OFFICE
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Canva
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Adobe
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Seamless.ai
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          LinkedIn Sales Navigator
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Business</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Cold Calling
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Research & Development
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Upwork Bidding
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Marketing
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Communication</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Communication Skills
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Active Listening
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Report Writing
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Interpersonal Skills
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Teaching</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Teaching Abilities
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Curriculum Development
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Advising and Mentorship
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover card-with-pattern">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-primary">Workplace</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Teamwork
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Collaboration
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Decision Making
                        </Badge>
                        <Badge className="skill-badge bg-primary/10 text-primary hover:bg-primary hover:text-white">
                          Adaptability
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-primary">Languages</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between p-4 border rounded-lg card-hover glass-card">
                  <div>
                    <p className="font-medium">Urdu</p>
                    <p className="text-sm text-gray-600">First Language</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent">Native</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg card-hover glass-card">
                  <div>
                    <p className="font-medium">English</p>
                    <p className="text-sm text-gray-600">Second Language</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent">Proficient (C2)</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-dots-pattern">
        <div ref={projectsRef} className={`container px-4 md:px-6 section-fade-in ${projectsVisible ? "visible" : ""}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Academic Projects
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A showcase of my academic and personal projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden card-hover animate-scale-in glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Restaurant Management System</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">Restaurant Management System</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Developed a comprehensive restaurant management system to streamline food-related operations using
                  HTML, CSS and PHP.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    HTML
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    CSS
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    PHP
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-200 glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Resume Generator</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">Resume Generator</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Designed and implemented a tool to generate professional resumes automatically using Java.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Java
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    UI Design
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-400 glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">MP3 Player</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">MP3 Player</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Developed a feature-rich MP3 player application with a user-friendly interface using Java.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Java
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Audio Processing
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-200 glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Doctor Appointment System</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">Doctor Appointment System</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Designed and developed a system for scheduling and managing doctor appointments efficiently using
                  Java.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Java
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Database
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-400 glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">E-Commerce Website</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">E-Commerce Website</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Designed and developed a user-friendly e-commerce website specializing in clothing brands.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    HTML
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    CSS
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    JavaScript
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden card-hover animate-scale-in animate-delay-600 glass-card">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold">Student Web Portal</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">Student Web Portal</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Designed and developed a web portal tailored for student use, incorporating features such as course
                  registration, grades viewing, and communication tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">
                    Web Development
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white skill-badge">AI</Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center gap-1">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div
          ref={referencesRef}
          className={`container px-4 md:px-6 section-fade-in ${referencesVisible ? "visible" : ""}`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                References
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Professional References
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Academic and professional references who can vouch for my skills and character.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <Card className="card-hover animate-scale-in glass-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full animate-float bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image
                      src="/Aqeel-ur-Rehman.jpg"
                      alt="Prof. Dr. Aqeel ur Rehman"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-primary">Prof. Dr. Aqeel ur Rehman</h3>
                  <p className="text-sm text-gray-600">Professor & Dean</p>
                  <p className="text-sm text-gray-600">Faculty of Management & Information Sciences</p>
                  <p className="text-sm text-gray-600 mb-4">Sohail University</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a target="_blank" href="https://www.linkedin.com/in/prof-dr-aqeel-ur-rehman-b047794/">Contact</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover animate-scale-in animate-delay-300 glass-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full animate-float bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image src="/Dr Naseem.jpg" alt="Dr. Naseem" fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-primary">Dr. Naseem</h3>
                  <p className="text-sm text-gray-600">Chairman</p>
                  <p className="text-sm text-gray-600">Software Engineering Department</p>
                  <p className="text-sm text-gray-600 mb-4">Sir Syed University of Engineering & Technology</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a target="_blank" href="https://www.linkedin.com/in/dr-muhammad-naseem-25110217/">Contact</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-dots-pattern">
        <div ref={contactRef} className={`container px-4 md:px-6 section-fade-in ${contactVisible ? "visible" : ""}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Get In Touch
              </h2>
              <div className="section-divider"></div>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4 animate-slide-left">
              <div className="flex items-center gap-3 card-hover p-3 rounded-lg glass-card">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600">muhammadareesh44@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 card-hover p-3 rounded-lg glass-card">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-600">03432321370</p>
                </div>
              </div>
              <div className="flex items-center gap-3 card-hover p-3 rounded-lg glass-card">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-600">House# 3/1260, Shah Faisal Colony, Karachi, Sindh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 card-hover p-3 rounded-lg glass-card">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Date of Birth</p>
                  <p className="text-sm text-gray-600">January 15, 2002</p>
                </div>
              </div>
              <div className="flex items-center gap-3 card-hover p-3 rounded-lg glass-card">
                <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">CNIC Number</p>
                  <p className="text-sm text-gray-600">42201-4931184-1</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-slide-right">
              <form onSubmit={handleSubmit} className="grid gap-4 p-6 rounded-lg glass-card shadow-sm">
                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5" />
                    <p>Your message has been sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-center gap-2 mb-4">
                    <AlertCircle className="h-5 w-5" />
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    className="transition-all duration-300 focus:scale-105 border-primary/20 focus:border-primary"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="flex min-h-[120px] w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:scale-105 focus:border-primary"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-primary to-accent shadow-md"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-gray-50 to-white">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              &copy; {new Date().getFullYear()} Muhammad Areesh. All rights reserved.
            </p>
          </div>
          <div className="md:ml-auto flex items-center">
            <p className="text-center text-sm text-gray-600">
              Designed & Developed by{" "}
              <a
                href="https://portfolio-git-main-ashfaqahmed05s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-300 font-medium"
              >
               Ashfaq Ahmed
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
