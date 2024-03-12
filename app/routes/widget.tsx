import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { Widget } from "~/models/widget";
import * as widgetDb from "~/models/widget.server";

export async function loader() {
  const widgetList: Widget[] = await widgetDb.getList();
  return json({ widgetList });
}

export default function WidgetRoute() {
  const { widgetList } = useLoaderData<typeof loader>();
  return (
    <div className="h-full overflow-auto">
      <Outlet />
      {widgetList.map((w) => (
        <Link key={w.widgetId} to={`${w.widgetId}`}>
          <div className="m-4 rounded-md border p-4">
            <div className="text-large font-semibold">{w.widgetName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
