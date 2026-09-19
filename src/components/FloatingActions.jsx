import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

// Stacked floating contact actions — call on top, WhatsApp below —
// positioned once here so each button stays a simple, reusable circle.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-4 lg:bottom-8 lg:right-8">
      <CallButton />
      <WhatsAppButton />
    </div>
  );
}