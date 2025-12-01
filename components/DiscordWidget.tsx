"use client";

import Link from "next/link";

export default function DiscordWidget() {
  return (
    <div className="discord-widget">
      <div className="discord-widget-inner">
        <div className="discord-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 127.14 96.36"
            fill="#5865F2"
          >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.27,0a72.06,72.06,0,0,0-3.36,6.88A97.68,97.68,0,0,0,49.23,6.88,72.37,72.37,0,0,0,45.86,0,105.89,105.89,0,0,0,19.38,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.72-13.73,68.42,68.42,0,0,1-10.6-5.18c.89-.64,1.77-1.31,2.62-2a75.57,75.57,0,0,0,62.62,0c.86.71,1.74,1.38,2.62,2a68.36,68.36,0,0,1-10.62,5.19A77,77,0,0,0,95.19,96.36a105.62,105.62,0,0,0,31.42-16.15C129,56.6,124.44,32.64,107.7,8.07ZM42.52,66.09c-6.06,0-11-5.57-11-12.43s4.85-12.44,11-12.44S53.57,46.8,53.57,53.66,48.63,66.09,42.52,66.09Zm42.11,0c-6.06,0-11-5.57-11-12.43s4.84-12.44,11-12.44S95.68,46.8,95.68,53.66,90.91,66.09,84.63,66.09Z" />
          </svg>
        </div>

        <h3 className="discord-title">Join the Discord</h3>
        <p className="discord-desc">
          Get updates, chat with devs, ask questions, and share your builds.
        </p>

        <Link
          href="https://discord.gg/NEM4Gc7fqd"
          target="_blank"
          className="discord-button"
        >
          Enter the Server →
        </Link>
      </div>
    </div>
  );
}
