import {
  Siren, PanelsTopLeft, Cog, KeyRound, Cable, DoorClosed,
} from "lucide-react";

export const services = [
  {
    slug: "emergency-repair",
    icon: Siren,
    title: "Emergency Repair",
    short: "Door stuck open or shut? We're rolling within the hour.",
    description:
      "A garage door that won't move is a security problem, not just an inconvenience. Our on-call technicians carry the parts to fix 90% of emergencies on the first visit — nights, weekends, and holidays included.",
    bullets: ["Same-hour dispatch in most areas", "Fully stocked service vans", "Upfront pricing before we start"],
  },
  {
    slug: "panel-replacement",
    icon: PanelsTopLeft,
    title: "Panel Replacement",
    short: "Dented or cracked panels swapped without replacing the whole door.",
    description:
      "One bad panel doesn't mean a new door. We match the exact profile, gauge, and finish of your existing door and replace only what's damaged, saving you the cost of a full teardown.",
    bullets: ["Colour and profile matched", "Insurance-claim paperwork support", "Insulated & steel options"],
  },
  {
    slug: "spring-replacement",
    icon: Cog,
    title: "Spring Replacement",
    short: "The part that does 90% of the lifting — replaced safely, same day.",
    description:
      "Torsion and extension springs are under enormous tension and are the most common cause of injury in DIY repairs. We replace both springs as a pair, balance the door, and test it under load before we leave.",
    bullets: ["Always replaced in pairs", "High-cycle springs available", "Door balance test included"],
  },
  {
    slug: "keypad-repair",
    icon: KeyRound,
    title: "Keypad Repair",
    short: "Lost the code, or the pad just won't respond? Sorted in one visit.",
    description:
      "From dead batteries to failed sync with your opener, we diagnose and fix wireless and wired keypads, reprogram codes, and set you up with backup access so you're never locked out again.",
    bullets: ["Code reprogramming", "Battery & wiring checks", "Smartphone app pairing"],
  },
  {
    slug: "cable-repair",
    icon: Cable,
    title: "Cable Repair",
    short: "Frayed or snapped cables replaced before they become a bigger problem.",
    description:
      "Lift cables wear invisibly until they snap, sometimes taking a panel with them. We inspect drums and cables together, replace worn sets, and re-tension the system for even, quiet operation.",
    bullets: ["Drum & cable inspected together", "Galvanized cable upgrade option", "Re-tension & noise check"],
  },
  {
    slug: "opener-installation",
    icon: DoorClosed,
    title: "Opener Install & Repair",
    short: "New belt-drive openers, or fixing the one you've already got.",
    description:
      "Whether your opener is grinding, not responding to remotes, or you're ready to upgrade to a quiet smart opener with camera and app control, we install and repair every major brand.",
    bullets: ["Belt, chain & smart openers", "Remote & sensor alignment", "Old unit removal included"],
  },
];
