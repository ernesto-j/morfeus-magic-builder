import { Badge } from "@/components/ui/badge";

interface ComingSoonOverlayProps {
  blur?: boolean;
}

const ComingSoonOverlay = ({ blur = true }: ComingSoonOverlayProps) => {
  return (
    <div className="absolute inset-0 backdrop-blur-sm bg-background/70 flex items-center justify-center rounded-lg z-10">
      <Badge variant="secondary" className="text-lg px-6 py-3 shadow-lg">
        Coming Soon
      </Badge>
    </div>
  );
};

export default ComingSoonOverlay;
