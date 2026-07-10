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

// ─── Closure notice ──────────────────────────────────────────────────────────

export type ClosureNotice = {
  enabled: boolean;
  preset: 'private-event' | 'holiday-week' | 'july-4th' | 'custom';
  customMessage?: string;
  reopenDate?: string;   // YYYY-MM-DD
  startDate?: string;    // YYYY-MM-DD
  endDate?: string;      // YYYY-MM-DD
} | null;

export async function getClosureNotice(): Promise<ClosureNotice> {
  try {
    return await sanityClient.fetch<ClosureNotice>(
      `*[_type == "closureNotice" && _id == "closureNotice"][0]{
        enabled, preset, customMessage, reopenDate, startDate, endDate
      }`
    );
  } catch {
    return null;
  }
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
