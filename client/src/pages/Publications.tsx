/*
 * Publications page for STAR Lab
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getPublicationShortVenue,
  getPublicationSortKey,
  getPublicationYearLabel,
  publicationCategoryLabels,
  publicationTopicLabels,
  publicationTopicOrder,
  publicationTypeLabels,
  publications,
  type Publication,
  type PublicationCategory,
  type PublicationTopic,
  type PublicationType,
} from "@/data/publications";
import { CalendarDays, ExternalLink, FileText, ListFilter, Search } from "lucide-react";
import { useMemo, useState } from "react";

type StatusFilter = "all" | PublicationType;
type CategoryFilter = "all" | PublicationCategory;
type TopicFilter = "all" | PublicationTopic;
type ViewMode = "list" | "year";

function PublicationCard({ pub }: { pub: Publication }) {
  const yearLabel = getPublicationYearLabel(pub);

  return (
    <Card className="p-5 transition-colors hover:border-primary/40">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge variant={pub.type === "published" ? "default" : "secondary"}>
              {publicationTypeLabels[pub.type]}
            </Badge>
            <Badge variant="outline">{publicationCategoryLabels[pub.category]}</Badge>
            {yearLabel && <Badge variant="outline">{yearLabel}</Badge>}
            {pub.topics.map((topic) => (
              <Badge key={`${pub.title}-${topic}`} variant="secondary">
                {publicationTopicLabels[topic]}
              </Badge>
            ))}
          </div>

          <h3 className="mb-2 text-lg font-semibold leading-relaxed">{pub.title}</h3>
          <p className="mb-2 text-sm text-muted-foreground">{pub.authors}</p>
          <p className="mb-4 text-sm italic text-muted-foreground">{pub.venue}</p>

          {pub.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {pub.links.map((link) => (
                <Button key={`${pub.title}-${link.label}`} variant="outline" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Publications() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [topicFilter, setTopicFilter] = useState<TopicFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [query, setQuery] = useState("");

  const stats = useMemo(
    () => ({
      all: publications.length,
      published: publications.filter((pub) => pub.type === "published").length,
      preprint: publications.filter((pub) => pub.type === "preprint").length,
    }),
    []
  );

  const topicOptions: Array<{ value: TopicFilter; label: string; count: number }> = useMemo(
    () => [
      { value: "all", label: "All Topics", count: publications.length },
      ...publicationTopicOrder.map((topic) => ({
        value: topic,
        label: publicationTopicLabels[topic],
        count: publications.filter((pub) => pub.topics.includes(topic)).length,
      })),
    ],
    []
  );

  const filteredPublications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...publications]
      .filter((pub) => statusFilter === "all" || pub.type === statusFilter)
      .filter((pub) => categoryFilter === "all" || pub.category === categoryFilter)
      .filter((pub) => topicFilter === "all" || pub.topics.includes(topicFilter))
      .filter((pub) => {
        if (!normalizedQuery) return true;
        return [
          pub.title,
          pub.authors,
          pub.venue,
          getPublicationShortVenue(pub),
          ...pub.topics.map((topic) => publicationTopicLabels[topic]),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .sort(
        (a, b) =>
          getPublicationSortKey(b) - getPublicationSortKey(a) ||
          a.title.localeCompare(b.title)
      );
  }, [categoryFilter, query, statusFilter, topicFilter]);

  const groupedPublications = useMemo(() => {
    return filteredPublications.reduce<Record<string, Publication[]>>((groups, pub) => {
      const groupKey = pub.type === "preprint" ? "Preprints" : getPublicationYearLabel(pub);
      const safeKey = groupKey || "Other";
      groups[safeKey] = groups[safeKey] ?? [];
      groups[safeKey].push(pub);
      return groups;
    }, {});
  }, [filteredPublications]);

  const groupOrder = useMemo(() => {
    return Object.keys(groupedPublications).sort((a, b) => {
      if (a === "Preprints") return -1;
      if (b === "Preprints") return 1;
      return Number.parseInt(b, 10) - Number.parseInt(a, 10);
    });
  }, [groupedPublications]);

  const statusOptions: Array<{ value: StatusFilter; label: string; count: number }> = [
    { value: "all", label: "All", count: stats.all },
    { value: "published", label: "Published", count: stats.published },
    { value: "preprint", label: "Preprints", count: stats.preprint },
  ];

  const categoryOptions: Array<{ value: CategoryFilter; label: string }> = [
    { value: "all", label: "All Areas" },
    { value: "methodology", label: "Methodology & Theory" },
    { value: "applications", label: "Applications" },
  ];

  const hasActiveFilters =
    Boolean(query) || statusFilter !== "all" || categoryFilter !== "all" || topicFilter !== "all";

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Statistical methodology, machine learning, AI systems, and biomedical data science.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            *: Contributed equally or alphabetic order | #: Corresponding author
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-5xl gap-3 sm:grid-cols-3">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="mt-1 text-2xl font-bold">{stats.all}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Published</p>
            <p className="mt-1 text-2xl font-bold">{stats.published}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Preprints</p>
            <p className="mt-1 text-2xl font-bold">{stats.preprint}</p>
          </Card>
        </div>

        <div className="mx-auto mb-10 max-w-5xl rounded-lg border border-border bg-secondary/40 p-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search titles, authors, venues, or topics"
                className="pl-9"
              />
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <ListFilter className="mr-2 h-4 w-4" />
                List
              </Button>
              <Button
                variant={viewMode === "year" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("year")}
              >
                <CalendarDays className="mr-2 h-4 w-4" />
                By Year
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <Button
                key={option.value}
                variant={statusFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label}
                <span className="ml-2 rounded bg-background/40 px-1.5 text-xs">
                  {option.count}
                </span>
              </Button>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {categoryOptions.map((option) => (
              <Button
                key={option.value}
                variant={categoryFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {topicOptions.map((option) => (
              <Button
                key={option.value}
                variant={topicFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setTopicFilter(option.value)}
              >
                {option.label}
                <span className="ml-2 rounded bg-background/40 px-1.5 text-xs">
                  {option.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPublications.length} publication
              {filteredPublications.length === 1 ? "" : "s"}
            </p>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setStatusFilter("all");
                  setCategoryFilter("all");
                  setTopicFilter("all");
                }}
              >
                Clear filters
              </Button>
            )}
          </div>

          {filteredPublications.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              No publications match the current filters.
            </Card>
          ) : viewMode === "year" ? (
            <div className="space-y-8">
              {groupOrder.map((group) => (
                <section key={group} className="space-y-4">
                  <h2 className="text-2xl font-bold">{group}</h2>
                  <div className="space-y-4">
                    {groupedPublications[group].map((pub) => (
                      <PublicationCard key={pub.title} pub={pub} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPublications.map((pub) => (
                <PublicationCard key={pub.title} pub={pub} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
