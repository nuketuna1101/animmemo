import React from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC<{ progress: number}> = ({progress}) => {
    // const [progress, setProgress] = useState(0);
    const r = 100;          // 반지름
    const stroke = 25;           // 테두리 두께
    const normalizedr = r - stroke;
    const circumference = normalizedr * 2 * Math.PI;
    const strokeDashoffset = circumference * (1 - (progress / 100));

    return (
        <div className="progress-bar-container">
            <svg height={r * 2} width={r * 2}>
                <circle
                    stroke="teal"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedr}
                    cx={r}
                    cy={r}
                />
                <circle
                    stroke="yellow"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedr}
                    cx={r}
                    cy={r}
                    transform={`rotate(-90 ${r} ${r})`}
                />
            </svg>
        </div>
    );
};

export default ProgressBar;
