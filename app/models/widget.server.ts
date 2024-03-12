import { Widget } from "~/models/widget";

export async function getList() {
  const widgets: Widget[] = [];
  for (let i = 0; i < 33; i++) {
    widgets.push({
      widgetId: i + 1,
      widgetName: `Widget ${i + 1}`,
      widgetNumber: `W-${i + 1}`,
    });
  }
  return widgets;
}

// get a single widget
export async function get(id: number) {
  return {
    widgetId: id,
    widgetName: `Widget ${id}`,
    widgetNumber: `W-${id}`,
  };
}
