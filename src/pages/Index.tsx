import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ImageUpload";
import { PromptInput } from "@/components/PromptInput";
import { Sparkles, Video } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt || !selectedImage) return;
    
    setIsGenerating(true);
    // Simulação de geração
    setTimeout(() => {
      setIsGenerating(false);
      console.log("Gerando vídeo com:", { prompt, image: selectedImage.name });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-xl bg-background/30">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  VideoGen AI
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Geração de Vídeo com IA</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Crie vídeos incríveis
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  com inteligência artificial
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforme suas ideias em vídeos profissionais usando o poder da IA.
                Simples, rápido e com resultados surpreendentes.
              </p>
            </div>

            {/* Generator Card */}
            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card animate-scale-in">
              <div className="space-y-8">
                {/* Prompt Input */}
                <PromptInput value={prompt} onChange={setPrompt} />

                {/* Image Upload */}
                <ImageUpload onImageSelect={setSelectedImage} />

                {/* Generate Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    variant="premium"
                    size="lg"
                    onClick={handleGenerate}
                    disabled={!prompt || !selectedImage || isGenerating}
                    className="min-w-[240px]"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Video className="w-5 h-5" />
                        Gerar Vídeo
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: Video,
                  title: "Alta Qualidade",
                  description: "Vídeos em resolução premium com renderização profissional",
                },
                {
                  icon: Sparkles,
                  title: "IA Avançada",
                  description: "Algoritmos de última geração para resultados perfeitos",
                },
                {
                  icon: Video,
                  title: "Rápido e Fácil",
                  description: "Gere vídeos em minutos com interface intuitiva",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
