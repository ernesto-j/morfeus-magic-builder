import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  "Early access to all platform features",
  "Priority support & onboarding",
  "Exclusive community access",
  "Special launch pricing"
];

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! Check your email for next steps.");
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="text-gradient">Transform</span> Your Team?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the future of autonomous AI development
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border"
              />
              <Button type="submit" variant="hero" size="lg" className="sm:w-auto">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              No spam, ever. Unsubscribe at any time.
            </p>
          </form>

          {/* Social proof placeholder */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Join <span className="text-primary font-semibold">500+</span> teams already on the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
