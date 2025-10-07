import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productVR from "@/assets/product-vr.jpg";
import logo from "@/assets/logo.png";

const products = [
  {
    id: 1,
    image: productHeadphones,
    name: "سماعات النيون المستقبلية",
    price: "٩٩٩ ريال",
    description: "مرحباً! أنا سماعات النيون المستقبلية. تصميمي الأنيق بألوان أرجوانية وتركوازية مذهلة سيأخذك إلى عالم من الموسيقى النقية. مع تقنية إلغاء الضوضاء المتقدمة وإضاءة نيون LED قابلة للتخصيص، سأجعل تجربتك الموسيقية لا تُنسى!"
  },
  {
    id: 2,
    image: productSmartwatch,
    name: "ساعة هولوجرافية ذكية",
    price: "١٢٩٩ ريال",
    description: "أهلاً بك! أنا الساعة الذكية الهولوجرافية. شاشتي النابضة بالحياة وألواني النيونية الساحرة ستبهرك. أتتبع صحتك، لياقتك، وأبقيك على اتصال دائم بأسلوب مستقبلي لا مثيل له. أنا أكثر من مجرد ساعة، أنا رفيقك الذكي!"
  },
  {
    id: 3,
    image: productKeyboard,
    name: "لوحة مفاتيح RGB الاحترافية",
    price: "٧٩٩ ريال",
    description: "السلام عليكم! أنا لوحة المفاتيح RGB الاحترافية. مفاتيحي المضاءة بألوان قوس قزح وتصميمي الانسيابي سيجعلان كل ضغطة زر تجربة فريدة. مثالية للاعبين والمبدعين، أنا هنا لأرفع مستوى أدائك إلى آفاق جديدة!"
  },
  {
    id: 4,
    image: productVR,
    name: "نظارة الواقع الافتراضي",
    price: "١٧٩٩ ريال",
    description: "مرحباً في المستقبل! أنا نظارة الواقع الافتراضي. مع إضاءتي النيونية الساحرة وتقنيتي المتطورة، سأنقلك إلى عوالم لا حدود لها. ارتدني وانطلق في مغامرات ثلاثية الأبعاد لم تختبرها من قبل!"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-bounce-in">
            <img 
              src={logo} 
              alt="ChatProduct Logo" 
              className="w-32 h-32 md:w-40 md:h-40 animate-float glow-purple"
            />
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 glass rounded-full animate-bounce-in">
            <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
            <span className="text-sm font-semibold text-muted-foreground">المنتجات تتحدث الآن!</span>
            <Sparkles className="w-5 h-5 text-accent animate-spin-slow" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-scale-in">
            <span className="gradient-text">ChatProduct</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            اكتشف تجربة تسوق فريدة حيث <span className="text-primary font-bold">كل منتج يتحدث معك</span> بصوته الخاص! 
            استمع لوصف المنتجات بطريقة ممتعة ومرحة
          </p>
        </header>

        {/* Products Grid */}
        <main className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1600px] mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.id}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg mb-4">
              تجربة تسوق تفاعلية من المستقبل 🚀
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold">
                تصميم مستقبلي
              </span>
              <span className="px-4 py-2 bg-secondary/20 rounded-full text-secondary font-semibold">
                تفاعل صوتي
              </span>
              <span className="px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold">
                تجربة ممتعة
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
