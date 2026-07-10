import { sanityClient } from './sanity';
import type { HeirloomEvent } from '@/data/events';

// ─── Menu ────────────────────────────────────────────────────────────────────

export async function getPrixFixe() {
  return sanityClient.fetch<{
    price: number;
    withPairings: number;
    courses: { dish: string; pairing: string }[];
  }>(`*[_type == "prixFixeMenu"][0]{ price, withPairings, courses }`);
}

export async function getALaCarte() {
  return sanityClient.fetch<{ name: string; price: number }[]>(
    `*[_type == "aLaCarteItem" && available == true] | order(order asc){ name, price }`
  );
}

// ─── Wine list ────────────────────────────────────────────────────────────────

export async function getWineList() {
  return sanityClient.fetch<{
    category: string;
    wines: { name: string; glass?: number; bottle: number; halfBottle?: boolean }[];
  }[]>(
    `*[_type == "wineList"][0].sections[]{ category, wines[]{ name, glass, bottle, halfBottle } }`
  );
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function getEvents() {
  return sanityClient.fetch<HeirloomEvent[]>(
    `*[_type == "event"] | order(date desc){
      "id": _id,
      title, date, endDate, time, price, status, category,
      description, longDescription, recurring, reservationUrl, highlight,
      menu[]{ course, wine }
    }`
  );
}
