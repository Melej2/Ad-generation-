import type { EditAction, PageModel, SectionKey } from "@/types/pageModel";

// ── Deep-clone helper ──────────────────────────────────────────────────────
function clone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

// ── Dot-notation setter ────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setByPath(obj: any, path: string, value: unknown): void {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (cur[key] === undefined || cur[key] === null) {
      cur[key] = {};
    }
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
}

// ── Normalize path for update_text ────────────────────────────────────────
// Accepts both "hero.headline" and "sections.hero.headline"
function normalizePath(path: string): string {
  if (path.startsWith("sections.") || path.startsWith("meta.") || path.startsWith("sectionOrder")) {
    return path;
  }
  return `sections.${path}`;
}

// ── Apply a single action ──────────────────────────────────────────────────
function applyOne(model: PageModel, action: EditAction): PageModel {
  switch (action.type) {
    case "update_text": {
      const path = normalizePath(action.target);
      setByPath(model, path, action.value);
      return model;
    }

    case "update_style": {
      const section = model.sections[action.target as SectionKey];
      if (section) {
        section.style = { ...section.style, ...action.style };
      }
      return model;
    }

    case "add_section": {
      if (!model.sectionOrder.includes(action.key)) {
        const pos = action.position ?? model.sectionOrder.length;
        model.sectionOrder.splice(pos, 0, action.key);
      }
      // Re-show if previously hidden
      const sec = model.sections[action.key];
      if (sec) sec.visible = true;
      return model;
    }

    case "remove_section": {
      // Set invisible rather than splice — preserves undo-ability
      const sec = model.sections[action.key];
      if (sec) sec.visible = false;
      return model;
    }

    case "reorder_section": {
      const idx = model.sectionOrder.indexOf(action.key);
      if (idx === -1) return model;
      const swapIdx = action.direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= model.sectionOrder.length) return model;
      [model.sectionOrder[idx], model.sectionOrder[swapIdx]] = [
        model.sectionOrder[swapIdx],
        model.sectionOrder[idx],
      ];
      return model;
    }

    case "replace_section": {
      const existing = model.sections[action.key];
      if (existing) {
        (model.sections as Record<string, unknown>)[action.key] = {
          ...existing,
          ...action.data,
        };
      }
      return model;
    }

    default:
      return model;
  }
}

// ── Public API ─────────────────────────────────────────────────────────────
export function applyEditActions(model: PageModel, actions: EditAction[]): PageModel {
  let current = clone(model);
  for (const action of actions) {
    current = applyOne(current, action);
  }
  return current;
}
