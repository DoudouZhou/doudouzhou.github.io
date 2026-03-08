/*
 * Footer component for personal academic website
 */

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container py-12">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Doudou Zhou. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
