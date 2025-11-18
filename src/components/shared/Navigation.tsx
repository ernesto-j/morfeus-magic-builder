import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Framework", path: "/framework" },
    { name: "Agentic Consulting", path: "/agentic-consulting" },
    { name: "About", path: "/about" },
  ];

  const domainLinks = [
    { name: "Morfeus Data", path: "/data" },
    { name: "Morfeus Blueprints", path: "/blueprints" },
    { name: "Morfeus Cyber", path: "#", disabled: true },
    { name: "Morfeus Engineer", path: "#", disabled: true },
    { name: "Morfeus Architecture", path: "#", disabled: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            MORFEUS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Domains Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                Domains
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background border-border">
                {domainLinks.map((domain) => (
                  <DropdownMenuItem key={domain.path} asChild disabled={domain.disabled}>
                    <Link
                      to={domain.path}
                      className={cn(
                        "cursor-pointer",
                        domain.disabled && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {domain.name}
                      {domain.disabled && (
                        <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                      )}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              size="sm"
              onClick={() => window.open("https://app.scoreapp.com/st/ZnJhbWV3b3JrfHx8fHx8aHR0cHM6Ly9tb3JmZXVzLXNpdGUubG92YWJsZS5hcHA=", "_blank")}
              className="ml-2"
            >
              Request Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Domains Section */}
              <div className="py-2">
                <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Domains</div>
                <div className="flex flex-col gap-2 pl-2">
                  {domainLinks.map((domain) => (
                    <Link
                      key={domain.path}
                      to={domain.path}
                      onClick={() => !domain.disabled && setIsOpen(false)}
                      className={cn(
                        "text-sm transition-colors py-1",
                        domain.disabled 
                          ? "text-muted-foreground/50 cursor-not-allowed"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {domain.name}
                      {domain.disabled && (
                        <span className="ml-2 text-xs">(Coming Soon)</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <Button 
                size="sm"
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://app.scoreapp.com/st/ZnJhbWV3b3JrfHx8fHx8aHR0cHM6Ly9tb3JmZXVzLXNpdGUubG92YWJsZS5hcHA=", "_blank");
                }}
                className="w-full"
              >
                Request Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
