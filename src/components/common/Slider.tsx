import React from "react";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => (
  <div className="w-full flex flex-col gap-2">
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
    />
    <span className="text-xs text-muted-foreground">{value}</span>
  </div>
);

export default Slider; 