"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react"
import heroImage from "@/assets/colorful-streetwear-model-urban-vibrant.png";
import collectionImage1 from "@/assets/colorful-streetwear-tshirt-urban-vibrant.png";
import collectionImage2 from "@/assets/colorful-streetwear-hoodie-urban-vibrant.png";
import collectionImage3 from "@/assets/colorful-streetwear-collection-urban-vibrant.png";
import visionImage from "@/assets/colorful-streetwear-design-urban-vibrant.png";

export default function HomePage() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const collections = [
    {
      id: 1,
      name: "Urban Essentials",
      image: collectionImage1.src,
      priceFrom: 89,
    },
    {
      id: 2,
      name: "Street Signature",
      image: collectionImage2.src,
      priceFrom: 129,
    },
    {
      id: 3,
      name: "Core Collection",
      image: collectionImage3.src,
      priceFrom: 99,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage.src})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-balance">Street Culture</h2>
          <p className="text-xl md:text-2xl font-light mb-8 text-pretty max-w-2xl mx-auto">
            Authentic streetwear that defines your urban identity
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 transition-all duration-300 group">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Latest Drops</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fresh streetwear pieces that blend urban culture with contemporary design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-none bg-card">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-playfair font-semibold mb-2">{collection.name}</h4>
                    <p className="text-muted-foreground">From ${collection.priceFrom}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                ZYKUS represents the intersection of street culture and contemporary fashion. We create pieces that
                speak to the urban generation - those who live authentically and express themselves boldly through their
                style.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Every piece is designed with the streets in mind, combining comfort, durability, and cutting-edge
                aesthetics to create streetwear that moves with you and defines your presence in the urban landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={visionImage.src}
                alt="Our Vision"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-playfair font-bold mb-4">ZYKUS</h4>
              <p className="text-background/80 text-pretty">
                Authentic streetwear for the urban generation. Express yourself boldly.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#collections" className="text-background/80 hover:text-background transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-background/80 hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">© 2024 ZYKUS. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}