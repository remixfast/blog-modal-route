export interface Widget {
  widgetId: number;
  widgetName: string;
  widgetNumber: string;
}

export function getNewWidget() {
  return {
    widgetId: undefined,
    widgetName: "",
    widgetNumber: "",
  };
}
