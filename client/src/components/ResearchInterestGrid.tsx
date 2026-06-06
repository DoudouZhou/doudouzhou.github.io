import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RESEARCH_INTEREST_DETAILS } from "@/siteData";
import {
  Activity,
  Bot,
  Brain,
  Database,
  GitBranch,
  Layers,
  Network,
  type LucideIcon,
} from "lucide-react";

const interestIcons: LucideIcon[] = [
  Brain,
  Activity,
  Bot,
  Layers,
  Database,
  Network,
  GitBranch,
];

type ResearchInterestGridProps = {
  className?: string;
  showDescriptions?: boolean;
  showTags?: boolean;
  variant?: "feature" | "compact";
};

export default function ResearchInterestGrid({
  className,
  showDescriptions = true,
  showTags = false,
  variant = "feature",
}: ResearchInterestGridProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "grid gap-3",
        isCompact ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {RESEARCH_INTEREST_DETAILS.map((interest, index) => {
        const Icon = interestIcons[index] ?? Brain;

        return (
          <div
            key={interest.title}
            className={cn(
              "group flex gap-3 rounded-lg transition-colors",
              isCompact
                ? "items-start bg-secondary px-3 py-2.5"
                : "min-h-[150px] border border-border bg-background p-4 hover:border-primary/40 hover:bg-secondary/50"
            )}
          >
            <div
              className={cn(
                "flex shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
                isCompact ? "h-8 w-8" : "h-10 w-10"
              )}
            >
              <Icon className={isCompact ? "h-4 w-4" : "h-5 w-5"} />
            </div>
            <div className="min-w-0">
              <h3
                className={cn(
                  "font-semibold leading-snug",
                  isCompact ? "text-sm" : "text-base"
                )}
              >
                {interest.title}
              </h3>
              {showDescriptions && (
                <p
                  className={cn(
                    "mt-1 text-muted-foreground",
                    isCompact ? "text-xs leading-relaxed" : "text-sm leading-relaxed"
                  )}
                >
                  {interest.description}
                </p>
              )}
              {showTags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {interest.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
