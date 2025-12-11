import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <div className="aurora absolute inset-0 pointer-events-none" />
      <div className="grid-background absolute inset-0 pointer-events-none opacity-30" />
      
      <div className="text-center relative z-10">
        <h1 className="font-display text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="font-mono text-lg text-muted-foreground mb-8">
          &gt; Page_not_found.exe
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Home className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
