export type NavItem = { label: string; href: string };

export const PORT_GUIDE_PATH = "/montreal-cruise-port-guide";
export const CRUISE_PLANNER_PATH = "/montreal-cruise-planner";

export const mainNav: NavItem[] = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: PORT_GUIDE_PATH },
  { label: "Cruise Planner", href: CRUISE_PLANNER_PATH },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "Montréal Cruise Port Guide", href: PORT_GUIDE_PATH },
  { label: "Best Montréal Shore Excursions", href: "/best-montreal-shore-excursions" },
  {
    label: "Things To Do From A Cruise Ship",
    href: "/things-to-do-in-montreal-from-a-cruise-ship",
  },
  { label: "One Day In Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
  { label: "Old Montréal From Cruise Port", href: "/old-montreal-from-cruise-port" },
  { label: "Walking From Cruise Port", href: "/walking-montreal-from-cruise-port" },
  { label: "Pre/Post Cruise Guide", href: "/montreal-pre-post-cruise-guide" },
  { label: "French Canadian Culture", href: "/french-canadian-culture-montreal-cruise-guide" },
  { label: "Notre-Dame Basilica", href: "/notre-dame-basilica-montreal-guide" },
  { label: "Mount Royal", href: "/mount-royal-from-cruise-port" },
  { label: "Montréal Food Tour Guide", href: "/montreal-food-tour-guide" },
  { label: "Québec City From Montréal", href: "/quebec-city-from-montreal-cruise-port" },
  { label: "Best Time To Visit", href: "/best-time-to-visit-montreal" },
  { label: "Cruise Ship Schedule", href: "/montreal-cruise-ship-schedule" },
  { label: "Cruise Planner", href: CRUISE_PLANNER_PATH },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Old Montréal Guide", href: "/old-montreal-from-cruise-port" },
  { label: "French Canadian Culture", href: "/french-canadian-culture-montreal-cruise-guide" },
  { label: "Notre-Dame Basilica Guide", href: "/notre-dame-basilica-montreal-guide" },
  { label: "Mount Royal Guide", href: "/mount-royal-from-cruise-port" },
  { label: "Montréal Food Guide", href: "/montreal-food-tour-guide" },
  { label: "Québec City Timing", href: "/quebec-city-from-montreal-cruise-port" },
  { label: "Pre/Post Cruise Montréal", href: "/montreal-pre-post-cruise-guide" },
];

export const excursionLinks: NavItem[] = [
  { label: "Old Montréal Walking Tour", href: "/old-montreal-walking-tour" },
  { label: "City Highlights Tour", href: "/montreal-city-highlights-tour" },
  { label: "Notre-Dame Basilica Tour", href: "/notre-dame-basilica-tour" },
  { label: "Mount Royal Scenic Tour", href: "/mount-royal-scenic-tour" },
  { label: "Montréal Food Tour", href: "/montreal-food-tour" },
  { label: "Montréal Bike Tour", href: "/montreal-bike-tour" },
  { label: "St. Lawrence River Cruise", href: "/st-lawrence-river-cruise" },
  { label: "Pre/Post Cruise Tour", href: "/pre-post-cruise-montreal-tour" },
  { label: "Québec City Day Trip", href: "/quebec-city-from-montreal" },
  { label: "Laurentians Day Trip", href: "/laurentians-day-trip" },
];
