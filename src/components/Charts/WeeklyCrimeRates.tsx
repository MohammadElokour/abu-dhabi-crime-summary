import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  {
    date: "6/7/24",
    count: 10,
  },
  {
    date: "13/7/24",
    count: 6,
  },
  {
    date: "20/7/24",
    count: 8,
  },
  {
    date: "27/7/24",
    count: 3,
  },
  {
    date: "3/8/24",
    count: 14,
  },
  {
    date: "10/8/24",
    count: 4,
  },
  {
    date: "17/8/24",
    count: 7,
  },
];
const WeeklyCrimeRates = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <XAxis dataKey="date" tickCount={data.length} tickLine={false} />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend
          iconSize={0}
          formatter={(name) => (
            <div className="flex items-center gap-2 -mt-6">
              <p className="text-xl">{name}</p>
              <div className="size-4 bg-[#8884d8]" />
            </div>
          )}
        />
        <Bar name="معدل الجرائم الأسبوعية" dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyCrimeRates;
