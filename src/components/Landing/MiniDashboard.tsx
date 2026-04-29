"use client";

import { useEffect, useState, useCallback } from "react";

// --- Animated Counter ---
function AnimatedNumber({ target, duration = 2000, prefix = "", suffix = "" }: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setValue(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <span>
      {prefix}
      {new Intl.NumberFormat('en-US').format(value)}
      {suffix}
    </span>
  );
}

// --- Sparkline Chart (SVG) ---
function Sparkline({ data, color, height = 40, animate = true }: {
  data: number[];
  color: string;
  height?: number;
  animate?: boolean;
}) {
  const [progress, setProgress] = useState(animate ? 0 : 1);

  useEffect(() => {
    if (!animate) return;
    const start = Date.now();
    const dur = 1500;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
    };
    const delay = setTimeout(() => requestAnimationFrame(tick), 500);
    return () => clearTimeout(delay);
  }, [animate]);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const visibleCount = Math.ceil(data.length * progress);
  const points = data.slice(0, visibleCount).map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(" ");

  const areaPoints = points + ` ${((visibleCount - 1) / (data.length - 1)) * w},${height} 0,${height}`;

  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" style={{ height }}>
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {visibleCount > 1 && (
        <>
          <polygon
            points={areaPoints}
            fill={`url(#grad-${color.replace("#", "")})`}
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

// --- Animated Bar Chart ---
function BarChart({ data, labels, color }: {
  data: number[];
  labels: string[];
  color: string;
}) {
  const [animated, setAnimated] = useState(false);
  const max = Math.max(...data);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-end gap-1.5" style={{ height: 100 }}>
      {data.map((value, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="relative w-full rounded-t-sm" style={{ height: 80 }}>
            <div
              className="absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ease-out"
              style={{
                height: animated ? `${(value / max) * 100}%` : "0%",
                backgroundColor: color,
                opacity: 0.7 + (i / data.length) * 0.3,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          </div>
          <span className="text-[9px] text-gray-500">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

// --- Donut Chart ---
function DonutChart({ segments, size = 80 }: {
  segments: { value: number; color: string; label: string }[];
  size?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const r = 30;
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 600);
    return () => clearTimeout(timer);
  }, []);

  let offset = 0;

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 80 80">
        {segments.map((seg, i) => {
          const dash = (seg.value / total) * circumference;
          const currentOffset = offset;
          offset += dash;
          return (
            <circle
              key={i}
              cx="40"
              cy="40"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="8"
              strokeDasharray={`${animated ? dash : 0} ${circumference}`}
              strokeDashoffset={-currentOffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${i * 200}ms` }}
              transform="rotate(-90 40 40)"
            />
          );
        })}
        <text x="40" y="40" textAnchor="middle" dominantBaseline="central" className="fill-white text-xs font-bold">
          {Math.round((segments[0].value / total) * 100)}%
        </text>
      </svg>
      <div className="flex flex-col gap-1">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
            <span className="text-[10px] text-gray-400">{seg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Live Activity Feed ---
function ActivityFeed() {
  const activities = [
    { user: "Sarah K.", action: "viewed Dashboard", time: "2m ago", color: "#4A7C59" },
    { user: "Mike R.", action: "exported Report", time: "5m ago", color: "#6B9E7B" },
    { user: "Alex T.", action: "created Alert", time: "12m ago", color: "#3A6347" },
    { user: "Jordan L.", action: "updated KPI", time: "18m ago", color: "#4A7C59" },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = activities.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), 1000 + i * 400)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-2">
      {activities.slice(0, visibleCount).map((act, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-2 animate-[fadeSlideIn_0.3s_ease-out]"
        >
          <div
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: act.color }}
          >
            {act.user.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-medium text-gray-200">{act.user}</span>
            <span className="text-[11px] text-gray-500"> {act.action}</span>
          </div>
          <span className="shrink-0 text-[10px] text-gray-600">{act.time}</span>
        </div>
      ))}
    </div>
  );
}

// --- Live Ticker ---
function LiveTicker() {
  const [visitors, setVisitors] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((v) => v + Math.floor(Math.random() * 5) - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="text-[11px] text-gray-400">
        <span className="font-medium text-green-400">{new Intl.NumberFormat('en-US').format(visitors)}</span> active now
      </span>
    </div>
  );
}

// --- Tab Selector ---
function TabSelector({ tabs, active, onChange }: {
  tabs: string[];
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex gap-0.5 rounded-lg bg-white/[0.04] p-0.5">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-all ${
            active === i
              ? "bg-[#4A7C59] text-white shadow-sm"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// --- Main Component ---
export function MiniDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const revenueData = [
    [30, 45, 35, 55, 48, 62, 58, 72, 68, 85, 78, 92],
    [20, 35, 25, 45, 38, 52, 48, 62, 58, 75, 68, 82],
    [40, 55, 45, 65, 58, 72, 68, 82, 78, 95, 88, 100],
  ];

  const barData = [42, 58, 35, 72, 64, 48, 80];
  const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const kpiCards = [
    { label: "Revenue", value: 48520, prefix: "$", change: "+12.5%", positive: true },
    { label: "Users", value: 8941, change: "+8.2%", positive: true },
    { label: "Orders", value: 1247, change: "+23.1%", positive: true },
    { label: "Conv. Rate", value: 3.2, suffix: "%", change: "-0.4%", positive: false },
  ];

  return (
    <div className="select-none">
      {/* Browser Chrome */}
      <div className="rounded-t-xl border border-white/10 bg-[#1a2e22] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57] transition-transform hover:scale-110" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e] transition-transform hover:scale-110" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] transition-transform hover:scale-110" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-[#0a1a12] px-3 py-1.5">
            <svg className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[11px] text-gray-500">app.novaanalytics.io/dashboard</span>
          </div>
          <LiveTicker />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="rounded-b-xl border border-t-0 border-white/10 bg-[#0d1f15] p-4 md:p-5">
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Dashboard Overview</h3>
            <p className="text-[11px] text-gray-500">Real-time analytics for your business</p>
          </div>
          <TabSelector tabs={["24h", "7d", "30d"]} active={activeTab} onChange={setActiveTab} />
        </div>

        {/* KPI Cards */}
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
          {kpiCards.map((kpi, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 ${
                hoveredCard === i ? "border-[#4A7C59]/40 bg-white/[0.05] scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-1 text-[10px] text-gray-500">{kpi.label}</div>
              <div className="text-lg font-bold text-white md:text-xl">
                <AnimatedNumber
                  target={kpi.value}
                  prefix={kpi.prefix || ""}
                  suffix={kpi.suffix || ""}
                  duration={1500 + i * 300}
                />
              </div>
              <div className={`mt-1 text-[10px] font-medium ${kpi.positive ? "text-green-400" : "text-red-400"}`}>
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-3 md:grid-cols-5">
          {/* Revenue Chart */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 md:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-medium text-gray-300">Revenue Trend</span>
              <span className="text-[10px] text-gray-500">Last 12 months</span>
            </div>
            <Sparkline
              data={revenueData[activeTab]}
              color="#4A7C59"
              height={80}
              key={activeTab}
            />
          </div>

          {/* Donut + Activity */}
          <div className="space-y-3 md:col-span-2">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="mb-2 text-[11px] font-medium text-gray-300">Traffic Source</div>
              <DonutChart
                segments={[
                  { value: 45, color: "#4A7C59", label: "Organic" },
                  { value: 25, color: "#6B9E7B", label: "Direct" },
                  { value: 20, color: "#3A6347", label: "Referral" },
                  { value: 10, color: "#2d4f38", label: "Social" },
                ]}
                size={70}
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {/* Bar Chart */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="mb-2 text-[11px] font-medium text-gray-300">Weekly Sessions</div>
            <BarChart data={barData} labels={barLabels} color="#4A7C59" />
          </div>

          {/* Activity Feed */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="mb-2 text-[11px] font-medium text-gray-300">Recent Activity</div>
            <ActivityFeed />
          </div>
        </div>
      </div>

      {/* Inline keyframe for fade-in animation */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
