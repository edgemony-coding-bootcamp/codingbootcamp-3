import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

const particles = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#232741",
    image:
      "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "20%",
  },
};

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const [particlesOptions, setParticlesOptions] = useState(particles);
  const [inputColor, setInputColor] = useState("");
  const [inputSpeed, setInputSpeed] = useState(1);

  function changeParticlesColor(e) {
    setInputColor(e.target.value);

    return setParticlesOptions({
      ...particles,
      particles: { ...particles.particles, color: e.target.value },
    });
  }

  function changeParticlesSpeed(e) {
    setInputSpeed(e.target.value);

    return setParticlesOptions({
      ...particles,
      particles: {
        ...particles.particles,
        move: { ...particles.particles.move, speed: e.target.value * 2 },
      },
    });
  }

  return (
    <div className="App">
      <div className="legend">
        <label htmlFor="color" id="color" name="color">
          Color
        </label>
        <input
          id="color"
          type="color"
          value={inputColor}
          onChange={changeParticlesColor}
        />

        <label htmlFor="range" id="range" name="range">
          Speed
        </label>
        <input
          id="range"
          type="range"
          value={inputSpeed}
          onChange={changeParticlesSpeed}
        />

        <label htmlFor="gravity" id="gravity" name="gravity">
          Gravity
        </label>
        <input
          id="gravity"
          type="checkbox"
          // value={inputGravity}
          // onChange={functionEnableGravity}
        />

        {/* <button onClick={changeParticlesColor}>Set Color</button> */}
      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default App;
