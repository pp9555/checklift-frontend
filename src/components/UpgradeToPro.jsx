import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

import { Link } from "react-router-dom";

const UpgradeToPro = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div >
        
        <Button onClick={() => setOpen(true)} className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white">
          <Rocket className="h-4 w-4" />
          Upgrade to Pro
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to Pro</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>🔓 Unlock the full power of Checklift:</p>
            <ul className="list-disc list-inside ml-2">
              <li>Monitor up to 500 URLs</li>
              <li>Instant email + Slack alerts</li>
              <li>Broken link detection every 5 minutes</li>
              <li>Advanced analytics and uptime history</li>
              <li>Priority support</li>
            </ul>
            <Link to ="/pricing" className="text-blue-600 hover:underline">
            <Button
              className="w-full mt-4"
            >
              Choose Pro Plans
            </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpgradeToPro;
