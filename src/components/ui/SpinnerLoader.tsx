import React from "react";

export default function SpinnerLoader({ color }: { color?: string }) {
  return (
    <div>
      <div
        className="spinnerLoader"
        style={{ background: `${color || "#000"}` }}
      />
    </div>
  );
}
