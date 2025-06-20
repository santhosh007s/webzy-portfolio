

'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#4B8AEF" },
          dark: { "cal-brand": "#4B8AEF" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="contact" className="min-h-screen  text-white px-4 md:translate-y-8 py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Book a Free 15-Minute Call
        </h2>
        <p className="text-[#4a8bef] max-w-2xl mx-auto font-myfont">
          Let’s discuss your project idea, business goals, and how we can bring your vision to life.
        </p>
      </div>

      {/* Remove fixed height and scroll */}
      <div className="w-full max-w-4xl shadow-xl rounded-xl overflow-hidden">
        <Cal
          namespace="15min"
          calLink="santhosh-perumal-qwqkgl/15min"
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </section>
  );
}
