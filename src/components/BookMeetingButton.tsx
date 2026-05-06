"use client";

import { useEffect } from "react";

export default function BookMeetingButton({ className }: { className?: string }) {
  useEffect(() => {
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            let script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "15min", { origin: "https://app.cal.com" });
    Cal.ns["15min"]("ui", {
      theme: "light",
      cssVarsPerTheme: { 
        light: { "cal-brand": "#F4522A" },
        dark: { "cal-brand": "#F4522A" }
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <button
      data-cal-link="welwaat/15min"
      data-cal-namespace="15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={
        className ||
        "inline-flex justify-center items-center px-6 py-3 font-medium bg-[#F4522A] text-white rounded-[100px] transition-colors hover:bg-[#e04320] shadow-[0_4px_14px_0_rgba(0,0,0,0.15)]"
      }
    >
      Book a meeting
    </button>
  );
}
