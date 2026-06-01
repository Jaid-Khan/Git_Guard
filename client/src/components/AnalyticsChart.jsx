import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const AnalyticsChart = ({
  title,
  data,
  type,
}) => {
  if (type === "pie") {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-bold mb-4">
          {title}
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="_id"
              outerRadius={100}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold mb-4">
        {title}
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;