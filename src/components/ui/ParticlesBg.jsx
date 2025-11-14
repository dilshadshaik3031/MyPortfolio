import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBg({ className = "" }) {
  const particlesInit = useCallback(async (engine) => {
    // load the full bundle
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 28, density: { enable: true, area: 800 } },
      color: { value: "#9CA3AF" },
      links: {
        enable: true,
        distance: 160,
        color: "#6B7280",
        opacity: 0.08,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        outModes: { default: "out" },
      },
      opacity: { value: 0.7, random: { enable: true, minimumValue: 0.2 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    background: { color: "" },
  };

  return (
    <div className={className} aria-hidden="true">
      <Particles init={particlesInit} options={options} />
    </div>
  );
}
