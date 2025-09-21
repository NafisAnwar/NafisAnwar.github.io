import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import type { FormEvent } from "react";

export function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value ?? "";
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const subjectRaw = (form.elements.namedItem("subject") as HTMLInputElement)?.value ?? "";
    const messageRaw = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";

    const subject =
      subjectRaw.trim() ||
      `Message from ${firstName} ${lastName}`.trim();

    const body = `Name: ${firstName} ${lastName}
Email: ${email}

${messageRaw}`.trim();

    const mailto = `mailto:anwarnafisneo@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-[#1A1A1A] shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl text-black mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's build something amazing together!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center group-hover:bg-[#1E90FF] transition-colors duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700">
                        <a
                          href="mailto:anwarnafisneo@gmail.com"
                          className="hover:text-[#1E90FF] transition-colors duration-300"
                        >
                          anwarnafisneo@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center group-hover:bg-[#1E90FF] transition-colors duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="text-gray-700">
                        <a
                          href="https://www.linkedin.com/in/nafisanwar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#1E90FF] transition-colors duration-300"
                        >
                          linkedin.com/in/nafisanwar
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center group-hover:bg-[#1E90FF] transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">GitHub</p>
                      <p className="text-gray-700">
                        <a
                          href="https://github.com/NafisAnwar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#1E90FF] transition-colors duration-300"
                        >
                          github.com/NafisAnwar
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-[#1A1A1A] mt-8">
                  <p className="text-gray-600 mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-[#0A66C2] hover:bg-[#1E90FF] text-white p-3 transition-all duration-300 transform hover:scale-110"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/nafisanwar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#1A1A1A] hover:bg-[#1E90FF] text-white p-3 transition-all duration-300 transform hover:scale-110"
                      asChild
                    >
                      <a
                        href="https://github.com/NafisAnwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white p-3 transition-all duration-300 transform hover:scale-110"
                      asChild
                    >
                      <a href="mailto:anwarnafisneo@gmail.com" aria-label="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-[#1A1A1A] shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl text-black mb-6">Send Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="border-[#1A1A1A] focus:border-[#1E90FF] focus:ring-[#1E90FF] transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="border-[#1A1A1A] focus:border-[#1E90FF] focus:ring-[#1E90FF] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="border-[#1A1A1A] focus:border-[#1E90FF] focus:ring-[#1E90FF] transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    className="border-[#1A1A1A] focus:border-[#1E90FF] focus:ring-[#1E90FF] transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="border-[#1A1A1A] focus:border-[#1E90FF] focus:ring-[#1E90FF] transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1E90FF] hover:bg-[#0A66C2] text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
