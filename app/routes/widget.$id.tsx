import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

import { getNewWidget } from "~/models/widget";
import * as widgetDb from "~/models/widget.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const id = +(params?.id || 0);
  if (!id || id == 0) {
    return json({ widget: getNewWidget() });
  }
  //
  const data = await widgetDb.get(id);
  if (!data) {
    throw new Response("Widget not found", { status: 404 });
  }
  return json({ widget: data });
}

export default function WidgetDetailRoute() {
  const { widget } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Dialog
      open={true}
      onOpenChange={(open: boolean) => {
        open ? () => {} : handleClose();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Widget</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {widget.widgetName}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {widget.widgetNumber}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
