import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, FileText } from "lucide-react";
import syntheticPrevalenceImage from "../assets/synthetic-prevalence.png";

export function SyntheticStudySection() {
  return (
    <section id="research" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Research & Applied Studies
          </h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A featured study exploring synthetic-like content patterns and human interaction behavior
            in online communities through NLP, embeddings, manual review, and classifier-based analysis.
          </p>
        </div>

        <Card className="border-[#1A1A1A] shadow-xl overflow-hidden">
            <div className="relative bg-[#2F2F2F] flex items-start justify-center p-6">
              <ImageWithFallback
                src={syntheticPrevalenceImage}
                alt="Synthetic prevalence study poster"
                className="w-full h-auto max-h-[620px] object-contain object-top"
              />
            </div>

            <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-3xl text-black mb-4">
                Synthetic Content & Human Interaction Study
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                This study investigates how <span className="font-medium">synthetic-like content</span>{" "}
                appears in online communities and how it relates to human interaction patterns. The
                project combines structured data collection, text cleaning, manual labeling, and statistical
                analysis to study comment behavior at scale while carefully framing results as observational
                rather than definitive proof of AI authorship.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The workflow included building a week-balanced Reddit dataset, applying NLP preprocessing,
                generating text representations, using classifier-based synthetic-likeness scoring, and comparing
                engagement metrics across communities. The project emphasized rigor, reproducibility, and cautious
                interpretation of results in a socially relevant AI context.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  Python
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  NLP
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  Embeddings
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  TF-IDF
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  Logistic Regression
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  Data Analysis
                </Badge>
                <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                  Visualization
                </Badge>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-2xl text-[#0A66C2] font-semibold">12</p>
                  <p className="text-sm text-gray-600">Week Study Window</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-2xl text-[#0A66C2] font-semibold">7,606</p>
                  <p className="text-sm text-gray-600">Cleaned Comments</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-2xl text-[#0A66C2] font-semibold">0.849</p>
                  <p className="text-sm text-gray-600">Best ROC-AUC</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white px-6"
                >
                  <a
                    href="https://github.com/NafisAnwar/synthetic-content-human-interaction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-6"
                >
                  <a
                    href="/research/synthetic-content-human-interaction-paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Research Highlight
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
