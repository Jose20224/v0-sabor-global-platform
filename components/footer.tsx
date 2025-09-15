import { Globe, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Sabor Global</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Conectamos culturas a través de la comida. Descubre, cocina y comparte recetas auténticas de todo el mundo
              en nuestra comunidad global.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Recetas Populares
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nuevas Recetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chefs Destacados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog de Cocina
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Sabor Global. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
