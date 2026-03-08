/*
 * Teaching page for STAR Lab
 */

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar } from "lucide-react";

export default function Teaching() {
  const courses = [
    {
      code: "DSA4213",
      title: "Natural Language Processing for Data Science",
      semester: "Semester 1, AY2025/2026",
      description: "An introduction to natural language processing techniques with applications in data science, covering text preprocessing, word embeddings, sequence models, and transformer architectures.",
      topics: ["Text Processing", "Word Embeddings", "Transformers", "LLMs", "Applications"]
    },
    {
      code: "ST5230",
      title: "Applied Natural Language Processing",
      semester: "Semester 2, AY2024/2025, AY2025/2026",
      description: "This course covers modern natural language processing, from classical statistical language models to contemporary large language models. Topics include word embeddings, neural language models, Transformers, pretraining, post-training and alignment, efficient adaptation, knowledge distillation, retrieval-augmented generation, reasoning, agents, and multimodal learning, with applications in healthcare and the social sciences.",
      topics: [
        "Language modeling",
        "Word embeddings",
        "RNNs and LSTMs",
        "Transformers",
        "Pretraining",
        "Instruction tuning and alignment",
        "PEFT and LoRA",
        "Knowledge distillation",
        "Question answering and RAG",
        "Reasoning and agents",
        "Multimodal learning",
        "Healthcare NLP"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="gradient-text">Teaching</span>
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Courses taught by Dr. Doudou Zhou at the National University of Singapore
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{course.code}</h3>
                      <h4 className="text-xl text-muted-foreground mb-3">{course.title}</h4>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {course.semester}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Topics Covered:</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
