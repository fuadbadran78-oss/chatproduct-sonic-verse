import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productVR from "@/assets/product-vr.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productTablet from "@/assets/product-tablet.jpg";
import productMouse from "@/assets/product-mouse.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";
import productController from "@/assets/product-controller.jpg";
import productDrone from "@/assets/product-drone.jpg";
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
  },
  {
    id: 5,
    image: productEarbuds,
    name: "سماعات أذن لاسلكية نيون",
    price: "٥٩٩ ريال",
    description: "أهلاً! أنا سماعات الأذن النيونية اللاسلكية. صغيرة الحجم لكن قوية الصوت! تصميمي المتوهج الأرجواني والأزرق سيجعلك محط الأنظار. مع تقنية البلوتوث المتقدمة وعمر بطارية طويل، سأكون رفيقك المثالي في كل مكان!"
  },
  {
    id: 6,
    image: productCamera,
    name: "كاميرا ذكية هولوجرافية",
    price: "٢٤٩٩ ريال",
    description: "مرحباً بك! أنا الكاميرا الذكية الهولوجرافية. التقط لحظاتك المميزة بألوان نيونية خيالية وجودة 8K فائقة الوضوح. مع شاشتي المضيئة وتأثيراتي الخاصة، سأحول صورك إلى أعمال فنية مستقبلية!"
  },
  {
    id: 7,
    image: productTablet,
    name: "تابلت مستقبلي متطور",
    price: "٣٢٩٩ ريال",
    description: "السلام عليكم! أنا التابلت المستقبلي المتطور. شاشتي الهولوجرافية الضخمة وحوافي النيونية المتوهجة ستأخذك لعالم من الإبداع والترفيه. مثالي للرسم، الألعاب، والعمل. أنا بوابتك للمستقبل الرقمي!"
  },
  {
    id: 8,
    image: productMouse,
    name: "ماوس ألعاب RGB احترافي",
    price: "٤٩٩ ريال",
    description: "أهلاً بك! أنا ماوس الألعاب الاحترافي. مع إضاءة RGB الديناميكية وتصميمي الانسيابي، سأعطيك دقة وسرعة فائقة في كل حركة. مستشعراتي المتطورة وأزراري القابلة للبرمجة ستجعلك بطلاً لا يُقهر!"
  },
  {
    id: 9,
    image: productSpeaker,
    name: "مكبر صوت نيون لاسلكي",
    price: "٨٩٩ ريال",
    description: "مرحباً! أنا مكبر الصوت النيوني اللاسلكي. صوتي القوي وإضاءتي الراقصة مع الموسيقى ستحول أي مكان إلى حفلة مذهلة! مع تقنية الصوت المحيطي ٣٦٠ درجة وتصميمي المضاد للماء، أنا جاهز للمغامرة معك!"
  },
  {
    id: 10,
    image: productSmartphone,
    name: "هاتف ذكي هولوجرافي",
    price: "٣٩٩٩ ريال",
    description: "السلام عليكم! أنا الهاتف الذكي الهولوجرافي. شاشتي المتوهجة وحوافي النيونية ستبهرك بكل نظرة. مع أقوى معالج وأحدث تقنيات الذكاء الاصطناعي، سأكون أكثر من مجرد هاتف - سأكون مساعدك الشخصي الذكي!"
  },
  {
    id: 11,
    image: productController,
    name: "يد تحكم ألعاب RGB",
    price: "٦٩٩ ريال",
    description: "أهلاً! أنا يد التحكم الاحترافية RGB. أزراري المضيئة وتصميمي المريح سيجعلان تجربة اللعب لديك لا مثيل لها. مع اهتزازات عالية الدقة واتصال لاسلكي فائق السرعة، استعد للفوز في كل مباراة!"
  },
  {
    id: 12,
    image: productDrone,
    name: "طائرة درون نيون متطورة",
    price: "٤٥٩٩ ريال",
    description: "مرحباً في السماء! أنا الطائرة الدرون النيونية المتطورة. مع أضواء LED الساحرة وكاميرتي 4K المثبتة، سألتقط لك صوراً وفيديوهات مذهلة من السماء. تحكم ذكي، طيران سلس، ومغامرات لا تنتهي تنتظرك معي!"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1800px] mx-auto">
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
