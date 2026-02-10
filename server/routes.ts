import type { Express } from "express";
import { type Server } from "http";
import { getRobotsTxt, getSitemapXml } from "./seo";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(getRobotsTxt());
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").send(getSitemapXml());
  });

  return httpServer;
}
