import { useState } from "react";
import { Volume2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

export const ProductCard = ({ image, name, price, description }: ProductCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySound = () => {
    setIsPlaying(true);
    
    // Simulate voice playback
    const utterance = new SpeechSynthesisUtterance(description);
    utterance.lang = 'ar-SA';
    utterance.rate = 1.1;
    utterance.pitch = 1.2;
    
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-500 transform-3d hover:scale-105 animate-slide-up">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Product Name */}
        <h3 className="text-2xl font-bold gradient-text animate-glow">
          {name}
        </h3>

        {/* Price */}
        <p className="text-3xl font-extrabold text-secondary animate-pulse-slow">
          {price}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Voice Button */}
          <Button
            variant="neon"
            size="lg"
            className={`flex-1 ${isPlaying ? 'animate-bounce-in' : ''}`}
            onClick={handlePlaySound}
          >
            <Volume2 className={`ml-2 ${isPlaying ? 'animate-pulse' : ''}`} />
            {isPlaying ? 'يتحدث...' : 'استمع'}
          </Button>

          {/* Buy Button */}
          <Button
            variant="neonCyan"
            size="lg"
            className="flex-1"
          >
            <ShoppingCart className="ml-2" />
            اشتر الآن
          </Button>
        </div>

        {/* Decorative Neon Lines */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-float" />
      <div className="absolute bottom-8 left-6 w-3 h-3 rounded-full bg-secondary animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: '2s' }} />
    </Card>
  );
};
