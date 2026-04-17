import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const HEIRLOOM_WINE_LIST = `
CURRENT HEIRLOOM CAFE WINE LIST (By the Glass / Bottle):

SPARKLING:
- N.V. Crémant d'Alsace, Bechtold — 17/68
- N.V. Champagne 1er, Bertrand-Delespierre — 28/112
- N.V. Champagne 1er, Maillart 375ml — 70
- N.V. Champagne Rosé 1er, Dumez 375ml — 70

ROSÉ:
- 2023 Coste della Sesia Rosato, Le Pianelle — 17/68

WHITE:
- 2022 Grüner Edna Valley 'Paragon,' Tatomer — 15/60
- 2024 Alsace Riesling 'd'étoiles,' Mittnacht — 16/64
- 2021 Bianco Toscano 'Prunecchio,' Fattoria — 16/64
- 2024 Douro Branco 'Redoma,' Niepoort — 17/68
- 2023 Slovakia Furmint, Bott Frigyes — 20/80
- 2022 Loire Chenin 'Arcane,' Fosse-Sèche — 21/84
- 2023 Bourgogne Blanc, Buisson — 22/88
- 2023 Mas de Daumas Gassac Blanc 375mL — 64

RED:
- 2019 Chinon 'L'Epée,' du Petit Thouars — 15/60
- 2022 California Red 'Gravels,' Newfound — 16/64
- 2023 Crozes Hermitage 'Papillon,' Robin — 17/68
- 2022 Chianti Classico 'Fioraie,' Piemaggio — 19/76
- 2024 Côtes du Jura Trousseau, Courbet — 20/80
- 2022 Bourgogne 'Les Charmeaux,' Prudhon — 21/84
- 2019 Margaux, Château Moulin de Tricot — 23/92
- 2021 Willamette Pinot Noir, Raptor 375mL — 44
`;

const HEIRLOOM_MENU = `
CURRENT MENU HIGHLIGHTS:
- Fennel, Napa cabbage, arugula, cara cara, walnuts, feta, lemon vinaigrette
- Liberty Farms duck confit, pea purée, farro, Nantes carrots, braised radish
- Artichoke soup, cashew cream, crispy artichokes, mint, lemon butter
- Little gem lettuces, English peas, watermelon radish, sieved egg, Dijon vinaigrette
- Hamachi crudo, chive aioli, crispy shallots, fresno chili, radish
- House made fettuccini, morel mushrooms, English peas, leek cream, Parmesan
- Northern halibut, cauliflower puree, asparagus, maitake mushrooms, lemon
- White wine braised short rib, butter beans, Bloomsdale spinach, harissa
- Polenta cake, whipped crème fraîche, vanilla-poached rhubarb
`;

export async function POST(request: NextRequest) {
  try {
    const { dish, color, budget, fromOurList } = await request.json();

    if (!dish) {
      return NextResponse.json({ error: "Please describe a dish" }, { status: 400 });
    }

    const colorPref = color && color !== "No preference" ? `The guest prefers ${color} wine.` : "The guest has no color preference.";
    const budgetPref = budget && budget !== "No preference" ? `Budget: ${budget} per bottle.` : "No specific budget.";

    const listContext = fromOurList
      ? `IMPORTANT: Recommend a wine from Heirloom's current wine list below. If no perfect match exists on the list, recommend the closest option and explain why.\n\n${HEIRLOOM_WINE_LIST}\n\n${HEIRLOOM_MENU}`
      : "Recommend any wine from anywhere in the world. Be specific with producer, grape, and region.";

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 600,
      system: `You are the sommelier at Heirloom Café, a warm, chef-driven farm-to-table restaurant at 2500 Folsom Street in San Francisco. The restaurant is known for its carefully managed wine cellar with mature, aged wines from California and Europe.

You give specific, opinionated wine pairing recommendations with warmth and confidence, like a trusted friend who happens to be a wine expert. You know the restaurant's cellar intimately.

${listContext}

Always respond in this exact JSON format (no markdown, no code fences, just raw JSON):
{
  "wine": "Specific wine recommendation (full name as it appears on the list if from our list, or grape/producer/region if from anywhere)",
  "explanation": "2-3 sentences explaining WHY this wine pairs well. Mention flavor bridges, texture, acidity, weight. Be specific about the interaction between food and wine.",
  "sommNote": "A short, warm, conversational aside. What you'd whisper tableside. Could be about the producer, the vintage, a serving tip, or a fun fact about the pairing."
}`,
      messages: [
        {
          role: "user",
          content: `A guest is having: ${dish}\n\n${colorPref}\n${budgetPref}\n\nWhat wine would you pair with this?`,
        },
      ],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const parsed = JSON.parse(text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Wine pairing error:", error);
    return NextResponse.json(
      { error: "Something went wrong finding your pairing. Please try again." },
      { status: 500 }
    );
  }
}
