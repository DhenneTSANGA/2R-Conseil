import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scan QR Code — 2REF EXPERTISE",
  description: "Scannez notre QR Code pour nous contacter ou accéder à nos services.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ScanPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-6 bg-background">
      <div className="relative group animate-reveal-up">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 to-primary/20 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col items-center gap-6 rounded-2xl bg-card p-8 shadow-2xl border border-border/50">
          <div className="relative aspect-square w-64 md:w-80 overflow-hidden rounded-xl bg-white p-4 flex items-center justify-center">
            {/* 
                Note: Assurez-vous que l'image existe dans /public/images/qrcode.png 
                Sinon, cela affichera une erreur 404 pour l'image.
            */}
            <Image
              src="/images/qrcode.png"
              alt="QR Code"
              width={400}
              height={400}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Scannez le QR Code
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Accédez instantanément à nos services numériques
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

