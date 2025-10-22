import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const PromptInput = ({
  value,
  onChange,
  placeholder = "Descreva o vídeo que você deseja criar...",
}: PromptInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-primary" />
        Prompt do Vídeo
      </label>
      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-[140px] bg-card/30 backdrop-blur-sm border-border focus:border-primary/50 resize-none text-base transition-all duration-300"
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
          {value.length} caracteres
        </div>
      </div>
    </div>
  );
};
