// Line-style icons, 1.75px stroke. Pure geometry, no AI.
const Icon = ({ children, size = 22, color = "currentColor", strokeWidth = 1.75, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const IcCoffee = (p) => <Icon {...p}><path d="M4 9h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z"/><path d="M17 11h2a2.5 2.5 0 0 1 0 5h-2"/><path d="M8 3v2M11 3v2M14 3v2"/></Icon>;
const IcMilk = (p) => <Icon {...p}><path d="M9 3h6v3l1.5 3.5A6 6 0 0 1 17 12v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6a6 6 0 0 1 .5-2.5L9 6V3Z"/><path d="M8 12h8"/></Icon>;
const IcShop = (p) => <Icon {...p}><path d="M3 9 5 4h14l2 5"/><path d="M3 9v11h18V9"/><path d="M3 9c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3"/><path d="M9 20v-6h6v6"/></Icon>;
const IcChart = (p) => <Icon {...p}><path d="M4 19V5"/><path d="M4 19h16"/><rect x="8" y="13" width="3" height="6"/><rect x="13" y="9" width="3" height="10"/><rect x="18" y="6" width="2.5" height="13"/></Icon>;
const IcBolt = (p) => <Icon {...p}><path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></Icon>;
const IcShield = (p) => <Icon {...p}><path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></Icon>;
const IcUsers = (p) => <Icon {...p}><circle cx="9" cy="8" r="3"/><path d="M3 19c0-3.5 2.5-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M14 19v-1c0-2 1.5-4 4-4s3 1 3 3"/></Icon>;
const IcWrench = (p) => <Icon {...p}><path d="M14.5 4a4.5 4.5 0 0 0-4 6.5L3 18l3 3 7.5-7.5A4.5 4.5 0 1 0 14.5 4Z"/><circle cx="14.5" cy="8.5" r="1" fill="currentColor"/></Icon>;
const IcTruck = (p) => <Icon {...p}><rect x="2" y="7" width="11" height="9"/><path d="M13 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></Icon>;
const IcMap = (p) => <Icon {...p}><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z"/><path d="M9 4v14M15 6v14"/></Icon>;
const IcHash = (p) => <Icon {...p}><path d="M5 9h16M3 15h16M10 3l-2 18M16 3l-2 18"/></Icon>;
const IcPhone = (p) => <Icon {...p}><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></Icon>;
const IcBell = (p) => <Icon {...p}><path d="M6 17V11a6 6 0 1 1 12 0v6"/><path d="M4 17h16"/><path d="M10 20a2 2 0 0 0 4 0"/></Icon>;
const IcEye = (p) => <Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></Icon>;
const IcLock = (p) => <Icon {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></Icon>;
const IcDoc = (p) => <Icon {...p}><path d="M7 3h7l5 5v13H7V3Z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/></Icon>;
const IcLeaf = (p) => <Icon {...p}><path d="M4 20c0-9 6-16 16-16 0 9-6 16-16 16Z"/><path d="M4 20 14 10"/></Icon>;
const IcStar = (p) => <Icon {...p}><path d="m12 3 2.6 5.5 6 .9-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.9L12 3Z"/></Icon>;
const IcSpark = (p) => <Icon {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4"/></Icon>;
const IcFlame = (p) => <Icon {...p}><path d="M12 3c2 4-3 6-3 10a4 4 0 0 0 8 0c0-2-1-3-1-5 2 1 4 3 4 7a8 8 0 1 1-13.5-5.5C8 7 11 6 12 3Z"/></Icon>;
const IcArrow = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
const IcWhats = (p) => <Icon {...p}><path d="M3 21l1.5-5A8 8 0 1 1 8 19l-5 2Z"/><path d="M9 10c1 3 2 4 5 5l1-1.5c0-.5 0-1 1-1l1.5.5c.5.5.5 1 .5 1.5-.5 1-1.5 1.5-2.5 1.5-3 0-7-3-7-7 0-1 .5-2 1.5-2.5.5 0 1 0 1.5.5l.5 1.5c0 1-.5 1-1 1L9 10Z"/></Icon>;
const IcInsta = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/></Icon>;
const IcFb = (p) => <Icon {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v8h4v-8h3l1-4h-4V8Z"/></Icon>;

Object.assign(window, {
  Icon, IcCoffee, IcMilk, IcShop, IcChart, IcBolt, IcShield, IcUsers, IcWrench, IcTruck,
  IcMap, IcHash, IcPhone, IcBell, IcEye, IcLock, IcDoc, IcLeaf, IcStar, IcSpark, IcFlame,
  IcArrow, IcWhats, IcInsta, IcFb,
});
